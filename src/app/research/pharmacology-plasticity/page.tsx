import type { Metadata } from "next";
import ResearchProjectPage from "@/components/ResearchProjectPage";

export const metadata: Metadata = {
  title: "Ketamine, Astroglia & Persistent Behavioral Change",
  description: "Behavioral, cellular, and brain-wide measurements of the persistent effects of a single ketamine exposure.",
};

export default function PharmacologyPlasticityPage() {
  return (
    <ResearchProjectPage
      number="02"
      eyebrow="Ketamine · Astroglia · Persistent plasticity"
      title="Ketamine, astroglia, and persistent behavioral change"
      question="A single ketamine exposure can have long-lasting effects on neural circuit activity and behavior. How?"
      summary="We combine virtual-reality behavior, whole-brain calcium imaging, pharmacology, and causal perturbations to follow ketamine's effects during exposure and after the drug has been removed."
      heroFeature
      heroMediaClassName="!min-h-0"
      mediaGalleryLayout="featured-first"
      figure={{
        label: "Ketamine evokes large calcium waves in astroglia across two simultaneously imaged larval zebrafish",
        path: "/media/research/pharmacology-plasticity/hero.mp4",
        poster: "/media/research/pharmacology-plasticity/hero-poster.jpg",
        type: "video",
        alt: "Astroglial calcium activity in two larval zebrafish following ketamine exposure",
        tone: "violet",
        fit: "contain",
        aspect: "video",
        captionPosition: "below",
        copyright: "© Duque et al. 2025",
      }}
      mediaGallery={[
        {
          label: "Graphical summary of the norepinephrine–astroglial mechanism and its persistent behavioral effect",
          src: "/media/research/pharmacology-plasticity/graphical-abstract.jpg",
          type: "image",
          alt: "Graphical abstract for the ketamine and astroglial plasticity study",
          tone: "violet",
          fit: "contain",
          aspect: "square",
          captionPosition: "below",
          copyright: "© Duque et al. 2025",
          className: "h-full",
        },
        {
          label: "Astrocytes in mouse retrosplenial cortex respond to ketamine, extending the observation across vertebrate systems",
          src: "/media/research/pharmacology-plasticity/mouse-astrocytes.mp4",
          poster: "/media/research/pharmacology-plasticity/mouse-astrocytes-poster.jpg",
          type: "video",
          alt: "Calcium imaging of mouse retrosplenial cortex astrocytes responding to ketamine",
          tone: "violet",
          fit: "contain",
          captionPosition: "below",
          copyright: "© Duque et al. 2025",
          className: "h-full",
        },
      ]}
      overviewTitle="A single ketamine dose changes responses to futile actions."
      overview={[
        "We measured behavior before and after a brief ketamine exposure and found a marked decrease in the time spent passive during open loop—when actions are futile—even after washout.",
        <>Imaging and perturbation experiments identified a norepinephrine–astroglial component of this persistent effect and showed that ketamine also stimulates astrocytic calcium activity in mammals. <a className="underline decoration-black/25 underline-offset-4 transition hover:text-black" href="https://doi.org/10.1016/j.neuron.2024.11.011" target="_blank" rel="noreferrer">Read the paper for the full mechanistic story.</a></>,
      ]}
      sources={[
        { label: "Duque et al., Neuron (2025)", href: "https://doi.org/10.1016/j.neuron.2024.11.011" },
      ]}
      directions={[
        { number: "D1", title: "From ketamine to psychedelics", text: "We are also studying how psychedelics, acting through different molecular targets, produce persistent changes in brain and behavioral states, using the same combination of longitudinal behavior and whole-brain imaging." },
        {
          number: "D2",
          title: "Antidepressant screening",
          text: <>We are adapting the futility-induced passivity assay into a higher-throughput screen to identify novel compounds with potential antidepressant properties. The larval zebrafish platform uses relatively little compound, allows many conditions to be tested in parallel, and can distinguish effects specific to open-loop futility from general hyperlocomotion and other nonspecific side effects within the same assay. In <a className="underline decoration-black/25 underline-offset-4 transition hover:text-black" href="https://doi.org/10.1016/j.neuron.2024.11.011" target="_blank" rel="noreferrer">Duque et al. (2025)</a>, we showed that the assay is sensitive to novel non-psychedelic 5-HT2A receptor agonists, including AAZ-A-154, R-69, and TBG.</>,
          mediaLayout: "stacked",
          media: {
            label: "Results from a small screen of compounds with different receptor targets, illustrating selective effects on futility-induced passivity · © Duque et al. 2025",
            src: "/media/research/pharmacology-plasticity/antidepressant-screening-full.png",
            type: "image",
            alt: "Matrix comparing open-loop passivity and closed-loop locomotor effects across compounds with different receptor targets",
            tone: "violet",
            fit: "contain",
            aspect: "wide",
            captionPosition: "below",
            className: "screening-figure w-full bg-white",
          },
        },
      ]}
      methods={["Pharmacology", "Circuit imaging", "Astroglial signaling", "Quantitative behavior", "Molecular perturbation", "Longitudinal analysis", "Antidepressant screening"]}
      next={{ label: "General anesthesia", href: "/research/anesthesia" }}
    />
  );
}
