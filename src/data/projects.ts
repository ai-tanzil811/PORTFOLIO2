export type ProjectStatus = "Live App" | "Live Package" | "Research" | "Team Research" | "Full-Stack App" | "Security Lab" | "HCI Research" | "Hardware Prototype" | "Concept";

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  summary: string;
  technologies: string[];
  featured: boolean;
  category: "AI & Bioinformatics" | "Full-Stack & CLI" | "Security & IoT" | "HCI & Design";
};

export const flagshipProjects: Project[] = [
  { slug: "greenpeft", title: "GreenPEFT", status: "Live App", summary: "Green AI decision support for choosing parameter-efficient fine-tuning configurations under resource constraints.", technologies: ["Python", "PyTorch", "PEFT", "scikit-learn"], featured: true, category: "AI & Bioinformatics" },
  { slug: "cohere", title: "COHERE", status: "Team Research", summary: "Cross-cohort harmonization and representation transfer for spatial-proteomics cell-type annotation.", technologies: ["PyTorch", "Set Transformers", "Representation Learning"], featured: true, category: "AI & Bioinformatics" },
  { slug: "sprint", title: "SPRINT & Spatial Verification", status: "Research", summary: "Spatial cell-cell communication and reproducible feature verification across multiplexed proteomics data.", technologies: ["Python", "scvi-tools", "Scanpy", "SciPy"], featured: true, category: "AI & Bioinformatics" },
  { slug: "chestxray-distillation", title: "ChestX-ray14 Distillation", status: "Research", summary: "Multi-label thoracic pathology classification and teacher-student knowledge distillation.", technologies: ["PyTorch", "timm", "Vision Transformers", "RAD-DINO"], featured: true, category: "AI & Bioinformatics" },
  { slug: "nirapod", title: "Nirapod", status: "HCI Research", summary: "Adaptive emergency-safety concept and live survey portal for public transport and general safety contexts.", technologies: ["HCI", "Survey", "Figma", "Responsive Web"], featured: true, category: "HCI & Design" },
];

export const secondaryProjects: Project[] = [
  { slug: "", title: "tanzil Terminal Portfolio", status: "Live Package", summary: "Installable Python package for an interactive Unix-style portfolio and mini-games.", technologies: ["Python", "PyPI"], featured: false, category: "Full-Stack & CLI" },
  { slug: "", title: "MediTouch", status: "Full-Stack App", summary: "Multi-role telemedicine workflows, appointments, records, prescriptions, and signalling.", technologies: ["PHP", "MySQL", "JavaScript", "Socket.IO"], featured: false, category: "Full-Stack & CLI" },
  { slug: "", title: "MediVault", status: "Full-Stack App", summary: "Clinical dispensary and drug-conflict system with prescription verification.", technologies: ["Node.js", "Express", "MySQL"], featured: false, category: "Full-Stack & CLI" },
  { slug: "", title: "Seat Koi", status: "Full-Stack App", summary: "University course and section planner with filtering and PDF export.", technologies: ["Next.js", "TypeScript", "Tailwind", "jsPDF"], featured: false, category: "Full-Stack & CLI" },
  { slug: "", title: "SecureVoice", status: "Full-Stack App", summary: "Civic incident reporting and administrative case-management platform.", technologies: ["Node.js", "MySQL", "JavaScript"], featured: false, category: "Full-Stack & CLI" },
  { slug: "", title: "Ransomware & Exfiltration Detection Lab", status: "Security Lab", summary: "Controlled defensive simulation for SIEM alerting and data-loss-prevention rules.", technologies: ["Python", "Bash", "Wazuh", "MyDLP"], featured: false, category: "Security & IoT" },
  { slug: "", title: "Fall Detection Wearable", status: "Hardware Prototype", summary: "ESP32-based fall and vital-sign prototype with an experimental monitoring dashboard.", technologies: ["ESP32-S3", "MPU6050", "MAX30102", "Socket.IO"], featured: false, category: "Security & IoT" },
];
