import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Publications",
  description: "Selected publications by Marc Duque Ramírez.",
};

const publications = [
  {
    year: "2025",
    journal: "Science",
    title: "Norepinephrine changes behavioral state through astroglial purinergic signaling",
    authors: "Alex B. Chen, Marc Duque, Altyn Rymbek, et al.",
    description: "A mechanistic account of how norepinephrine recruits astroglial signaling to rapidly reconfigure circuit dynamics and behavioral state.",
    href: "https://www.science.org/doi/10.1126/science.adq5233",
    tone: "bg-[#ff6847]",
  },
  {
    year: "2025",
    journal: "Neuron",
    title: "Ketamine induces plasticity in a norepinephrine-astroglial circuit to promote behavioral perseverance",
    authors: "Marc Duque, Alex B. Chen, Eric Hsu, et al.",
    description: "A circuit-level study of how a brief ketamine exposure produces persistent plasticity and changes later behavior.",
    href: "https://www.cell.com/neuron/fulltext/S0896-6273(24)00836-5",
    tone: "bg-[#b7a8e6]",
  },
  {
    year: "2023",
    journal: "Nature Physics",
    title: "Observation of topological action potentials in engineered tissues",
    authors: "Hillel Ori, Marc Duque, Rebecca Frank Hayward, et al.",
    description: "Experimental observation of topologically protected traveling excitations in engineered biological tissues.",
    href: "https://www.nature.com/articles/s41567-022-01853-z",
    tone: "bg-[#8fc8d5]",
  },
  {
    year: "2023",
    journal: "Neuron",
    title: "Seeing stars: Astroglia modulate visual circuits during behavioral-state transitions",
    authors: "Alex B. Chen, Marc Duque, Florian Engert",
    description: "A perspective on how radial astrocytes shape visual circuit function as behavioral state changes.",
    href: "https://www.sciencedirect.com/science/article/pii/S0896627323008073",
    tone: "bg-[#d59b78]",
  },
  {
    year: "2023",
    journal: "Current Biology",
    title: "Mutational analysis of mechanosensitive ion channels in the carnivorous Venus flytrap plant",
    authors: "Carl Procko, Wendy M. Wong, Jinal Patel, et al.",
    description: "A genetic and functional study of mechanosensitive ion channels involved in touch detection in the Venus flytrap.",
    href: "https://www.cell.com/current-biology/fulltext/S0960-9822(23)00833-3",
    tone: "bg-[#94bc8b]",
  },
  {
    year: "2022",
    journal: "Nature Communications",
    title: "Sonogenetic control of mammalian cells using exogenous Transient Receptor Potential A1 channels",
    authors: "Marc Duque, Corinne A. Lee-Kubli, Yusuf Tufail, Uri Magaram, et al.",
    description: "A sonogenetic framework using exogenous TRPA1 channels to enable ultrasound-dependent control of mammalian cell activity.",
    href: "https://www.nature.com/articles/s41467-022-28205-y",
    tone: "bg-[#e0be6d]",
  },
  {
    year: "2022",
    journal: "Advanced Science",
    title: "Ultrasound mediated cellular deflection results in cellular depolarization",
    authors: "Aditya Vasan, Jeremy Orosco, Uri Magaram, Marc Duque, et al.",
    description: "A mechanistic study linking ultrasound-driven cellular deformation to membrane depolarization.",
    href: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.202101950",
    tone: "bg-[#7f9fd1]",
  },
  {
    year: "2022",
    journal: "Advanced NanoBiomed Research",
    title: "Microscale concert hall acoustics to produce uniform ultrasound stimulation for targeted sonogenetics in hsTRPA1-transfected cells",
    authors: "Aditya Vasan, Florian Allein, Marc Duque, et al.",
    description: "An acoustics strategy for producing more spatially uniform ultrasound fields in sonogenetic experiments.",
    href: "https://doi.org/10.1002/anbr.202100135",
    tone: "bg-[#c7a96c]",
  },
];

const scholarUrl = "https://scholar.google.com/citations?user=qmUQ2nYAAAAJ&hl=en";

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-[#080a0a] text-[#f4f1e8]">
      <Navbar />

      <header className="site-grid border-b border-white/15 pt-[4.75rem]">
        <div className="page-shell grid gap-10 py-12 md:grid-cols-12 md:items-start md:py-16">
          <div className="md:col-span-3 md:self-start"><p className="eyebrow border-t border-white/15 pt-4 text-[#ff8062]">Selected work · 2022—2025</p></div>
          <div className="md:col-span-9">
            <h1 className="page-title">Publications</h1>
            <div className="mt-12 border-t border-white/15 pt-8">
              <p className="body-copy max-w-3xl text-white/58">Research spanning systems neuroscience, astroglial biology, pharmacology, sonogenetics, bioelectricity, and mechanosensation.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-[#0d100f]">
        <div className="page-shell py-8 md:py-14">
          {publications.map((publication, index) => (
            <article key={publication.title} className="group relative border-b border-white/15 py-10 md:py-14">
              <div className={`absolute left-0 top-0 h-px w-0 transition-all duration-500 group-hover:w-full ${publication.tone}`} />
              <div className="grid gap-7 md:grid-cols-12">
                <div className="flex items-start gap-4 md:col-span-2">
                  <span className="font-mono text-[0.62rem] text-white/22">{String(index + 1).padStart(2, "0")}</span>
                  <div><p className="eyebrow text-white/52">{publication.journal}</p><p className="mt-2 font-mono text-[0.62rem] text-white/28">{publication.year}</p></div>
                </div>
                <div className="md:col-span-7">
                  <a href={publication.href} target="_blank" rel="noopener noreferrer" className="block">
                    <h2 className="text-3xl leading-[1.03] tracking-[-0.045em] transition group-hover:text-white/72 md:text-5xl">{publication.title}</h2>
                  </a>
                  <p className="mt-5 text-sm leading-6 text-white/35">{publication.authors}</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-sm leading-7 text-white/45">{publication.description}</p>
                  <a href={publication.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.13em] text-white/45 transition hover:text-white">Read paper <span className="text-[#ff6847]">↗</span></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="paper-grid bg-[#eeeae0] text-[#080a0a]">
        <div className="page-shell section-pad grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-3"><p className="eyebrow text-black/42">Complete record</p></div>
          <div className="md:col-span-7"><h2 className="section-title max-w-[12ch]">The full publication record lives on Google Scholar.</h2></div>
          <div className="md:col-span-2 md:text-right"><a href={scholarUrl} target="_blank" rel="noopener noreferrer" className="signal-link text-black/60 hover:text-black">View Scholar</a></div>
        </div>
      </section>

      <section className="border-t border-white/15">
        <Link href="/about" className="page-shell group grid gap-8 py-20 md:grid-cols-12 md:items-end md:py-28">
          <div className="md:col-span-3"><p className="eyebrow text-white/30">Next</p></div>
          <h2 className="section-title md:col-span-8">About Marc</h2>
          <span className="text-4xl text-white/25 transition group-hover:translate-x-2 group-hover:text-[#ff6847] md:text-right">→</span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
