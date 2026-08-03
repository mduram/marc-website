"use client";

import { useEffect, useState } from "react";

const steps = [
  ["futility", "Behavioral transition"],
  ["ketamine", "Chemical perturbation"],
  ["anesthesia", "General anesthesia"],
];

export default function ResearchStoryRail() {
  const [active, setActive] = useState("futility");

  useEffect(() => {
    const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-story-step]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const targetLine = window.innerHeight * 0.38;
      let closest = panels[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      panels.forEach((panel) => {
        const rect = panel.getBoundingClientRect();
        const distance = Math.abs(rect.top + Math.min(rect.height, window.innerHeight) * 0.22 - targetLine);
        if (distance < closestDistance) {
          closest = panel;
          closestDistance = distance;
        }
      });

      if (closest?.dataset.storyStep) setActive(closest.dataset.storyStep);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ol className="story-rail mt-10 border-t border-white/15">
      {steps.map(([id, label], index) => (
        <li key={id} className={active === id ? "is-active" : ""}>
          <a href={`#story-${id}`} aria-current={active === id ? "step" : undefined}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span>{label}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}
