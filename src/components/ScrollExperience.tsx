"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollExperience() {
  const progressRef = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const explicitRevealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const headerRevealElements = Array.from(
      document.querySelectorAll<HTMLElement>("main > header .page-shell > *"),
    ).filter((element) => !element.querySelector("[data-reveal]") && !element.matches("[data-reveal]"));
    const sectionRevealElements = Array.from(
      document.querySelectorAll<HTMLElement>("main > section > .page-shell"),
    ).filter((element) => !element.querySelector("[data-reveal]"));
    const revealElements = Array.from(new Set([...explicitRevealElements, ...headerRevealElements, ...sectionRevealElements]));
    const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>(".media-frame"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    revealElements.forEach((element) => element.classList.add("scroll-reveal-target"));
    headerRevealElements.forEach((element, index) => {
      element.classList.add(index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right");
      element.style.setProperty("--reveal-delay", `${index * 90}ms`);
    });
    sectionRevealElements.forEach((element, index) => {
      element.classList.add(index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right");
    });

    let revealObserver: IntersectionObserver | undefined;

    if (reducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            revealObserver?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
      );

      revealElements.forEach((element) => {
        const delay = element.dataset.revealDelay;
        if (delay) element.style.setProperty("--reveal-delay", `${delay}ms`);
        revealObserver?.observe(element);
      });
    }

    root.classList.add("scroll-motion-ready");

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const available = root.scrollHeight - window.innerHeight;
      const progress = available > 0 ? Math.min(1, Math.max(0, window.scrollY / available)) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      root.style.setProperty("--grid-shift", `${window.scrollY * -0.055}px`);

      if (!reducedMotion) {
        parallaxElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > window.innerHeight) return;
          const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
          const shift = Math.max(-10, Math.min(10, centerOffset * -0.022));
          element.style.setProperty("--media-shift", `${shift.toFixed(2)}px`);
        });
      }
    };
    const requestProgressUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate);

    return () => {
      revealObserver?.disconnect();
      window.removeEventListener("scroll", requestProgressUpdate);
      window.removeEventListener("resize", requestProgressUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      revealElements.forEach((element) => {
        element.classList.remove("scroll-reveal-target", "scroll-reveal-left", "scroll-reveal-right", "is-visible");
        element.style.removeProperty("--reveal-delay");
      });
      parallaxElements.forEach((element) => element.style.removeProperty("--media-shift"));
      root.style.removeProperty("--grid-shift");
      root.classList.remove("scroll-motion-ready");
    };
  }, [pathname]);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span ref={progressRef} />
    </div>
  );
}
