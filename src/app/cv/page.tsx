import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const cvPath = "/cv/Marc_Duque_Ramirez_CV.pdf";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: "Curriculum vitae for Marc Duque Ramírez, neuroscientist and PhD candidate at Harvard University.",
};

export default function CVPage() {
  return (
    <main className="min-h-screen bg-[#080a0a] text-[#f4f1e8]">
      <Navbar />

      <header className="site-grid border-b border-white/15 pt-[4.75rem]">
        <div className="page-shell grid gap-10 py-12 md:grid-cols-12 md:items-end md:py-16">
          <div className="md:col-span-3 md:self-start">
            <p className="eyebrow border-t border-white/15 pt-4 text-[#ff8062]">Curriculum vitae · PDF</p>
          </div>
          <div className="md:col-span-6">
            <h1 className="page-title max-w-[10ch]">Curriculum vitae.</h1>
            <p className="body-copy mt-9 max-w-2xl border-t border-white/15 pt-7 text-white/50">
              Research experience, publications, teaching, awards, and technical training.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-3 md:justify-end">
            <a
              href={cvPath}
              download="Marc_Duque_Ramirez_CV.pdf"
              className="inline-flex items-center gap-3 bg-[#ff8062] px-5 py-3 font-mono text-[0.66rem] uppercase tracking-[0.13em] text-[#080a0a] transition hover:bg-[#f4f1e8]"
            >
              Download PDF <span aria-hidden="true">↓</span>
            </a>
            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/20 px-5 py-3 font-mono text-[0.66rem] uppercase tracking-[0.13em] text-white/62 transition hover:border-white/45 hover:text-white"
            >
              Open PDF <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      <section className="paper-grid bg-[#eeeae0] text-[#080a0a]">
        <div className="page-shell py-10 md:py-16">
          <div className="border border-black/18 bg-white p-2 shadow-[0_30px_90px_rgba(0,0,0,0.18)] md:p-4">
            <object
              data={`${cvPath}#view=FitH&toolbar=1&navpanes=0`}
              type="application/pdf"
              aria-label="Marc Duque Ramírez curriculum vitae"
              className="h-[78vh] min-h-[44rem] w-full bg-white"
            >
              <div className="grid min-h-[28rem] place-items-center p-8 text-center">
                <div>
                  <p className="text-xl tracking-[-0.03em]">The PDF preview is not available in this browser.</p>
                  <a href={cvPath} download="Marc_Duque_Ramirez_CV.pdf" className="signal-link mt-6 inline-flex text-black/65 hover:text-black">
                    Download the CV instead
                  </a>
                </div>
              </div>
            </object>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
