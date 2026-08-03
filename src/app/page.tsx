import Image from "next/image";
import Link from "next/link";
import MediaFrame from "@/components/MediaFrame";
import Navbar from "@/components/Navbar";
import ResearchStoryRail from "@/components/ResearchStoryRail";
import SiteFooter from "@/components/SiteFooter";

const researchLinks = [
  ["01", "Futility-induced passivity", "A virtual-reality assay for studying the switch from struggling to giving up.", "/research/behavioral-transitions"],
  ["02", "Ketamine & psychedelics", "How chemical perturbations produce lasting changes in brain and behavioral states after a single dose.", "/research/pharmacology-plasticity"],
  ["03", "General anesthesia", "Whole-brain dynamics during induction, loss of responsiveness, and recovery.", "/research/anesthesia"],
  ["04", "Model organisms & imaging", "Larval zebrafish, light-sheet microscopy, and transparent adult fish.", "/research/model-systems"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080a0a] text-[#f4f1e8]">
      <Navbar />

      <header className="site-grid border-b border-white/12 pt-[4.75rem]">
        <div className="page-shell pb-12 lg:pb-14">
          <div data-reveal="rise" className="grid min-h-[9rem] items-center gap-5 border-b border-white/14 py-6 md:grid-cols-3">
            <div className="flex items-center gap-4">
              <Link href="/about" aria-label="About Marc Duque Ramírez" className="group relative h-14 w-14 shrink-0 rounded-full">
                <span className="absolute -inset-1.5 rounded-full border border-[#ff8062]/0 opacity-0 transition duration-500 group-hover:scale-110 group-hover:border-[#ff8062]/45 group-hover:opacity-100" />
                <span className="absolute inset-0 overflow-hidden rounded-full border border-white/20 bg-white/5 transition duration-500 group-hover:-translate-y-0.5 group-hover:border-white/45 group-hover:shadow-[0_0_1.75rem_rgba(255,104,71,0.2)]">
                  <Image src="/media/about/portrait.jpg" alt="Marc Duque Ramírez" fill sizes="56px" className="object-cover opacity-55 grayscale-[20%] transition duration-500 group-hover:scale-110 group-hover:opacity-95 group-hover:grayscale-0" />
                </span>
              </Link>
              <p className="eyebrow text-[#ff8062]">Marc Duque Ramírez</p>
            </div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.13em] text-white/32">Systems neuroscience · Engert Lab</p>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.13em] text-white/32 md:text-right">Harvard University</p>
          </div>

          <div className="grid gap-12 py-10 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-12">
            <div data-reveal="left" className="lg:col-span-5">
              <p className="eyebrow text-[#ff8062]">Brain-wide dynamics · Behavioral transitions</p>
              <h1 className="mt-7 max-w-[12ch] text-[clamp(3rem,4vw,4.65rem)] font-[480] leading-[0.96] tracking-[-0.055em]">
                How brain states shape behavior—and what makes them change.
              </h1>
              <p className="body-copy mt-8 max-w-xl text-white/55">I study how brain-wide dynamics define states that make particular behaviors more or less likely, and how sensory evidence, circuits, neuromodulators, and drugs move the brain from one state to another.</p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                <Link href="/research" className="signal-link text-white/70 hover:text-white">Research</Link>
                <Link href="/publications" className="signal-link text-white/70 hover:text-white">Publications</Link>
              </div>
            </div>

            <div data-reveal="right" data-reveal-delay="100" className="lg:col-span-7">
              <div className="mb-4 flex items-center justify-between gap-5 border-t border-white/14 pt-4">
                <p className="eyebrow text-white/38">Whole-brain calcium imaging</p>
                <span className="font-mono text-[0.56rem] uppercase tracking-[0.12em] text-white/24">7 dpf · H2B-GCaMP7f</span>
              </div>
              <figure className="media-frame group !min-h-0 overflow-hidden border border-white/14 bg-black">
                <div className="relative aspect-[826/512] overflow-hidden">
                  <video autoPlay muted loop playsInline preload="metadata" poster="/media/home/hero-brain-poster.jpg" aria-label="Whole-brain neural activity in a larval zebrafish" className="absolute inset-0 h-full w-full object-contain brightness-[1.12] contrast-[1.05]">
                    <source src="/media/home/hero-brain.mp4" type="video/mp4" />
                  </video>
                  <span className="pointer-events-none absolute right-3 top-3 z-10 bg-black/64 px-2 py-1 font-mono text-[0.5rem] uppercase tracking-[0.1em] text-white/62 backdrop-blur-sm">© Marc Duque Ramírez</span>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent" />
                </div>
                <figcaption className="relative z-10 flex items-center gap-3 border-t border-white/14 bg-[#0d100f] px-5 py-4 text-sm text-white/62">
                  <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-[#ff8062]" />
                  <span className="flex-1">Cellular-resolution activity across a 7-day-old larval zebrafish brain</span>
                  <span className="font-mono text-[0.54rem] uppercase tracking-[0.12em] text-white/24">Live imaging</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </header>

      <section className="paper-grid bg-[#8fc8d5] text-[#071011]">
        <div className="page-shell section-pad">
          <div data-reveal="rise" className="grid gap-8 border-b border-black/18 pb-10 md:grid-cols-12">
            <div className="md:col-span-3"><p className="eyebrow text-black/42">Research question</p></div>
            <div className="md:col-span-9">
              <h2 className="section-title max-w-[14ch]">Two linked questions.</h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-black/56">How does ongoing neural activity shape behavior, and how does activation of specific circuits—through neuromodulators and receptors—cause that activity to change?</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2">
            <article data-reveal="left" className="border-b border-black/18 py-11 lg:border-b-0 lg:border-r lg:pr-12">
              <p className="eyebrow text-[#9e321f]">01 · State to behavior</p>
              <h3 className="mt-6 max-w-[17ch] text-3xl leading-tight tracking-[-0.04em] md:text-4xl">How does brain-wide activity shape what an animal does?</h3>
              <p className="mt-6 max-w-xl text-base leading-8 text-black/58">I examine how neural dynamics and molecular signaling make particular responses more or less likely as an animal interacts with its environment.</p>
            </article>
            <article data-reveal="right" data-reveal-delay="100" className="py-11 lg:pl-12">
              <p className="eyebrow text-[#604591]">02 · Transition control</p>
              <h3 className="mt-6 max-w-[17ch] text-3xl leading-tight tracking-[-0.04em] md:text-4xl">What moves the brain from one state to another?</h3>
              <p className="mt-6 max-w-xl text-base leading-8 text-black/58">I ask how circuits, neuromodulators, and receptors integrate sensory evidence and experience, then initiate or reverse a transition between brain states.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="site-grid bg-[#0d100f]">
        <div className="page-shell section-pad grid gap-14 lg:grid-cols-12 lg:gap-12">
          <aside data-reveal="left" className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <p className="eyebrow text-white/34">Current research</p>
            <h2 className="mt-7 max-w-[10ch] text-[clamp(2.7rem,4.6vw,5rem)] leading-[0.98] tracking-[-0.055em]">Brain state transitions.</h2>
            <p className="mt-7 max-w-sm text-base leading-8 text-white/46">Three stories centered on state transitions: one triggered when an animal detects that its actions are futile, one with lasting consequences after a brief chemical perturbation, and one profound but reversible transition induced by general anesthetics.</p>
            <ResearchStoryRail />
          </aside>

          <div className="lg:col-span-7 lg:col-start-6">
            <article id="story-futility" data-story-step="futility" data-reveal="rise" className="story-panel border-t border-white/15 py-10 lg:min-h-[86vh] lg:py-14">
              <p className="eyebrow text-[#ff8062]">01 · Behavioral transition</p>
              <h3 className="mt-6 text-[clamp(2.5rem,4.2vw,4.8rem)] leading-[0.98] tracking-[-0.055em]">When action becomes futile.</h3>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/50">In a tail-free virtual-reality assay, swimming initially produces visual feedback. When that feedback is removed, the same actions become futile: fish first increase their effort, then transition to passivity. We are testing how the serotonergic dorsal raphe and its downstream circuits compute futility and modulate this transition.</p>
              <div className="mt-9">
                <MediaFrame number="01" label="Futility-induced passivity in a tail-free virtual-reality assay" src="/media/research/behavioral-transitions/hero.mp4" poster="/media/research/behavioral-transitions/hero-poster.jpg" type="video" alt="Head-fixed, tail-free larval zebrafish during a virtual-reality behavioral assay" tone="orange" fit="cover" aspect="four-three" captionPosition="below" copyright="© Marc Duque Ramírez" className="!min-h-0" />
              </div>
              <Link href="/research/behavioral-transitions" className="signal-link mt-8 text-white/62 hover:text-white">The assay and current directions</Link>
            </article>

            <article id="story-ketamine" data-story-step="ketamine" data-reveal="rise" className="story-panel border-t border-white/15 py-10 lg:min-h-[86vh] lg:py-14">
              <p className="eyebrow text-[#b7a8e6]">02 · Chemical perturbation</p>
              <h3 className="mt-6 text-[clamp(2.5rem,4.2vw,4.8rem)] leading-[0.98] tracking-[-0.055em]">Compounds that change state.</h3>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/50">In humans, ketamine and psychedelics can produce profound and persistent changes in brain state after a single dose. We study how these compounds act through specific receptors, cell types, circuits, and neuromodulators to alter brain dynamics and behavior. Our work showed that ketamine persistently suppresses futility-induced passivity through plasticity in a norepinephrine–astroglial circuit; we are now adapting the assay to screen for new antidepressant compounds.</p>
              <div className="mt-9">
                <MediaFrame number="02" label="Ketamine-evoked astroglial calcium activity" src="/media/research/pharmacology-plasticity/fish-ketamine-waves.mp4" poster="/media/research/pharmacology-plasticity/fish-ketamine-waves-poster.jpg" type="video" alt="Ketamine-evoked astroglial calcium waves in larval zebrafish" tone="violet" fit="contain" aspect="four-three" captionPosition="below" copyright="© Duque et al. 2025" className="!min-h-0" />
              </div>
              <Link href="/research/pharmacology-plasticity" className="signal-link mt-8 text-white/62 hover:text-white">Ketamine, astroglia, and psychedelics</Link>
            </article>

            <article id="story-anesthesia" data-story-step="anesthesia" data-reveal="rise" className="story-panel border-y border-white/15 py-10 lg:min-h-[82vh] lg:py-14">
              <p className="eyebrow text-[#8fc8d5]">03 · General anesthesia</p>
              <h3 className="mt-6 text-[clamp(2.5rem,4.2vw,4.8rem)] leading-[0.98] tracking-[-0.055em]">A reversible whole-brain transition.</h3>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/50">General anesthetics produce a clinically important, profound, and reversible transition in brain state, yet its circuit-level mechanisms remain poorly understood. We use larval zebrafish to identify the neural dynamics and circuits that underlie this transition.</p>
              <div className="mt-9">
                <MediaFrame number="03" label="Whole-brain activity during propofol anesthesia" src="/media/research/anesthesia/hero.mp4" poster="/media/research/anesthesia/hero-poster.jpg" type="video" alt="Whole-brain activity in a larval zebrafish during propofol anesthesia" tone="cyan" fit="contain" aspect="video" captionPosition="below" copyright="© Marc Duque Ramírez" className="!min-h-0" />
              </div>
              <Link href="/research/anesthesia" className="signal-link mt-8 text-white/62 hover:text-white">General anesthesia across the brain</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="paper-grid bg-[#eeeae0] text-[#080a0a]">
        <div className="page-shell section-pad">
          <div data-reveal="rise" className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-3"><p className="eyebrow text-black/42">Explore in detail</p></div>
            <div className="md:col-span-9"><h2 className="section-title">Research directions.</h2></div>
          </div>
          <div className="mt-10">
            {researchLinks.map(([number, title, description, href], index) => (
              <Link data-reveal="rise" data-reveal-delay={String(index * 55)} key={href} href={href} className="motion-row group grid gap-4 border-t border-black/18 py-7 md:grid-cols-[4rem_0.45fr_0.55fr_auto] md:items-center">
                <span className="font-mono text-[0.62rem] text-black/34">{number}</span>
                <span className="text-2xl tracking-[-0.035em]">{title}</span>
                <span className="max-w-2xl text-sm leading-6 text-black/52">{description}</span>
                <span className="text-2xl text-black/28 transition group-hover:translate-x-1 group-hover:text-black">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#8fc8d5] text-[#071011]">
        <div className="page-shell grid gap-8 py-14 md:grid-cols-3 md:py-18">
          {[
            ["Publications", "Selected papers and journal links", "/publications"],
            ["Press", "Reporting and public communication", "/press"],
            ["Research journey", "Training across five research environments", "/journey"],
          ].map(([title, text, href], index) => (
            <Link data-reveal="rise" data-reveal-delay={String(index * 75)} key={href} href={href} className="motion-row group border-t border-black/18 pt-5">
              <div className="flex items-start justify-between gap-4"><div><h2 className="text-xl tracking-[-0.03em]">{title}</h2><p className="mt-3 text-sm leading-6 text-black/52">{text}</p></div><span className="text-xl text-black/30 transition group-hover:translate-x-1 group-hover:text-black">→</span></div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
