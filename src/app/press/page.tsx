import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Press",
  description: "Press coverage of Marc Duque Ramírez's research in neuroscience and sonogenetics.",
};

const coverage = [
  {
    date: "January 30, 2026",
    outlet: "Quanta Magazine",
    title: "Once Thought To Support Neurons, Astrocytes Turn Out To Be in Charge",
    description: "A field-level feature on astrocytes as active regulators of neural activity, including the 2025 Science studies across fish, flies, and mice.",
    href: "https://www.quantamagazine.org/once-thought-to-support-neurons-astrocytes-turn-out-to-be-in-charge-20260130/",
    image: "/media/research/pharmacology-plasticity/mouse-astrocytes-poster.jpg",
    alt: "Calcium activity in mouse cortical astrocytes",
    topic: "Astroglia · Neuromodulation",
  },
  {
    date: "January 27, 2025",
    outlet: "Harvard Gazette",
    title: "How exactly does ketamine work? New research offers insight.",
    description: "A conversation with Marc Duque Ramírez and Alex Chen about ketamine, astroglia, and persistent changes in behavioral perseverance.",
    href: "https://news.harvard.edu/gazette/story/2025/01/how-exactly-does-ketamine-work-new-research-offers-insight/",
    image: "/media/research/pharmacology-plasticity/graphical-abstract.jpg",
    alt: "Graphical abstract of ketamine action in an astroglial circuit",
    topic: "Ketamine · Plasticity",
  },
  {
    date: "January 7, 2025",
    outlet: "NPR",
    title: "Tiny fish on ketamine may show how drug eases depression",
    description: "Coverage of the Neuron study on ketamine, astroglia, and persistent changes in futility-induced passivity.",
    href: "https://www.npr.org/sections/shots-health-news/2025/01/07/nx-s1-5250210/tiny-fish-on-ketamine-may-show-how-drug-eases-depression",
    image: "/media/research/behavioral-transitions/hero-poster.jpg",
    alt: "Head-restrained, tail-free larval zebrafish during a virtual-reality behavioral assay",
    topic: "Ketamine · Behavior",
  },
  {
    date: "March 16, 2022",
    outlet: "EL PAÍS",
    title: "How scientists are using ultrasound to control neuron functions",
    description: "An interview with Marc about the first-author Nature Communications study and the possibilities and limits of sonogenetics.",
    href: "https://english.elpais.com/science-tech/2022-03-16/how-scientists-are-using-ultrasound-to-control-the-cells-of-mammals.html",
    image: "/media/journey/salk/main-poster.jpg",
    alt: "Neuronal calcium activity during ultrasound stimulation",
    topic: "Sonogenetics · Ultrasound",
  },
];

export default function PressPage() {
  const [featured, ...archive] = coverage;

  return (
    <main className="min-h-screen bg-[#080a0a] text-[#f4f1e8]">
      <Navbar />

      <header className="site-grid border-b border-white/15 pt-[4.75rem]">
        <div className="page-shell grid gap-10 py-12 md:grid-cols-12 md:items-start md:py-16">
          <div className="md:col-span-3 md:self-start"><p className="eyebrow border-t border-white/15 pt-4 text-[#ff8062]">Press & public communication · 2022—2026</p></div>
          <div className="md:col-span-9">
            <h1 className="page-title max-w-[11ch]">Research beyond the paper.</h1>
            <p className="body-copy mt-10 max-w-3xl border-t border-white/15 pt-8 text-white/50">Selected reporting on astroglia, ketamine, and sonogenetics.</p>
          </div>
        </div>
      </header>

      <section className="paper-grid bg-[#eeeae0] text-[#080a0a]">
        <div className="page-shell section-pad">
          <div className="grid gap-12 md:grid-cols-12"><div className="md:col-span-3"><p className="eyebrow text-black/42">Featured · 2026</p></div><div className="md:col-span-9"><h2 className="section-title max-w-[13ch]">Astrocytes move to the center of the story.</h2></div></div>
          <a href={featured.href} target="_blank" rel="noopener noreferrer" className="group mt-16 grid border border-black/18 lg:grid-cols-12">
            <div className="relative min-h-[28rem] overflow-hidden bg-black lg:col-span-7">
              <Image src={featured.image} alt={featured.alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            </div>
            <div className="flex min-h-[28rem] flex-col justify-between p-7 lg:col-span-5 lg:p-10">
              <div className="flex items-center justify-between font-mono text-[0.6rem] uppercase tracking-[0.13em] text-black/42"><span>{featured.outlet}</span><span>{featured.date}</span></div>
              <div><p className="eyebrow text-[#c54226]">{featured.topic}</p><h3 className="mt-5 text-4xl leading-[1.01] tracking-[-0.05em] lg:text-5xl">{featured.title}</h3><p className="mt-6 text-base leading-7 text-black/55">{featured.description}</p><span className="signal-link mt-8 text-black/60 group-hover:text-black">Read feature</span></div>
            </div>
          </a>
        </div>
      </section>

      <section className="bg-[#0d100f]">
        <div className="page-shell section-pad">
          <div className="grid gap-12 md:grid-cols-12"><div className="md:col-span-3"><p className="eyebrow text-white/35">Coverage archive</p></div><div className="md:col-span-9"><h2 className="section-title">Selected stories</h2></div></div>
          <div className="mt-14 border-t border-white/15">
            {archive.map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="group grid gap-6 border-b border-white/15 py-8 transition hover:bg-white/[0.025] md:grid-cols-12 md:items-center md:px-4">
                <div className="relative min-h-44 overflow-hidden bg-black md:col-span-3">
                  <Image src={item.image} alt={item.alt} fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="md:col-span-2"><p className="eyebrow text-white/58">{item.outlet}</p><p className="mt-3 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-white/26">{item.date}</p></div>
                <div className="md:col-span-4"><p className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-[#ff8062]">{item.topic}</p><h3 className="mt-4 text-2xl leading-tight tracking-[-0.035em] text-white/82 md:text-3xl">{item.title}</h3></div>
                <div className="md:col-span-3"><p className="text-sm leading-7 text-white/42">{item.description}</p><span className="mt-5 inline-flex text-xl text-[#ff6847] transition group-hover:translate-x-1">↗</span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#8fc8d5] text-[#071011]">
        <Link href="/publications" className="page-shell group grid gap-8 py-20 md:grid-cols-12 md:items-end md:py-28">
          <div className="md:col-span-3"><p className="eyebrow text-black/42">Source material</p></div>
          <div className="md:col-span-8"><h2 className="section-title">Read the published work</h2><p className="mt-6 max-w-2xl text-base leading-7 text-black/52">The publications page links each paper to its journal record.</p></div>
          <span className="text-4xl text-black/25 transition group-hover:translate-x-2 group-hover:text-black md:text-right">→</span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
