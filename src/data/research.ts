export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  constraints: string;
  approach: string;
  contribution: string;
  results: string;
  next: string;
  technologies: string[];
  artifacts: { label: string; url: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "greenpeft",
    title: "GreenPEFT",
    eyebrow: "Green AI decision support",
    summary: "A framework for comparing parameter-efficient fine-tuning choices across model quality and resource dimensions.",
    problem: "PEFT choices are difficult to compare when quality, VRAM, runtime, energy, carbon impact, and cost trade off differently.",
    constraints: "The implementation targets resource-constrained experimentation and reproducible model/resource evidence.",
    approach: "Compare Full Fine-Tuning, LoRA, QLoRA, LoRA-FA, and LISA. The research framework evaluates resource telemetry and uses Ridge surrogate regressors, Pareto-frontier extraction, and a Green Efficiency Index for constrained recommendations.",
    contribution: "I developed the project framing, experiment and artifact structure, resource-aware evaluation approach, and deployed application/package workflow.",
    results: "A live web application and installable green-peft package are available. The benchmark paper is in preparation and is not published, accepted, submitted, or under review.",
    next: "Publish reconciled benchmark figures only after the corrected run, configuration, and feature counts are supplied and verified.",
    technologies: ["Python", "PyTorch", "Hugging Face Transformers", "PEFT", "scikit-learn", "CodeCarbon", "PyNVML"],
    artifacts: [
      { label: "Live app", url: "https://green-peft.vercel.app/" },
      { label: "GitHub", url: "https://github.com/ai-tanzil811/Green-AI-Decision-Support-Frameworks" },
      { label: "Hugging Face", url: "https://huggingface.co/ai-tanzil/GreenPEFT" },
      { label: "PyPI", url: "https://pypi.org/project/green-peft/" },
      { label: "Kaggle dataset DOI", url: "https://doi.org/10.34740/KAGGLE/DSV/20178095" },
      { label: "Hugging Face DOI", url: "https://doi.org/10.57967/hf/10690" },
    ],
  },
  {
    slug: "cohere",
    title: "COHERE",
    eyebrow: "Team spatial-proteomics research",
    summary: "Cross-cohort harmonization and representation transfer for cell-type annotation across heterogeneous cohorts.",
    problem: "Spatial-proteomics cohorts use different feature and annotation conventions, making transferable cell-type representation difficult.",
    constraints: "The project uses a held-out cohort and fold-local controls to limit leakage across heterogeneous datasets.",
    approach: "Standardize cohorts, engineer mask-aware cell representations, and evaluate an open-vocabulary Set Transformer with cosine-prototype transfer.",
    contribution: "My contribution covered cohort standardization pipelines, mask-aware representation engineering, fold-local leakage controls, and architecture/methodology diagrams.",
    results: "Team research remains subject to metric verification. No cross-cohort F1 or other quantitative claim is shown until the exact evaluation setup and result are confirmed.",
    next: "Publish a verified result table, frozen-test protocol, and explicit limitations.",
    technologies: ["PyTorch", "Set Transformers", "Representation Learning"],
    artifacts: [
      { label: "Team repository", url: "https://github.com/Tabassum-Sumaiya13/transferable-celltype-representation" },
      { label: "Use-case diagram", url: "https://www.canva.com/d/3YhWtKeJrpU4HAo" },
    ],
  },
  {
    slug: "sprint",
    title: "SPRINT & Spatial Verification",
    eyebrow: "Spatial bioinformatics",
    summary: "Spatially grounded communication inference and reproducible feature verification for multiplexed proteomics.",
    problem: "Spatial molecular measurements need analysis pipelines that preserve tissue structure and distinguish stable features from noise.",
    constraints: "Methods must be reproducible across graph construction, permutation tests, and split-half verification.",
    approach: "SPRINT connects imputation, spatial mapping, ligand-receptor inference, and spatial filtering. A separate verification pipeline examines Delaunay graphs, permutation checks, and split-half stability.",
    contribution: "I worked across the spatial analysis pipeline, reproducibility structure, feature verification, and technical reporting.",
    results: "Verified result figures are withheld until the exact dataset, cell count, method roles, and interpretation are reconciled.",
    next: "Document the cohort, graph construction, and stability evidence in a compact audited report.",
    technologies: ["Python", "scvi-tools", "Tangram", "CellChat", "Scanpy", "AnnData", "SciPy", "PyArrow"],
    artifacts: [
      { label: "Repository/workspace", url: "https://github.com/ai-tanzil811/files" },
      { label: "Results report", url: "https://github.com/ai-tanzil811/files/blob/main/doc/RESULT_REPORT.md" },
      { label: "Spatial Proteomics Analysis", url: "https://github.com/ai-tanzil811/Spatial-Proteomics-Analysis" },
    ],
  },
  {
    slug: "chestxray-distillation",
    title: "ChestX-ray14 Distillation",
    eyebrow: "Medical-image representation learning",
    summary: "Multi-label thoracic disease classification with teacher-student knowledge distillation.",
    problem: "Chest radiograph classification requires robust multi-label models and a defensible comparison across architectures.",
    constraints: "Evaluation must separate model architecture, split methodology, and teacher/student training behavior.",
    approach: "Implemented and evaluated DenseNet-121, ConvNeXt-Tiny, BioViL-T, and Vision Transformer variants, including XrVit and RAD-DINO, with knowledge-distillation pipelines on NIH ChestX-ray14.",
    contribution: "My work covered architecture implementation and evaluation, training pipelines, and comparison of distilled and direct-supervision approaches.",
    results: "The exact repository and reproducible metrics are being reconciled before publication on this portfolio.",
    next: "Add verified split metrics, code/notebook links, and a concise error analysis.",
    technologies: ["PyTorch", "timm", "RAD-DINO", "BioViL-T", "DenseNet-121", "Vision Transformers"],
    artifacts: [],
  },
  {
    slug: "nirapod",
    title: "Nirapod",
    eyebrow: "Human-centred emergency safety",
    summary: "A general-public safety concept with a live survey portal and prototype design work.",
    problem: "People need understandable, thumb-reachable emergency actions in high-stress situations across Dhaka transport and other public contexts.",
    constraints: "The live deployment is a survey portal. The mobile safety app remains a design prototype unless a working implementation is verified.",
    approach: "Used contextual and HCI methods to explore an adaptive SOS interface, timed cancellation, offline fallback concepts, and emergency-services integration.",
    contribution: "I designed and developed the survey experience and contributed to the research and interaction-prototype workflow.",
    results: "The survey portal is deployed. Aggregate findings can be shown, but respondent-level data is excluded. Survey count and final collection status require verification.",
    next: "Add verified aggregate usability findings and clear evidence that distinguishes the prototype from a production app.",
    technologies: ["HCI", "Survey", "Responsive Web", "Figma", "Usability Testing"],
    artifacts: [
      { label: "Live survey", url: "https://nirapod-hci.netlify.app/" },
      { label: "Repository", url: "https://github.com/ai-tanzil811/HCI-PROJECT" },
      { label: "Figma profile", url: "https://figma.com/@aitanzil" },
      { label: "Canva prototype", url: "https://www.canva.com/d/t1-G5IUwz6KlAtv" },
    ],
  },
];
