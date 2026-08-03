"use client";

import { useEffect, useState } from "react";

const locations = [
  { id: "01", city: "Barcelona", x: 50.6, y: 27.0 },
  { id: "02", city: "Heidelberg", x: 52.4, y: 22.6 },
  { id: "03", city: "Ashburn", x: 28.5, y: 28.3 },
  { id: "04", city: "San Diego", x: 17.5, y: 31.8 },
  { id: "05", city: "Cambridge", x: 30.3, y: 26.5 },
];

export default function JourneyMap() {
  const [active, setActive] = useState("01");

  useEffect(() => {
    const stops = Array.from(document.querySelectorAll<HTMLElement>("[data-journey-stop]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const targetLine = window.innerHeight * 0.4;
      let closest = stops[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      stops.forEach((stop) => {
        const rect = stop.getBoundingClientRect();
        const distance = Math.abs(rect.top + Math.min(rect.height, window.innerHeight) * 0.2 - targetLine);
        if (distance < closestDistance) {
          closest = stop;
          closestDistance = distance;
        }
      });

      if (closest?.dataset.journeyStop) setActive(closest.dataset.journeyStop);
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

  const activeIndex = locations.findIndex((location) => location.id === active);

  return (
    <div className="journey-map-wrap">
      <svg className="journey-map" viewBox="0 0 1000 520" role="img" aria-label="Research journey from Barcelona to Heidelberg, Ashburn, San Diego, and Cambridge">
        <image className="journey-map-base" href="/media/journey/world-map-equirectangular.svg" x="0" y="10" width="1000" height="500" preserveAspectRatio="none" aria-hidden="true" />
        <g className="journey-map-grid" aria-hidden="true">
          {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((x) => <line key={`x-${x}`} x1={x} y1="10" x2={x} y2="510" />)}
          {[110, 210, 310, 410].map((y) => <line key={`y-${y}`} x1="0" y1={y} x2="1000" y2={y} />)}
        </g>

        {locations.slice(0, -1).map((location, index) => {
          const next = locations[index + 1];
          const x1 = location.x * 10;
          const y1 = location.y * 5 + 10;
          const x2 = next.x * 10;
          const y2 = next.y * 5 + 10;
          const curve = Math.max(34, Math.abs(x2 - x1) * 0.16);
          return (
            <path
              key={`${location.id}-${next.id}`}
              className={`journey-route-segment ${index < activeIndex ? "is-complete" : ""} ${index === activeIndex - 1 ? "is-current" : ""}`}
              d={`M ${x1} ${y1} Q ${(x1 + x2) / 2} ${Math.min(y1, y2) - curve} ${x2} ${y2}`}
            />
          );
        })}

        {locations.map((location, index) => (
          <a key={location.id} href={`#journey-stop-${location.id}`} className={`journey-map-node ${index <= activeIndex ? "is-complete" : ""} ${active === location.id ? "is-active" : ""}`}>
            <circle cx={location.x * 10} cy={location.y * 5 + 10} r="17" />
            <circle className="journey-map-node-core" cx={location.x * 10} cy={location.y * 5 + 10} r="4" />
            <text x={location.x * 10 + 15} y={location.y * 5 - 4}>{location.city}</text>
          </a>
        ))}
      </svg>

      <a className="journey-map-credit" href="https://commons.wikimedia.org/wiki/File:BlankMap-Equirectangular.svg" target="_blank" rel="noreferrer">Base map: Natural Earth · CC0 ↗</a>

      <ol className="journey-index">
        {locations.map((location) => (
          <li key={location.id} className={active === location.id ? "is-active" : ""}>
            <a href={`#journey-stop-${location.id}`} aria-current={active === location.id ? "step" : undefined}>
              <span>{location.id}</span>
              <span>{location.city}</span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
