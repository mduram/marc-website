import type { Metadata } from "next";
import Link from "next/link";
import MediaFrame from "@/components/MediaFrame";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Larval Zebrafish, Transparent Adult Fish & Light-Sheet Imaging",
  description: "Why larval zebrafish and light-sheet imaging connect molecular mechanisms, brain-wide activity, and behavior—and how paedomorphic adult fish may extend that access.",
};

export default function ModelSystemsPage() {
  return (
    <main className="min-h-screen bg-[#080a0a] text-[#f4f1e8]">
      <Navbar />

      <header className="site-grid border-b border-white/15 pt-[4.75rem]">
        <div className="page-shell grid gap-10 py-12 lg:grid-cols-12 lg:items-start lg:py-16">
          <div className="lg:col-span-1 lg:self-start"><p className="font-mono text-xs text-[#8fc8d5]">MS</p></div>
          <div className="lg:col-span-6"><p className="eyebrow text-white/38">Model organisms · Imaging</p><h1 className="page-title mt-7 max-w-[11ch]">Why larval zebrafish?</h1><p className="body-copy mt-9 max-w-2xl text-white/48">They let me image activity across much of a vertebrate brain while controlling sensory feedback and measuring behavior.</p></div>
          <div className="lg:col-span-5"><MediaFrame number="MS" label="Larval zebrafish in the light-sheet microscope, viewed from the side" src="/media/research/model-systems/hero.mp4" poster="/media/research/model-systems/hero-poster.jpg" type="video" alt="Side view of a larval zebrafish in a light-sheet imaging setup" playbackRate={0.5} tone="cyan" fit="contain" copyright="© Marc Duque Ramírez" className="min-h-[30rem]" /></div>
        </div>
      </header>

      <section className="paper-grid bg-[#eeeae0] text-[#080a0a]">
        <div className="page-shell section-pad grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3"><p className="eyebrow text-black/42">Why I use them</p></div>
          <div className="md:col-span-9">
            <h2 className="section-title max-w-[14ch]">Keep mechanism, activity, and behavior in the same experiment.</h2>
            <div className="mt-10 max-w-4xl space-y-5 border-t border-black/18 pt-8 text-base leading-8 text-black/58">
              <p>Larval zebrafish are small and optically accessible, but they still have a vertebrate nervous system and a broad range of measurable behaviors.</p>
              <p>In one preparation I can alter a receptor or cell population, observe the resulting activity across the brain, and measure what the animal does next.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d100f]">
        <div className="page-shell section-pad">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="eyebrow text-white/35">Light-sheet imaging</p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] leading-[1.02] tracking-[-0.05em]">Follow distributed activity at cellular resolution.</h2>
              <div className="mt-7 grid gap-5 text-base leading-8 text-white/48 md:grid-cols-2">
                <p>Thin optical sections are collected rapidly through the transparent larval brain. I use the resulting volumes to compare activity across cells and regions during behavior and molecular perturbation.</p>
                <p>A custom segmentation algorithm identifies individual cells in these datasets. Each colored segment in the videos below represents one cell.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/15 pt-8">
            <p className="eyebrow text-white/35">Image volume · Custom cell segmentation</p>
            <div className="mt-7 grid items-stretch gap-5 md:grid-cols-3">
              <MediaFrame number="LS.1" label="Light-sheet z-stack through cellular planes" src="/media/research/model-systems/z-stack.mp4" poster="/media/research/model-systems/z-stack-poster.jpg" type="video" alt="Light-sheet z-stack through a larval zebrafish brain" tone="cyan" fit="contain" captionPosition="below" copyright="© Marc Duque Ramírez" className="h-full min-h-[34rem]" />
              <MediaFrame number="LS.2" label="Individual cells identified by the custom segmentation algorithm" src="/media/research/model-systems/neuron-segmentation-labels.mp4" poster="/media/research/model-systems/neuron-segmentation-labels-poster.jpg" type="video" alt="Rotating three-dimensional view in which each colored segment represents one cell identified in a larval zebrafish light-sheet dataset" tone="cyan" fit="contain" captionPosition="below" copyright="© Marc Duque Ramírez" className="h-full min-h-[34rem]" />
              <MediaFrame number="LS.3" label="Cell segmentation overlaid on the light-sheet volume" src="/media/research/model-systems/neuron-segmentation-overlay.mp4" poster="/media/research/model-systems/neuron-segmentation-overlay-poster.jpg" type="video" alt="Rotating three-dimensional view of individual cell segments overlaid on a larval zebrafish light-sheet volume" tone="cyan" fit="contain" captionPosition="below" copyright="© Marc Duque Ramírez" className="h-full min-h-[34rem]" />
            </div>
          </div>
        </div>
      </section>

      <section className="paper-grid bg-[#8fc8d5] text-[#071011]">
        <div className="page-shell section-pad">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-black/42">Future extension · Adult fish</p>
              <h2 className="mt-6 text-[clamp(2.5rem,4vw,4.4rem)] leading-[1.02] tracking-[-0.05em]">Carry optical access into adulthood.</h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-black/56 lg:col-span-7">
              <p>Small, paedomorphic fish may make mature behavior accessible without giving up the optical advantages of larvae. <em>Danionella cerebrum</em> is already an emerging model for imaging the adult brain; <em>Paedocypris progenetica</em> is a more exploratory possibility whose experimental toolkit would need to be developed.</p>
              <p className="text-sm leading-7 text-black/45">This is a future direction rather than a current experimental program.</p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div>
              <MediaFrame number="A1" label="Adult Danionella cerebrum" src="/media/research/model-systems/danionella-cerebrum.jpg" type="image" alt="Live adult female Danionella cerebrum showing its transparent body and visible brain" tone="cyan" fit="contain" copyright="© Ralf Britz" className="aspect-[4/3] !min-h-0 border-black/15" />
              <p className="mt-4 text-xs leading-6 text-black/42">Image: Ralf Britz / Senckenberg Natural History Collections Dresden, via the <a href="https://www.nmbe.ch/en/paragraph_gallery/6418" target="_blank" rel="noreferrer" className="underline decoration-black/25 underline-offset-4 hover:text-black">Natural History Museum of Bern</a>. Scientific context: <a href="https://www.nature.com/articles/s41598-021-97600-0" target="_blank" rel="noreferrer" className="underline decoration-black/25 underline-offset-4 hover:text-black">Britz, Conway & Rüber (2021)</a>.</p>
            </div>
            <div>
              <MediaFrame number="A2" label="Adult Paedocypris progenetica" src="/media/research/model-systems/paedocypris-progenetica-uio.jpg" type="image" alt="Two transparent adult Paedocypris progenetica resting among aquatic plants" tone="cyan" fit="cover" copyright="Source: Titan · University of Oslo" className="aspect-[4/3] !min-h-0 border-black/15" />
              <p className="mt-4 text-xs leading-6 text-black/42">Image: <a href="https://www.titan.uio.no/english/2018/bilder/parring2.jpg" target="_blank" rel="noreferrer" className="underline decoration-black/25 underline-offset-4 hover:text-black">Titan, University of Oslo</a>. Scientific context: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1560243/" target="_blank" rel="noreferrer" className="underline decoration-black/25 underline-offset-4 hover:text-black">Kottelat et al. (2006)</a>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/15"><Link href="/research" className="page-shell group grid gap-8 py-20 md:grid-cols-12 md:items-end md:py-28"><div className="md:col-span-3"><p className="eyebrow text-white/30">Return</p></div><h2 className="section-title md:col-span-8">Research overview</h2><span className="text-4xl text-white/25 transition group-hover:translate-x-2 group-hover:text-[#ff6847] md:text-right">→</span></Link></section>

      <SiteFooter />
    </main>
  );
}
