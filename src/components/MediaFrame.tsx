"use client";

import Image from "next/image";

export type MediaFrameProps = {
  number: string;
  label: string;
  src: string;
  type: "image" | "video";
  alt: string;
  poster?: string;
  playbackRate?: number;
  tone?: "orange" | "cyan" | "violet";
  fit?: "cover" | "contain";
  aspect?: "video" | "four-three" | "portrait" | "square" | "wide";
  captionPosition?: "overlay" | "below";
  copyright?: string;
  unoptimized?: boolean;
  className?: string;
};

const tones = {
  orange: "bg-[#ff8062]",
  cyan: "bg-[#a9dce7]",
  violet: "bg-[#cfc3f3]",
};

export default function MediaFrame({
  number,
  label,
  src,
  type,
  alt,
  poster,
  playbackRate = 1,
  tone = "orange",
  fit = "cover",
  aspect,
  captionPosition = "overlay",
  copyright,
  unoptimized = false,
  className = "",
}: MediaFrameProps) {
  const objectClass = fit === "contain" ? "object-contain" : "object-cover";
  const captionBelow = captionPosition === "below";
  const aspectClass = aspect === "video"
    ? "aspect-video flex-none"
    : aspect === "four-three"
      ? "aspect-[4/3] flex-none"
      : aspect === "portrait"
        ? "aspect-[3/5] flex-none"
        : aspect === "square"
          ? "aspect-square flex-none"
          : aspect === "wide"
            ? "aspect-[2026/1068] flex-none"
      : captionBelow
        ? "min-h-0 flex-1"
        : "";

  return (
    <figure
      className={`media-frame group relative min-h-72 border border-white/15 bg-black ${captionBelow ? "flex flex-col overflow-hidden" : "overflow-hidden"} ${className}`}
    >
      <div className={captionBelow ? `relative overflow-hidden bg-black ${aspectClass}` : "absolute inset-0 overflow-hidden bg-black"}>
        {type === "video" ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
            aria-label={alt}
            onLoadedMetadata={(event) => {
              event.currentTarget.defaultPlaybackRate = playbackRate;
              event.currentTarget.playbackRate = playbackRate;
            }}
            className={`absolute inset-0 h-full w-full ${objectClass}`}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            unoptimized={unoptimized}
            className={objectClass}
          />
        )}
        {copyright && (
          <span className="pointer-events-none absolute right-3 top-3 z-20 bg-black/64 px-2 py-1 font-mono text-[0.5rem] uppercase tracking-[0.1em] text-white/62 backdrop-blur-sm">
            {copyright}
          </span>
        )}
      </div>

      {captionBelow ? (
        <figcaption className="relative z-10 flex items-center gap-3 border-t border-white/18 bg-[#0d100f] px-5 py-4 text-sm leading-6 text-white/70">
          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${tones[tone]}`} />
          <span className="flex-1">{label}</span>
          <span className="font-mono text-[0.56rem] text-white/36">{number}</span>
        </figcaption>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-transparent to-transparent" />
          <figcaption className="absolute inset-x-5 bottom-5 z-10 flex items-center gap-3 border-t border-white/24 pt-4 text-sm leading-6 text-white/76">
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${tones[tone]}`} />
            <span className="flex-1">{label}</span>
            <span className="font-mono text-[0.56rem] text-white/36">{number}</span>
          </figcaption>
        </>
      )}
    </figure>
  );
}
