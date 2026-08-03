"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "marc-website-review-v9";
const REVIEW_CHANGE_EVENT = "marc-website-review-change";
const EDITABLE_SELECTOR = "main h1, main h2, main h3, main p, main figcaption";

type ReviewEntry = {
  page: string;
  id: string;
  tag: string;
  context: string;
  original: string;
  edited: string;
  note: string;
  updatedAt: string;
};

type ReviewStore = Record<string, ReviewEntry>;

function loadStore(): ReviewStore {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "{}") as ReviewStore;
  } catch {
    return {};
  }
}

function saveStore(store: ReviewStore) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  window.dispatchEvent(new Event(REVIEW_CHANGE_EVENT));
}

function entryKey(page: string, id: string) {
  return `${page}::${id}`;
}

function hasFeedback(entry: ReviewEntry) {
  return entry.edited.trim() !== entry.original.trim() || entry.note.trim().length > 0;
}

function feedbackCount(store: ReviewStore) {
  return Object.values(store).filter(hasFeedback).length;
}

function contextFor(element: HTMLElement) {
  const container = element.closest("header, section, article, footer");
  const heading = container?.querySelector<HTMLElement>("h1, h2, h3");
  if (heading && heading !== element) return heading.innerText.trim();
  return "Page copy";
}

function feedbackPackage() {
  const entries = Object.values(loadStore())
    .filter(hasFeedback)
    .sort((a, b) => `${a.page}-${a.id}`.localeCompare(`${b.page}-${b.id}`));

  return {
    format: "marc-website-review/v1",
    exportedAt: new Date().toISOString(),
    instructions: "Each entry contains the original website text, the edited text, and an optional note.",
    entries,
  };
}

function subscribeToReview(callback: () => void) {
  window.addEventListener(REVIEW_CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(REVIEW_CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function subscribeToLocation(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function reviewEnabledSnapshot() {
  const params = new URLSearchParams(window.location.search);
  return window.location.hostname === "localhost" && params.get("review") === "1";
}

export default function ReviewMode() {
  const pathname = usePathname();
  const enabled = useSyncExternalStore(subscribeToLocation, reviewEnabledSnapshot, () => false);
  const savedCount = useSyncExternalStore(
    subscribeToReview,
    () => feedbackCount(loadStore()),
    () => 0,
  );
  const [editing, setEditing] = useState(true);
  const [selected, setSelected] = useState<ReviewEntry | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!enabled) return;

    document.body.dataset.reviewMode = "true";
    document.body.dataset.reviewEditing = editing ? "true" : "false";

    const elements = Array.from(document.querySelectorAll<HTMLElement>(EDITABLE_SELECTOR));
    const store = loadStore();

    elements.forEach((element, index) => {
      const id = `copy-${index + 1}`;
      const original = element.dataset.reviewOriginal ?? element.innerText.trim();
      const stored = store[entryKey(pathname, id)];

      element.dataset.reviewId = id;
      element.dataset.reviewOriginal = original;
      element.setAttribute("contenteditable", editing ? "plaintext-only" : "false");
      element.setAttribute("spellcheck", "true");
      delete element.dataset.reviewSelected;

      if (stored && stored.original === original) {
        element.innerText = stored.edited;
        if (hasFeedback(stored)) element.dataset.reviewHasFeedback = "true";
      }

      if (selected?.id === id) element.dataset.reviewSelected = "true";
    });

    const selectElement = (element: HTMLElement) => {
      document.querySelectorAll<HTMLElement>("[data-review-selected]").forEach((item) => {
        delete item.dataset.reviewSelected;
      });

      element.dataset.reviewSelected = "true";
      const id = element.dataset.reviewId ?? "";
      const original = element.dataset.reviewOriginal ?? element.innerText.trim();
      const stored = loadStore()[entryKey(pathname, id)];
      const current: ReviewEntry = stored?.original === original
        ? stored
        : {
            page: pathname,
            id,
            tag: element.tagName.toLowerCase(),
            context: contextFor(element),
            original,
            edited: element.innerText.trim(),
            note: "",
            updatedAt: new Date().toISOString(),
          };

      setSelected(current);
      setMessage("");
      if (editing) element.focus();
    };

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const editable = event.target.closest<HTMLElement>("[data-review-id]");
      if (editable) {
        event.preventDefault();
        event.stopPropagation();
        selectElement(editable);
        return;
      }

      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target === "_blank") return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      event.preventDefault();
      url.searchParams.set("review", "1");
      window.location.assign(url.toString());
    };

    const handleInput = (event: Event) => {
      if (!(event.target instanceof HTMLElement)) return;
      const element = event.target.closest<HTMLElement>("[data-review-id]");
      if (!element) return;

      const id = element.dataset.reviewId ?? "";
      const original = element.dataset.reviewOriginal ?? "";
      const key = entryKey(pathname, id);
      const nextStore = loadStore();
      const previous = nextStore[key];
      const entry: ReviewEntry = {
        page: pathname,
        id,
        tag: element.tagName.toLowerCase(),
        context: previous?.context ?? contextFor(element),
        original,
        edited: element.innerText.trim(),
        note: previous?.note ?? "",
        updatedAt: new Date().toISOString(),
      };

      if (hasFeedback(entry)) {
        nextStore[key] = entry;
        element.dataset.reviewHasFeedback = "true";
      } else {
        delete nextStore[key];
        delete element.dataset.reviewHasFeedback;
      }

      saveStore(nextStore);
      setSelected((current) => current?.id === id ? entry : current);
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("input", handleInput, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("input", handleInput, true);
    };
  }, [editing, enabled, pathname, selected?.id]);

  if (!enabled) return null;

  const updateNote = (note: string) => {
    if (!selected) return;

    const next = { ...selected, note, updatedAt: new Date().toISOString() };
    const store = loadStore();
    const key = entryKey(next.page, next.id);

    if (hasFeedback(next)) store[key] = next;
    else delete store[key];

    saveStore(store);
    setSelected(next);

    const element = document.querySelector<HTMLElement>(`[data-review-id="${next.id}"]`);
    if (element) {
      if (hasFeedback(next)) element.dataset.reviewHasFeedback = "true";
      else delete element.dataset.reviewHasFeedback;
    }
  };

  const restoreOriginal = () => {
    if (!selected) return;
    const element = document.querySelector<HTMLElement>(`[data-review-id="${selected.id}"]`);
    if (element) element.innerText = selected.original;

    const store = loadStore();
    const key = entryKey(selected.page, selected.id);
    const next = { ...selected, edited: selected.original, updatedAt: new Date().toISOString() };
    if (hasFeedback(next)) store[key] = next;
    else delete store[key];
    saveStore(store);
    setSelected(next);
    if (element && !hasFeedback(next)) delete element.dataset.reviewHasFeedback;
  };

  const exportFeedback = () => {
    const payload = JSON.stringify(feedbackPackage(), null, 2);
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `marc-website-review-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setMessage("Feedback file downloaded");
  };

  const copyFeedback = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(feedbackPackage(), null, 2));
      setMessage("Feedback copied");
    } catch {
      setMessage("Clipboard unavailable—use Export");
    }
  };

  const exitReview = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("review");
    window.location.assign(url.toString());
  };

  return (
    <div data-review-ui>
      {selected && (
        <aside className="review-notes-panel" aria-label="Review note for selected text">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/40">Selected text</p>
              <p className="mt-2 text-sm leading-5 text-white/75">{selected.context}</p>
            </div>
            <button type="button" onClick={() => setSelected(null)} className="review-small-button" aria-label="Close note panel">Close</button>
          </div>
          <label className="mt-5 block font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/40" htmlFor="review-note">Note</label>
          <textarea
            id="review-note"
            value={selected.note}
            onChange={(event) => updateNote(event.target.value)}
            placeholder="Add context, preferred wording, or a request for this section."
            className="mt-2 min-h-32 w-full resize-y border border-white/20 bg-black/40 p-3 text-sm leading-6 text-white/80 outline-none focus:border-[#ff8062]"
          />
          <div className="mt-4 flex items-center justify-between gap-4">
            <button type="button" onClick={restoreOriginal} className="review-small-button">Restore original text</button>
            <span className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-white/28">Saved locally</span>
          </div>
        </aside>
      )}

      <div className="review-toolbar" role="region" aria-label="Website review controls">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#ff8062]" />
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-white/80">Review mode</span>
            <span className="font-mono text-[0.58rem] text-white/35">{savedCount} saved</span>
          </div>
          <p className="mt-1 hidden text-xs text-white/42 sm:block">Click any highlighted text to edit it or attach a note.</p>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2">
          <button type="button" onClick={() => setEditing((value) => !value)} className="review-button">Editing {editing ? "on" : "off"}</button>
          <button type="button" onClick={copyFeedback} className="review-button">Copy</button>
          <button type="button" onClick={exportFeedback} className="review-button">Export</button>
          <button type="button" onClick={exitReview} className="review-button review-button-primary">Exit</button>
        </div>
        {message && <p className="absolute -top-8 right-0 bg-[#f2efe7] px-3 py-1.5 text-xs text-black">{message}</p>}
      </div>
    </div>
  );
}
