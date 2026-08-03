"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Research", href: "/research" },
  { label: "Journey", href: "/journey" },
  { label: "Publications", href: "/publications" },
  { label: "Press", href: "/press" },
  { label: "About", href: "/about" },
];

const researchItems = [
  { label: "Futility-induced passivity", href: "/research/behavioral-transitions" },
  { label: "Ketamine & psychedelics", href: "/research/pharmacology-plasticity" },
  { label: "General anesthesia", href: "/research/anesthesia" },
  { label: "Model organisms & imaging", href: "/research/model-systems" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/12 bg-[#080a0a]/88 backdrop-blur-xl">
        <div className="page-shell flex h-[4.75rem] items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center border border-white/25 font-mono text-[10px] tracking-[-0.05em] text-white transition group-hover:border-[#ff6847] group-hover:text-[#ff6847]">
              MDR
            </span>
            <span className="leading-none">
              <span className="block text-[0.78rem] font-medium tracking-[0.02em] text-white">
                Marc Duque Ramírez
              </span>
              <span className="mt-1 hidden font-mono text-[0.58rem] uppercase tracking-[0.18em] text-white/35 sm:block">
                Neuroscience · Harvard
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            {navItems.map((item, index) => (
              <div key={item.href} className="group relative flex h-[4.75rem] items-center">
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.13em] transition ${
                    isActive(item.href) ? "text-white" : "text-white/45 hover:text-white"
                  }`}
                >
                  <span className={`h-1 w-1 rounded-full ${isActive(item.href) ? "bg-[#ff6847]" : "bg-white/20 group-hover:bg-white"}`} />
                  <span className="text-[0.55rem] text-white/20">0{index + 1}</span>
                  {item.label}
                  {item.href === "/research" && <span className="text-[0.55rem] text-white/30">⌄</span>}
                </Link>
                {item.href === "/research" && (
                  <div className="invisible absolute left-0 top-full w-72 translate-y-2 border border-white/14 bg-[#0d100f] p-2 opacity-0 shadow-2xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {researchItems.map((researchItem) => (
                      <Link key={researchItem.href} href={researchItem.href} className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 text-sm text-white/58 transition last:border-b-0 hover:bg-white/[0.04] hover:text-white">
                        <span>{researchItem.label}</span>
                        <span className="text-[#ff6847]">→</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="relative z-50 grid h-10 w-10 place-items-center border border-white/15 md:hidden"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span className="relative h-4 w-5">
              <span className={`absolute left-0 top-1 h-px w-5 bg-white transition ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`absolute bottom-1 left-0 h-px w-5 bg-white transition ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 overflow-y-auto bg-[#080a0a] transition duration-300 md:hidden ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
        <div className="site-grid flex min-h-screen flex-col px-5 pb-8 pt-28">
          <nav className="border-t border-white/15" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <div key={item.href}>
                <Link href={item.href} onClick={() => setMenuOpen(false)} className="grid grid-cols-[3rem_1fr_auto] items-center border-b border-white/15 py-5">
                  <span className="font-mono text-[0.62rem] text-white/25">0{index + 1}</span>
                  <span className={`text-3xl tracking-[-0.045em] ${isActive(item.href) ? "text-white" : "text-white/58"}`}>
                    {item.label}
                  </span>
                  <span className="text-[#ff6847]">↗</span>
                </Link>
                {item.href === "/research" && (
                  <div className="grid grid-cols-2 gap-x-5 border-b border-white/15 px-12 py-4">
                    {researchItems.map((researchItem) => (
                      <Link key={researchItem.href} href={researchItem.href} onClick={() => setMenuOpen(false)} className="border-t border-white/10 py-3 text-sm leading-5 text-white/46">
                        {researchItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-auto flex items-end justify-between border-t border-white/15 pt-5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/30">
            <span>PhD candidate</span>
            <span>Cambridge, MA</span>
          </div>
        </div>
      </div>
    </>
  );
}
