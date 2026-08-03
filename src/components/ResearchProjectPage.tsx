import Link from "next/link";
import type { ReactNode } from "react";
import FigureSlot from "@/components/FigureSlot";
import MediaFrame, { type MediaFrameProps } from "@/components/MediaFrame";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

type Tone = "orange" | "cyan" | "violet";

type ProjectMedia = Omit<MediaFrameProps, "number"> & {
  number?: string;
};

type ResearchProjectPageProps = {
  number: string;
  eyebrow: string;
  title: string;
  question: string;
  summary: string;
  figure: {
    label: string;
    path: string;
    tone: Tone;
    type?: "image" | "video";
    alt?: string;
    poster?: string;
    fit?: "cover" | "contain";
    aspect?: "video" | "four-three" | "portrait" | "square" | "wide";
    captionPosition?: "overlay" | "below";
    copyright?: string;
  };
  heroWide?: boolean;
  heroFeature?: boolean;
  heroMediaClassName?: string;
  mediaGallery?: ProjectMedia[];
  mediaGalleryLayout?: "balanced" | "featured-first";
  overviewTitle: string;
  overview: ReactNode[];
  sources?: Array<{ label: string; href: string }>;
  directions?: Array<{ number: string; title: string; text: ReactNode; media?: ProjectMedia; mediaLayout?: "split" | "stacked" }>;
  methods: string[];
  next: { label: string; href: string };
};

export default function ResearchProjectPage({
  number,
  eyebrow,
  title,
  question,
  summary,
  figure,
  heroWide = false,
  heroFeature = false,
  heroMediaClassName,
  mediaGallery = [],
  mediaGalleryLayout = "balanced",
  overviewTitle,
  overview,
  sources = [],
  directions = [],
  methods,
  next,
}: ResearchProjectPageProps) {
  const galleryGrid = mediaGallery.length >= 3
    ? "lg:grid-cols-3"
    : mediaGallery.length === 2
      ? mediaGalleryLayout === "featured-first"
        ? "lg:grid-cols-[1.3fr_0.7fr]"
        : "lg:grid-cols-2"
      : "";
  const heroTextColumns = heroFeature ? "lg:col-span-4" : heroWide ? "lg:col-span-5" : "lg:col-span-6";
  const heroMediaColumns = heroFeature ? "lg:col-span-7" : heroWide ? "lg:col-span-6" : "lg:col-span-5";

  return (
    <main className="min-h-screen bg-[#080a0a] text-[#f4f1e8]">
      <Navbar />

      <header className="site-grid border-b border-white/15 pt-[4.75rem]">
        <div className="page-shell grid gap-10 py-12 lg:grid-cols-12 lg:items-start lg:py-16">
          <div data-reveal="left" className="lg:col-span-1 lg:pt-1"><p className="font-mono text-xs text-[#ff8062]">{number}</p></div>
          <div data-reveal="rise" data-reveal-delay="70" className={heroTextColumns}>
            <p className="eyebrow text-white/38">{eyebrow}</p>
            <h1 className="page-title mt-7 max-w-[11ch]">{title}</h1>
            <p className="mt-9 max-w-3xl text-2xl leading-9 tracking-[-0.03em] text-white/70">{question}</p>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/45">{summary}</p>
          </div>
          <div data-reveal="scale" data-reveal-delay="150" className={heroMediaColumns}>
            {figure.type && figure.alt ? (
              <MediaFrame
                number={number}
                label={figure.label}
                src={figure.path}
                type={figure.type}
                alt={figure.alt}
                poster={figure.poster}
                tone={figure.tone}
                fit={figure.fit}
                aspect={figure.aspect}
                captionPosition={figure.captionPosition}
                copyright={figure.copyright}
                className={heroMediaClassName ?? (heroWide || heroFeature ? "min-h-[30rem]" : "min-h-[26rem]")}
              />
            ) : (
              <FigureSlot number={number} label={figure.label} path={figure.path} tone={figure.tone} className={heroMediaClassName ?? (heroWide || heroFeature ? "min-h-[30rem]" : "min-h-[26rem]")} />
            )}
          </div>
        </div>
      </header>

      <section className="paper-grid bg-[#eeeae0] text-[#080a0a]">
        <div className="page-shell section-pad grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3"><p className="eyebrow text-black/42">What we did</p></div>
          <div className="md:col-span-9">
            <h2 className="section-title max-w-[14ch]">{overviewTitle}</h2>
            <div className="mt-10 grid gap-8 border-t border-black/18 pt-8 lg:grid-cols-2">
              {overview.map((paragraph, index) => <p key={index} className="body-copy text-black/58">{paragraph}</p>)}
            </div>
            {mediaGallery.length > 0 && (
              <div className={`mt-14 grid gap-5 ${galleryGrid}`}>
                {mediaGallery.map((media, index) => (
                  <MediaFrame
                    key={media.src}
                    {...media}
                    number={media.number ?? `${number}.${index + 1}`}
                    className={`min-h-[18rem] ${media.className ?? ""}`}
                  />
                ))}
              </div>
            )}
            {sources.length > 0 && (
              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-black/18 pt-6">
                <p className="eyebrow text-black/38">Key papers</p>
                {sources.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-black/56 underline decoration-black/25 underline-offset-4 transition hover:text-black"
                  >
                    {source.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="paper-grid bg-[#d8e5e6] text-[#071011]">
        <div className="page-shell section-pad">
          {directions.length > 0 && (
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-3">
                <p className="eyebrow text-black/42">Current directions</p>
              </div>
              <div className="space-y-12 md:col-span-9">
                {directions.map((direction) => (
                  <article key={direction.number} className={direction.media ? direction.mediaLayout === "stacked" ? "grid gap-8" : "grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center" : ""}>
                    <div>
                      <h3 className="text-2xl tracking-[-0.04em] text-black/82">{direction.title}</h3>
                      <p className="mt-4 max-w-3xl text-base leading-8 text-black/56">{direction.text}</p>
                    </div>
                    {direction.media && (
                      <MediaFrame
                        {...direction.media}
                        number={direction.media.number ?? direction.number}
                        className={`!min-h-0 border-black/15 ${direction.media.className ?? ""}`}
                      />
                    )}
                  </article>
                ))}
              </div>
            </div>
          )}
          <div className="mt-16 flex flex-wrap gap-x-7 gap-y-3 border-t border-black/18 pt-7">
            <p className="eyebrow mr-3 text-black/42">Methods</p>
            {methods.map((method) => <span key={method} className="text-sm text-black/52">{method}</span>)}
          </div>
        </div>
      </section>

      <section className="border-t border-white/15 bg-[#080a0a]">
        <Link href={next.href} className="page-shell group grid gap-8 py-16 md:grid-cols-12 md:items-end md:py-20">
          <div className="md:col-span-3"><p className="eyebrow text-white/30">Next project</p></div>
          <h2 className="section-title md:col-span-8">{next.label}</h2>
          <span className="text-4xl text-white/25 transition group-hover:translate-x-2 group-hover:text-[#ff6847] md:text-right">→</span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
