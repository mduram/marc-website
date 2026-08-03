import type { Metadata } from "next";
import ResearchProjectPage from "@/components/ResearchProjectPage";

export const metadata: Metadata = {
  title: "General Anesthesia",
  description: "Whole-brain imaging, behavior, and physiology during anesthetic induction and recovery.",
};

export default function AnesthesiaPage() {
  return (
    <ResearchProjectPage
      number="03"
      eyebrow="Pharmacology · Whole-brain dynamics · Recovery"
      title="General anesthesia across the whole brain"
      question="Whole-brain activity through anesthetic induction and recovery."
      summary="We study the mechanisms by which state-of-the-art anesthetics and novel compounds induce anesthesia."
      heroWide
      figure={{
        label: "Whole-brain activity during propofol anesthesia, aligned to the loss of swimming",
        path: "/media/research/anesthesia/hero.mp4",
        poster: "/media/research/anesthesia/hero-poster.jpg",
        type: "video",
        alt: "Whole-brain activity in a larval zebrafish during propofol anesthesia",
        tone: "cyan",
        fit: "contain",
        captionPosition: "below",
        copyright: "© Marc Duque Ramírez",
      }}
      mediaGallery={[
        {
          label: "Population-level analysis links neural subgroups, brain-wide trajectories, and the loss and recovery of swimming",
          src: "/media/research/anesthesia/population-analysis.mp4",
          poster: "/media/research/anesthesia/population-analysis-poster.jpg",
          type: "video",
          alt: "Analysis view comparing neural populations and behavior during anesthesia",
          tone: "cyan",
          fit: "contain",
          copyright: "© Marc Duque Ramírez",
        },
      ]}
      overviewTitle="A controlled, reversible transition measured across the brain."
      overview={[
        <>We are building region-level and single-cell calcium-dynamics maps across anesthetics to identify the circuit-level mechanisms that govern induction, maintenance, and emergence. By comparing compounds with established targets—including GABA<sub>A</sub> receptor modulators and NMDA receptor antagonists—with novel anesthetics whose molecular targets remain unknown, we aim to distinguish shared brain-wide dynamics from mechanism-specific effects.</>,
        "To verify loss of nociceptive responsiveness, we measure whole-brain responses following TRPA1 activation. The same setup simultaneously tracks heart rate and other physiological parameters, allowing us to assess anesthetic side effects and safety.",
      ]}
      directions={[
        { number: "D1", title: "Comparative anesthesia", text: "Current work extends the same measurements across compounds and doses to identify shared and drug-specific brain-wide changes." },
      ]}
      methods={["Whole-brain light-sheet imaging", "Single-cell analysis", "Pharmacology", "Behavior", "Physiology", "Controlled drug delivery"]}
      next={{ label: "Methods & model system", href: "/research/model-systems" }}
    />
  );
}
