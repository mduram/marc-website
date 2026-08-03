"use client";

import Image from "next/image";
import { useState } from "react";

type MediaBlockProps = {
  type: "image" | "video";
  src: string;
  alt: string;
  placeholderLabel: string;
  className?: string;
  objectFit?: "cover" | "contain";
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
};

export default function MediaBlock({
  type,
  src,
  alt,
  placeholderLabel,
  className = "",
  objectFit = "cover",
  controls = false,
  autoPlay = true,
  loop = true,
  muted = true,
}: MediaBlockProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-white/[0.035] ${className}`}
      >
        <div className="px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Media placeholder
          </p>

          <p className="mt-4 text-sm leading-6 text-white/45">
            {placeholderLabel}
          </p>

          <p className="mt-3 text-xs text-white/20">
            Expected file: {src}
          </p>
        </div>
      </div>
    );
  }

  if (type === "video") {
    return (
      <video
        src={src}
        aria-label={alt}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        controls={controls}
        onError={() => setFailed(true)}
        className={`h-full w-full ${
          objectFit === "contain" ? "object-contain" : "object-cover"
        } ${className}`}
      />
    );
  }

  return (
    <div className={`relative h-full w-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        onError={() => setFailed(true)}
        className={objectFit === "contain" ? "object-contain" : "object-cover"}
      />
    </div>
  );
}
