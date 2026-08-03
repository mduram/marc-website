import type { Metadata } from "next";
import Link from "next/link";
import MediaFrame from "@/components/MediaFrame";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About",
  description: "About Marc Duque Ramírez, a neuroscientist and PhD candidate at Harvard University.",
};

const teaching = [
  ["2021—2025", "Introduction to Neurobiology · MCB 80"],
  ["2022—2024", "Great Experiments in Biology · GenEd 1037"],
  ["2023—2024", "Artificial and Natural Intelligence · GenEd 1125"],
  ["2024—2025", "Molecular Basis of Behavior · Neuro 125"],
];

const honors = [
  ["2025", "Rising Stars in Neuroscience · University of Utah"],
  ["2023", "Boehringer Ingelheim Fonds PhD Fellowship"],
  ["2018", "HHMI Undergraduate Research Scholar"],
  ["2015—2016", "EMBL Undergraduate Fellowship"],
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080a0a] text-[#f4f1e8]">
      <Navbar />

      <header className="site-grid border-b border-white/15 pt-[4.75rem]">
        <div className="page-shell grid gap-10 py-12 md:grid-cols-12 md:items-start md:py-16">
          <div className="md:col-span-3 md:self-start"><p className="eyebrow border-t border-white/15 pt-4 text-[#ff8062]">About Marc</p></div>
          <div className="md:col-span-9">
            <h1 className="page-title max-w-[12ch]">Neuroscience across molecules, circuits, and behavior.</h1>
            <p className="body-copy mt-10 max-w-3xl border-t border-white/15 pt-8 text-white/52">I am completing my PhD in the Engert Lab at Harvard, where I study how brain-wide dynamics and neuromodulatory circuits shape changes in behavior.</p>
          </div>
        </div>
      </header>

      <section className="paper-grid bg-[#eeeae0] text-[#080a0a]">
        <div className="page-shell section-pad grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <MediaFrame number="A" label="Marc Duque Ramírez" src="/media/about/portrait-full.jpg" type="image" alt="Marc Duque Ramírez standing beside a sculpture at Harvard" tone="orange" className="aspect-[4/5] min-h-[34rem] border-black/15" />
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <p className="eyebrow text-black/42">Short bio</p>
            <div className="mt-8 space-y-7 text-[1.06rem] leading-8 text-black/60">
              <p>My current work asks how patterns of brain-wide activity shape behavior and what causes those patterns to change.</p>
              <p>I combine a futility-induced virtual-reality assay with whole-brain imaging and circuit perturbations. I also use drugs to alter neurotransmitter pathways and follow the consequences from cellular signaling to behavior.</p>
              <p>Before my PhD, I worked in chemical biology, developmental imaging, sonogenetics, and bioelectricity. That training shaped the cross-scale approach I use now.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              <a href="https://scholar.google.com/citations?user=qmUQ2nYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="signal-link text-black/65 hover:text-black">Google Scholar</a>
              <a href="mailto:mduqueramirez@g.harvard.edu" className="signal-link text-black/65 hover:text-black">Email</a>
              <Link href="/research" className="signal-link text-black/65 hover:text-black">Research</Link>
            </div>
            <p className="mt-10 border-t border-black/18 pt-6 text-sm leading-7 text-black/48">PhD candidate · Engert Lab, Harvard University · From Barcelona · Based in Cambridge, Massachusetts</p>
          </div>
        </div>
      </section>

      <section className="paper-grid bg-[#eeeae0] text-[#080a0a]">
        <div className="page-shell section-pad">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3"><p className="eyebrow text-black/42">Outside the lab</p></div>
            <div className="md:col-span-9"><h2 className="section-title max-w-[12ch]">Outside the lab.</h2><p className="body-copy mt-8 max-w-3xl text-black/55">I enjoy writing, playing music, football, traveling, surfing, and spending time by the sea.</p></div>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-12">
            <MediaFrame number="B" label="Heading into the water" src="/media/about/surf.jpg" type="image" alt="Marc walking into the ocean with a surfboard" tone="cyan" className="min-h-[30rem] md:col-span-5" />
            <MediaFrame number="C" label="Harvard club football" src="/media/about/football.jpg" type="image" alt="Marc with the Harvard club soccer team" tone="orange" className="min-h-[30rem] md:col-span-4" />
            <MediaFrame number="D" label="Playing music" src="/media/about/bass.jpg" type="image" alt="Marc playing music" tone="violet" className="min-h-[30rem] md:col-span-3" />
          </div>
        </div>
      </section>

      <section className="bg-[#8fc8d5] text-[#071011]">
        <div className="page-shell section-pad grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3"><p className="eyebrow text-black/42">Teaching & recognition</p></div>
          <div className="md:col-span-9">
            <h2 className="section-title max-w-[13ch]">Teaching and recognition.</h2>
            <p className="body-copy mt-8 max-w-3xl text-black/55">At Harvard, I have taught across foundational neurobiology, experimental biology, intelligence, and the molecular basis of behavior.</p>
            <div className="mt-14 grid gap-10 border-t border-black/18 pt-8 lg:grid-cols-2">
              <div>
                <p className="eyebrow text-black/42">Harvard teaching</p>
                <ul className="mt-6 space-y-4">{teaching.map(([year, course]) => <li key={course} className="text-sm leading-6 text-black/62"><span className="mr-4 font-mono text-[0.6rem] text-black/38">{year}</span>{course}</li>)}</ul>
              </div>
              <div>
                <p className="eyebrow text-black/42">Selected recognition</p>
                <ul className="mt-6 space-y-4">{honors.map(([year, honor]) => <li key={honor} className="text-sm leading-6 text-black/62"><span className="mr-4 font-mono text-[0.6rem] text-black/38">{year}</span>{honor}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/15 bg-[#080a0a]">
        <Link href="/journey" className="page-shell group grid gap-8 py-20 md:grid-cols-12 md:items-end md:py-28">
          <div className="md:col-span-3"><p className="eyebrow text-white/30">Next</p></div>
          <h2 className="section-title md:col-span-8">Research journey</h2>
          <span className="text-4xl text-white/25 transition group-hover:translate-x-2 group-hover:text-[#ff6847] md:text-right">→</span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
