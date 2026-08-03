export type ResearchProject = {
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  question: string;
  description: string;
  homepageDescription: string;
  methods: string[];
  href: string;
  accent: string;
  media: {
    homepage: string;
    hero: string;
    poster?: string;
    homepagePoster?: string;
    alt: string;
    available?: boolean;
  };
};

export const researchProjects: ResearchProject[] = [
  {
    number: "01",
    slug: "behavioral-transitions",
    title: "Futility-induced passivity",
    shortTitle: "Futility-induced passivity",
    eyebrow: "Virtual reality · Behavior · Neuromodulation",
    question:
      "How does evidence that an action is futile lead an animal to stop trying?",
    description:
      "A tail-free virtual-reality assay makes the switch from struggling to passivity experimentally accessible. Current work tests how the serotonergic dorsal raphe and downstream circuits compute futility and modulate this transition.",
    homepageDescription:
      "A controlled assay for studying the switch from struggling to giving up.",
    methods: [
      "Futility-induced passivity using virtual reality",
      "Whole-brain imaging",
      "Electron microscopy",
      "Optogenetics",
      "Molecular perturbation",
      "Quantitative behavior",
    ],
    href: "/research/behavioral-transitions",
    accent:
      "from-orange-500/20 via-red-500/10 to-transparent",
    media: {
      homepage: "/media/research/behavioral-transitions/hero.mp4",
      homepagePoster: "/media/research/behavioral-transitions/hero-poster.jpg",
      hero: "/media/research/behavioral-transitions/hero.mp4",
      poster: "/media/research/behavioral-transitions/hero-poster.jpg",
      alt: "Head-restrained, tail-free larval zebrafish during a virtual-reality behavioral assay",
      available: true,
    },
  },
  {
    number: "02",
    slug: "pharmacology-plasticity",
    title: "Ketamine, astroglia, and persistent behavioral change",
    shortTitle: "Ketamine & astroglia",
    eyebrow: "Ketamine · Astroglia · Plasticity",
    question:
      "How can one dose of ketamine produce a long-lasting change in the response to futility?",
    description:
      "A brief ketamine exposure produces a norepinephrine-dependent calcium response in astroglia and persistently suppresses futility-induced passivity after washout. The same behavioral assay is now being adapted for higher-throughput antidepressant screening.",
    homepageDescription:
      "Ketamine links an acute astroglial calcium response to persistent behavioral change.",
    methods: [
      "Pharmacology",
      "Circuit imaging",
      "Quantitative behavior",
      "Cellular signaling",
      "Molecular perturbation",
    ],
    href: "/research/pharmacology-plasticity",
    accent:
      "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    media: {
      homepage: "/media/research/pharmacology-plasticity/fish-ketamine-waves.mp4",
      homepagePoster: "/media/research/pharmacology-plasticity/fish-ketamine-waves-poster.jpg",
      hero: "/media/research/pharmacology-plasticity/hero.mp4",
      poster: "/media/research/pharmacology-plasticity/hero-poster.jpg",
      alt: "Ketamine-evoked astroglial calcium waves in larval zebrafish",
      available: true,
    },
  },
  {
    number: "03",
    slug: "anesthesia",
    title: "General anesthesia across the whole brain",
    shortTitle: "Anesthesia",
    eyebrow:
      "Anesthesia · Whole-brain imaging · Recovery",
    question:
      "How do anesthetic compounds move the whole brain into and out of a different state?",
    description:
      "I use whole-brain imaging to compare how anesthetic compounds with different molecular targets induce anesthesia and support recovery.",
    homepageDescription:
      "I compare brain-wide activity during anesthetic induction and recovery.",
    methods: [
      "Whole-brain light-sheet imaging",
      "Single-cell analysis",
      "Pharmacology",
      "Behavior",
      "Physiology",
      "Drug delivery",
    ],
    href: "/research/anesthesia",
    accent:
      "from-cyan-400/20 via-blue-500/10 to-transparent",
    media: {
      homepage: "/media/research/anesthesia/hero.mp4",
      homepagePoster: "/media/research/anesthesia/hero-poster.jpg",
      hero: "/media/research/anesthesia/hero.mp4",
      poster: "/media/research/anesthesia/hero-poster.jpg",
      alt: "Whole-brain activity in a larval zebrafish during propofol anesthesia",
      available: true,
    },
  },
];

export const modelSystems = {
  title: "Why larval zebrafish",
  description:
    "Larval zebrafish and light-sheet imaging connect molecular perturbations, brain-wide activity, and behavior in the same experiment.",
  href: "/research/model-systems",
};
