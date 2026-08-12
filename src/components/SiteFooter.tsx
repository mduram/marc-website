import Link from "next/link";

const links = [
  ["Research", "/research"],
  ["Journey", "/journey"],
  ["Publications", "/publications"],
  ["Press", "/press"],
  ["About", "/about"],
  ["CV", "/cv"],
];

export default function SiteFooter() {
  return (
    <footer className="site-grid border-t border-white/15 bg-[#080a0a]">
      <div className="page-shell py-12 md:py-16">
        <div className="grid gap-14 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow text-[#ff6847]">Marc Duque Ramírez</p>
            <p className="mt-5 max-w-3xl text-2xl leading-[1.12] tracking-[-0.035em] text-white/82 md:text-3xl">
              Research on how brain-wide dynamics shape behavior—and what makes them change.
            </p>
          </div>
          <nav className="grid min-w-48 border-t border-white/15" aria-label="Footer navigation">
            {links.map(([label, href], index) => (
              <Link key={href} href={href} className="group flex items-center justify-between gap-8 border-b border-white/15 py-3 font-mono text-[0.68rem] uppercase tracking-[0.13em] text-white/45 transition hover:text-white">
                <span><span className="mr-3 text-white/20">0{index + 1}</span>{label}</span>
                <span className="text-[#ff6847] transition group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Marc Duque Ramírez</span>
          <span>Engert Lab · Harvard University</span>
        </div>
      </div>
    </footer>
  );
}
