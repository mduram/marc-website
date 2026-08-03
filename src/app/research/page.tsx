import type { Metadata } from "next";
import Link from "next/link";
import FigureSlot from "@/components/FigureSlot";
import MediaFrame from "@/components/MediaFrame";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { modelSystems, researchProjects } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description: "Research on how brain-wide activity shapes behavior and how circuits, neuromodulators, and drugs make that activity change.",
};

const methods = [
  ["Futility-induced passivity using virtual reality", "Control the relationship between action and sensory feedback."],
  ["Whole-brain imaging", "Follow distributed neural dynamics at cellular resolution."],
  ["Electron microscopy", "Connect functional observations to circuit architecture."],
  ["Optogenetic perturbation", "Test causal roles of defined neural and glial populations."],
  ["Quantitative behavior", "Measure the structure and timing of behavioral change."],
  ["Pharmacology", "Use compounds to perturb receptor and neuromodulatory pathways and follow the consequences across scales."],
];

const projectMedia = {
  "behavioral-transitions": {
    label: "Futility-induced passivity: a controlled switch from struggling to giving up",
    tone: "orange" as const,
    copyright: "© Marc Duque Ramírez",
  },
  "pharmacology-plasticity": {
    label: "Astroglial activity following ketamine exposure",
    tone: "violet" as const,
    copyright: "© Duque et al. 2025",
  },
  anesthesia: {
    label: "Whole-brain activity during propofol anesthesia",
    tone: "cyan" as const,
    copyright: "© Marc Duque Ramírez",
  },
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#080a0a] text-[#f4f1e8]">
      <Navbar />

      <header className="site-grid border-b border-white/15 pt-[4.75rem]">
        <div className="page-shell grid gap-10 py-12 md:grid-cols-12 md:items-start md:py-16">
          <div className="md:col-span-3 md:self-start">
            <div className="border-t border-white/15 pt-4">
              <p className="eyebrow text-[#ff8062]">Research index</p>
              <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-white/25">Program 2022—present</p>
            </div>
          </div>
          <div className="md:col-span-9">
            <h1 className="page-title max-w-[12ch]">Neural dynamics and behavioral change.</h1>
            <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-2">
              <p className="body-copy text-white/58">How does ongoing activity across the brain influence what an animal does?</p>
              <p className="body-copy text-white/45">How does activation of specific circuits, through neuromodulators and receptors, cause that activity to shift between states?</p>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-[#0d100f]">
        <div className="page-shell section-pad">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3"><p className="eyebrow text-white/35">Projects 01—03</p></div>
            <div className="md:col-span-9"><h2 className="section-title max-w-[12ch]">Current projects</h2><p className="body-copy mt-8 max-w-3xl text-white/45">The work uses controlled behavior, whole-brain imaging, connectomics, and pharmacology to move between molecular mechanisms and changes in behavior.</p></div>
          </div>

          <div className="mt-16">
            {researchProjects.map((project) => (
              <article key={project.slug} className="grid gap-8 border-t border-white/15 py-12 lg:grid-cols-12 lg:py-16">
                <div className="lg:col-span-1"><span className="font-mono text-xs text-[#ff8062]">{project.number}</span></div>
                <div className="lg:col-span-5 lg:pr-8">
                  <p className="eyebrow text-white/35">{project.eyebrow}</p>
                  <h2 className="mt-5 text-4xl leading-[0.98] tracking-[-0.05em] md:text-5xl"><Link href={project.href} className="transition hover:text-[#ff8062]">{project.title}</Link></h2>
                  <p className="mt-7 text-xl leading-8 text-white/72">{project.question}</p>
                  <p className="mt-6 text-base leading-7 text-white/45">{project.description}</p>
                  <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-white/28">
                    {project.methods.slice(0, 4).map((method) => <span key={method}>{method}</span>)}
                  </div>
                  <Link href={project.href} className="mt-9 inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-sm text-white/65 transition hover:border-white/55 hover:text-white">Read the project <span>→</span></Link>
                </div>
                <div className="lg:col-span-6">
                  {project.media.available ? (
                    <MediaFrame
                      number={project.number}
                      label={projectMedia[project.slug as keyof typeof projectMedia].label}
                      src={project.media.hero}
                      type="video"
                      alt={project.media.alt}
                      poster={project.media.poster}
                      tone={projectMedia[project.slug as keyof typeof projectMedia].tone}
                      copyright={projectMedia[project.slug as keyof typeof projectMedia].copyright}
                      fit="contain"
                      className="h-full min-h-[25rem]"
                    />
                  ) : (
                    <FigureSlot number={project.number} label="Whole-brain dynamics across induction and recovery" path={project.media.hero} tone="cyan" className="h-full min-h-[25rem]" />
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="paper-grid bg-[#8fc8d5] text-[#071011]">
        <div className="page-shell section-pad grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3"><p className="eyebrow text-black/42">Experimental toolkit</p></div>
          <div className="md:col-span-9">
            <h2 className="section-title max-w-[13ch]">Methods</h2>
            <div className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {methods.map(([title, text]) => (
                <div key={title} className="border-t border-black/18 py-6">
                  <h3 className="text-lg tracking-[-0.025em] text-black/72">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/50">{text}</p>
                </div>
              ))}
            </div>
            <Link href={modelSystems.href} className="group mt-12 grid gap-5 border-t border-black/22 py-7 sm:grid-cols-[0.38fr_0.62fr_auto] sm:items-center">
              <h3 className="text-2xl tracking-[-0.04em]">Model organisms & imaging</h3>
              <p className="text-sm leading-6 text-black/50">{modelSystems.description}</p>
              <span className="text-2xl text-black/30 transition group-hover:translate-x-1 group-hover:text-black">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/15 bg-[#080a0a]">
        <Link href="/journey" className="page-shell group grid gap-8 py-20 md:grid-cols-12 md:items-end md:py-28">
          <div className="md:col-span-3"><p className="eyebrow text-white/30">Next · Background</p></div>
          <h2 className="section-title md:col-span-8">Research journey</h2>
          <span className="text-4xl text-white/25 transition group-hover:translate-x-2 group-hover:text-[#ff6847] md:text-right">→</span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
