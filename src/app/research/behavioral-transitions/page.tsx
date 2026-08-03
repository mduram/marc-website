import type { Metadata } from "next";
import ResearchProjectPage from "@/components/ResearchProjectPage";

export const metadata: Metadata = {
  title: "Futility-Induced Passivity",
  description: "A virtual-reality assay for measuring and perturbing the transition from persistent swimming to passivity.",
};

export default function BehavioralTransitionsPage() {
  return (
    <ResearchProjectPage
      number="01"
      eyebrow="Virtual reality · Behavior · Neuromodulation"
      title="Futility-induced passivity"
      question="A controlled transition from persistent swimming to passivity."
      summary="We combine a tail-free virtual-reality assay with whole-brain calcium imaging, quantitative behavior, and causal perturbations to understand the mechanisms underlying the transition."
      figure={{
        label: "A freely swimming zebrafish alternates between swimming against the flow and giving up",
        path: "/media/research/behavioral-transitions/free-swimming-flow.mp4",
        poster: "/media/research/behavioral-transitions/free-swimming-flow-poster.jpg",
        type: "video",
        alt: "A freely swimming larval zebrafish alternates between swimming against the current and being carried by it",
        tone: "orange",
        fit: "contain",
        copyright: "© Marc Duque Ramírez",
      }}
      mediaGallery={[
        {
          label: "The tail-free virtual-reality assay switches from movement-dependent feedback to open loop",
          src: "/media/research/behavioral-transitions/hero.mp4",
          poster: "/media/research/behavioral-transitions/hero-poster.jpg",
          type: "video",
          alt: "Head-restrained, tail-free larval zebrafish during the virtual-reality assay",
          tone: "orange",
          fit: "cover",
          aspect: "four-three",
          captionPosition: "below",
          copyright: "© Marc Duque Ramírez",
          className: "mx-auto max-w-3xl",
        },
      ]}
      overviewTitle="How the assay works."
      overview={[
        "A head-fixed, tail-free larval zebrafish swims against forward-moving gratings. During closed loop, each swim changes the visual feedback and signals effective forward motion. During open loop, swimming no longer affects the gratings and is therefore futile. Fish initially increase swimming vigor and struggle, then transiently stop swimming and become passive.",
        "By using whole-brain imaging, we record calcium dynamics in both neurons and glia throughout this behavioral transition. Optogenetic, pharmacological, and genetic perturbations then test the contribution of specific cells and pathways.",
      ]}
      sources={[
        { label: "Mu et al., Cell (2019)", href: "https://doi.org/10.1016/j.cell.2019.05.050" },
        { label: "Andalman et al., Cell (2019)", href: "https://pubmed.ncbi.nlm.nih.gov/31031000/" },
        { label: "Duque et al., Neuron (2025)", href: "https://doi.org/10.1016/j.neuron.2024.11.011" },
      ]}
      directions={[
        {
          number: "D1",
          title: "Dorsal raphe and circuit architecture",
          text: <>
            Current work tests how the serotonergic dorsal raphe and its downstream circuits may compute futility and modulate the transition to passivity. We combine connectomics from a whole-brain electron-microscopy dataset with whole-brain imaging, pharmacology, and optogenetic perturbations to investigate how this dorsal raphe population communicates with the norepinephrine–astroglia circuit described by <a className="underline decoration-black/25 underline-offset-4 transition hover:text-black" href="https://doi.org/10.1016/j.cell.2019.05.050" target="_blank" rel="noreferrer">Mu et al. (2019)</a> and the habenula–raphe circuit described by <a className="underline decoration-black/25 underline-offset-4 transition hover:text-black" href="https://pubmed.ncbi.nlm.nih.gov/31031000/" target="_blank" rel="noreferrer">Andalman et al. (2019)</a>, and whether these pathways are connected.
          </>,
        },
      ]}
      methods={["Futility-induced passivity using virtual reality", "Whole-brain imaging", "Quantitative behavior", "Connectomics from whole-brain electron microscopy", "Optogenetic perturbation", "Pharmacological perturbation"]}
      next={{ label: "Pharmacology & plasticity", href: "/research/pharmacology-plasticity" }}
    />
  );
}
