import type { Metadata } from "next";
import Link from "next/link";
import FigureSlot from "@/components/FigureSlot";
import JourneyMap from "@/components/JourneyMap";
import MediaFrame from "@/components/MediaFrame";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Journey",
  description: "The research journey that shaped Marc Duque Ramírez's multiscale approach to neuroscience.",
};

type JourneyStop = {
  number: string;
  location: string;
  institution: string;
  lab: string;
  period: string;
  role: string;
  title: string;
  description: string;
  tags: string[];
  media: string;
  path: string;
  tone: "orange" | "cyan" | "violet";
  type?: "image" | "video";
  alt?: string;
  poster?: string;
  fit?: "cover" | "contain";
  aspect?: "video" | "four-three" | "portrait" | "square" | "wide";
  captionPosition?: "overlay" | "below";
  mediaClassName?: string;
  unoptimized?: boolean;
  mediaLayout?: "stacked" | "split";
};

const stops: JourneyStop[] = [
  {
    number: "01",
    location: "Barcelona",
    institution: "IRB Barcelona & University of Barcelona",
    lab: "Giralt Lab · Soriano Lab",
    period: "2013–2018",
    role: "Crazy About Biomedicine participant · Undergraduate researcher",
    title: "From chemical biology to neural networks",
    description: "The Crazy About Biomedicine program introduced me to experimental research through cyclic peptides and molecular transport. During my biochemistry degree, I later used modeling, calcium imaging, and an in vitro optogenetic stimulation system in primary rat-neuron cultures to study how functional connectivity and patterned activity develop.",
    tags: ["Chemical biology", "Calcium imaging", "Optogenetics"],
    media: "Crazy About Biomedicine 2013 at IRB Barcelona",
    path: "/media/journey/barcelona/main.jpg",
    type: "image" as const,
    alt: "Group photograph from the Crazy About Biomedicine program at IRB Barcelona in 2013",
    fit: "contain" as const,
    aspect: "four-three" as const,
    captionPosition: "below" as const,
    tone: "orange" as const,
  },
  {
    number: "02",
    location: "Heidelberg",
    institution: "EMBL",
    lab: "Hiiragi Lab",
    period: "Summers 2015 & 2016",
    role: "Undergraduate Research Fellow",
    title: "Stress and scaling in early mammalian development",
    description: "In Takashi Hiiragi’s lab, I studied how pre-implantation stress affects gene expression and cell-cycle regulation in mammalian embryos. Using confocal and SPIM microscopy, I developed image-analysis tools that showed embryos halved at the two-cell stage start recovering their cell number only after the 128-cell stage.",
    tags: ["Pre-implantation development", "Confocal & SPIM", "Image analysis"],
    media: "Control and chimeric pre-implantation mouse embryos",
    path: "/media/journey/embl/chimera-vs-control-highres.jpg",
    type: "image" as const,
    alt: "A control and a chimeric pre-implantation mouse embryo labeled with fluorescent markers",
    fit: "contain" as const,
    aspect: "four-three" as const,
    captionPosition: "below" as const,
    unoptimized: true,
    tone: "violet" as const,
  },
  {
    number: "03",
    location: "Ashburn, Virginia",
    institution: "HHMI Janelia",
    lab: "Keller Lab · Funke Lab",
    period: "February–August 2018",
    role: "HHMI Undergraduate Research Scholar",
    title: "Detecting cell divisions in four-dimensional embryo data",
    description: "Working with Philipp Keller, Jan Funke, and Kate McDole, I developed a 4D U-Net to detect cell divisions in next-generation light-sheet datasets of post-implantation mouse embryos. The analysis showed that division events cluster at the leading edge of growing tissues and became the basis of my B.S. thesis.",
    tags: ["4D U-Net", "Light-sheet microscopy", "Mouse gastrulation"],
    media: "Division detector on a developing mouse embryo undergoing gastrulation",
    path: "/media/journey/janelia/main.mp4",
    poster: "/media/journey/janelia/main-poster.jpg",
    type: "video" as const,
    alt: "Fluorescence microscopy of a developing mouse embryo during gastrulation with detected cell divisions highlighted",
    fit: "contain" as const,
    aspect: "square" as const,
    captionPosition: "below" as const,
    mediaClassName: "min-h-0 w-full",
    mediaLayout: "split" as const,
    tone: "cyan" as const,
  },
  {
    number: "04",
    location: "San Diego",
    institution: "Salk Institute",
    lab: "Chalasani Lab",
    period: "February 2019–April 2021",
    role: "Research Assistant",
    title: "Sonogenetics and non-invasive neuromodulation",
    description: "With Sreekanth Chalasani, I helped advance sonogenetics by testing the exogenous mechanosensitive channel hsTRPA1 as an ultrasound-sensitive actuator in mammalian cells. This work combined cellular imaging and quantitative analysis and contributed to publications and patents on ultrasound-mediated cellular control.",
    tags: ["Sonogenetics", "Ultrasound", "hsTRPA1"],
    media: "Sonogenetics figure or calcium imaging",
    path: "/media/journey/salk/main.mp4",
    poster: "/media/journey/salk/main-poster.jpg",
    type: "video" as const,
    alt: "Calcium response in neurons during ultrasound stimulation",
    tone: "violet" as const,
  },
  {
    number: "05",
    location: "Cambridge",
    institution: "Harvard University",
    lab: "Engert Lab · HHMI Janelia",
    period: "2020–2026 (expected)",
    role: "Ph.D. student in Neuroscience · Engert Lab from February 2022",
    title: "Neural and glial control of behavioral transitions",
    description: "I combine virtual-reality behavior, whole-brain calcium imaging, pharmacology, and causal perturbations in larval zebrafish to study how neural and glial systems shape behavioral transitions. This work has identified norepinephrine–astroglial mechanisms involved in perseverance and in the persistent effects of ketamine.",
    tags: ["Systems neuroscience", "Larval zebrafish", "Neural & glial dynamics"],
    media: "With Florian Engert, Alex Chen, and Matthew Meselson at Harvard",
    path: "/media/journey/harvard/main.jpg",
    type: "image" as const,
    alt: "Marc Duque Ramírez with Florian Engert, Alex Chen, and Matthew Meselson",
    tone: "orange" as const,
  },
];

function JourneyStopMedia({ stop }: { stop: JourneyStop }) {
  return stop.type && stop.alt ? (
    <MediaFrame
      number={stop.number}
      label={stop.media}
      src={stop.path}
      type={stop.type}
      alt={stop.alt}
      poster={stop.poster}
      tone={stop.tone}
      fit={stop.fit}
      aspect={stop.aspect}
      captionPosition={stop.captionPosition}
      unoptimized={stop.unoptimized}
      className={stop.mediaClassName ?? (stop.aspect ? "min-h-0" : "min-h-[21rem]")}
    />
  ) : (
    <FigureSlot number={stop.number} label={stop.media} path={stop.path} tone={stop.tone} className="min-h-[21rem]" />
  );
}

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-[#080a0a] text-[#f4f1e8]">
      <Navbar />

      <header className="site-grid border-b border-white/15 pt-[4.75rem]">
        <div className="page-shell grid gap-10 py-12 md:grid-cols-12 md:items-start md:py-16">
          <div data-reveal="left" className="md:col-span-3 md:self-start"><p className="eyebrow border-t border-white/15 pt-4 text-[#ff8062]">Research journey · 01—05</p></div>
          <div data-reveal="rise" data-reveal-delay="90" className="md:col-span-9">
            <h1 className="page-title max-w-[13ch]">A research path across systems and scales.</h1>
            <p className="body-copy mt-9 max-w-3xl border-t border-white/15 pt-7 text-white/50">My path through chemical biology, developmental biology, microscopy, mechanobiology, ultrasound, and systems neuroscience shaped how I now move between molecules, cells, circuits, and whole-brain dynamics.</p>
          </div>
        </div>
      </header>

      <section className="journey-field site-grid bg-[#0d100f]">
        <div className="page-shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-14 lg:py-24">
          <aside data-reveal="left" className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
            <p className="eyebrow text-white/32">Five places · one developing approach</p>
            <JourneyMap />
          </aside>

          <div className="lg:col-span-7 lg:col-start-6">
            {stops.map((stop, index) => (
              <article
                id={`journey-stop-${stop.number}`}
                data-journey-stop={stop.number}
                data-reveal="rise"
                data-reveal-delay={String(index * 35)}
                key={stop.number}
                className="journey-stop border-t border-white/15 py-10 lg:min-h-[78vh] lg:py-14"
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="font-mono text-xs text-[#ff8062]">{stop.number}</span>
                  <p className="eyebrow text-white/42">{stop.location}</p>
                  <span className="h-px w-8 bg-white/15" />
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-white/32">{stop.period}</p>
                </div>
                <h2 className="mt-5 text-[clamp(2.35rem,4vw,4.4rem)] leading-none tracking-[-0.055em]">{stop.institution}</h2>
                <div className="mt-7 grid gap-2 border-y border-white/12 py-4 sm:grid-cols-2 sm:gap-6">
                  <p className="font-mono text-[0.62rem] uppercase leading-5 tracking-[0.11em] text-white/48">{stop.role}</p>
                  <p className="font-mono text-[0.62rem] uppercase leading-5 tracking-[0.11em] text-white/28 sm:text-right">{stop.lab}</p>
                </div>
                {stop.mediaLayout === "split" ? (
                  <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] md:items-start">
                    <div>
                      <h3 className="text-xl leading-tight tracking-[-0.03em] text-white/72 md:text-2xl">{stop.title}</h3>
                      <p className="mt-5 text-base leading-7 text-white/45">{stop.description}</p>
                      <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/12 pt-5 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-white/28">
                        {stop.tags.map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                    </div>
                    <JourneyStopMedia stop={stop} />
                  </div>
                ) : (
                  <>
                    <h3 className="mt-7 text-xl leading-tight tracking-[-0.03em] text-white/72 md:text-2xl">{stop.title}</h3>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-white/45">{stop.description}</p>
                    <div className="mt-8"><JourneyStopMedia stop={stop} /></div>
                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-white/28">
                      {stop.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/15">
        <Link data-reveal="rise" href="/publications" className="page-shell group grid gap-8 py-20 md:grid-cols-12 md:items-end md:py-28">
          <div className="md:col-span-3"><p className="eyebrow text-white/30">Next</p></div>
          <h2 className="section-title md:col-span-8">Publications</h2>
          <span className="text-4xl text-white/25 transition group-hover:translate-x-2 group-hover:text-[#ff6847] md:text-right">→</span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
