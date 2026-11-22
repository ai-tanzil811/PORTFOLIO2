export type ProjectCategory = "AI & Bioinformatics" | "Full-Stack & Systems" | "HCI & Open-Source";

export type Project = {
  title: string;
  category: ProjectCategory;
  summary: string;
  metric?: string;
  metricLabel?: string;
  technologies: string[];
  link: string;
  linkLabel: string;
  liveLink?: string;
  repositoryLink?: string;
  wide?: boolean;
};

export const projects: Project[] = [
  {
    title: "COHERE: Cross-Cohort Harmonization",
    category: "AI & Bioinformatics",
    summary: "Reproducible deep-learning framework for transferring cell-type annotations across seven heterogeneous spatial proteomics cohorts.",
    metric: "6.06M+",
    metricLabel: "cells harmonized",
    technologies: ["Python", "PyTorch", "Spatial Proteomics", "Transformers", "Kaggle T4"],
    link: "https://github.com/Tabassum-Sumaiya13/transferable-celltype-representation",
    linkLabel: "View team repository",
    repositoryLink: "https://github.com/Tabassum-Sumaiya13/transferable-celltype-representation",
    wide: true,
  },
  {
    title: "Medical Imaging & Chest X-Ray Classification",
    category: "AI & Bioinformatics",
    summary: "Benchmarked multimodal and convolutional architectures for thoracic pathology classification on the NIH ChestX-ray dataset.",
    metric: "Multi-architecture",
    metricLabel: "diagnostic pipelines",
    technologies: ["BioViL-T", "DenseNet-121", "XrViT", "Knowledge Distillation"],
    link: "https://www.kaggle.com/ashrafulislamtanzil",
    linkLabel: "View Kaggle",
    repositoryLink: "https://github.com/ai-tanzil811",
  },
  {
    title: "Project Nirapod",
    category: "HCI & Open-Source",
    summary: "Human-centric emergency alert ecosystem with adaptive panic triggers and offline-capable fallback communication.",
    metric: "Offline-first",
    metricLabel: "safety design",
    technologies: ["HCI", "UX Research", "Safety Systems", "Mobile"],
    link: "https://www.kaggle.com/datasets/ashrafulislamtanzil/nirapod-the-virtual-art-of-actual-safety",
    linkLabel: "View dataset",
    liveLink: "https://nirapod-hci.netlify.app/",
    repositoryLink: "https://github.com/ai-tanzil811/HCI-PROJECT",
  },
  {
    title: "Green AI Decision Support Frameworks",
    category: "AI & Bioinformatics",
    summary: "Multi-objective experiments and decision support for energy- and compute-efficient machine learning using PEFT.",
    metric: "PEFT",
    metricLabel: "resource-aware ML",
    technologies: ["Python", "PyTorch", "PEFT", "Research"],
    link: "https://green-peft.vercel.app/",
    linkLabel: "Launch live app",
    liveLink: "https://green-peft.vercel.app/",
    repositoryLink: "https://github.com/ai-tanzil811/Green-AI-Decision-Support-Frameworks",
  },
  {
    title: "SecureVoice",
    category: "Full-Stack & Systems",
    summary: "Verified crime and incident reporting platform with geolocation, multi-step verification, and administrative case management.",
    metric: "Full-stack",
    metricLabel: "case management",
    technologies: ["Web", "Geolocation", "Verification", "Dashboard"],
    link: "https://github.com/ai-tanzil811/DBMS-Project-Spring-25",
    linkLabel: "View repository",
    repositoryLink: "https://github.com/ai-tanzil811/DBMS-Project-Spring-25",
  },
  {
    title: "tanzil",
    category: "HCI & Open-Source",
    summary: "Published Python utility package and interactive terminal-style developer portfolio for exploring projects by command.",
    metric: "pip install",
    metricLabel: "tanzil",
    technologies: ["Python", "PyPI", "Terminal UI", "Open Source"],
    link: "https://pypi.org/user/aitanzil/",
    linkLabel: "View PyPI",
    liveLink: "https://aitanzil.me/",
    repositoryLink: "https://github.com/ai-tanzil811/tanzil",
  },
  {
    title: "MediVault",
    category: "Full-Stack & Systems",
    summary: "Database-backed dispensary inventory and order-processing system with structured relational schemas and stock tracking.",
    metric: "Relational",
    metricLabel: "inventory system",
    technologies: ["Database", "Inventory", "Ordering", "SQL"],
    link: "https://github.com/ai-tanzil811/MediVault",
    linkLabel: "View repository",
    repositoryLink: "https://github.com/ai-tanzil811/MediVault",
  },
];
