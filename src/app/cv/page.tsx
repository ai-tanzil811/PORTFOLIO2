import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { skillGroups } from "@/data/skills";
import { links } from "@/data/links";
import { withBase } from "@/lib/paths";

export default function CV() {
  return (
    <main id="main" className="mx-auto max-w-[850px] px-4 py-12">
      <div className="mb-6 print:hidden">
        <a className="inline-flex items-center gap-2 rounded-lg border px-4 py-2" style={{ borderColor: "var(--border)" }} href={withBase("/cv.pdf")} download><Download size={16} /> Download PDF</a>
      </div>
      <article className="print:text-black">
        <header className="border-b pb-5" style={{ borderColor: "var(--border)" }}>
          <h1 className="text-4xl font-bold">{profile.name}</h1>
          <p className="mt-2 text-lg">AI & Data Science · Software Engineering</p>
          <p className="mt-2 text-sm">{profile.location} · {links.emailAddress}</p>
          <p className="mt-1 text-sm">{links.linkedin} · {links.github}</p>
        </header>
        <section className="mt-6">
          <h2 className="font-mono text-xs uppercase tracking-widest text-accent">Profile</h2>
          <p className="mt-2 leading-7">{profile.about}</p>
        </section>
        <section className="mt-6">
          <h2 className="font-mono text-xs uppercase tracking-widest text-accent">Education</h2>
          {education.map(item => (
            <div key={item.institution} className="mt-3">
              <p className="font-semibold">{item.credential} — {item.institution}</p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{item.detail} · {item.period}</p>
            </div>
          ))}
        </section>
        <section className="mt-6">
          <h2 className="font-mono text-xs uppercase tracking-widest text-accent">Selected work</h2>
          <div className="mt-3 space-y-3">
            <p><strong>GreenPEFT:</strong> Green AI decision-support framework for resource-aware PEFT comparison; live app, CLI package, Hugging Face artifact, and Kaggle dataset.</p>
            <p><strong>COHERE:</strong> Team spatial-proteomics research. My contributions include cohort standardization, representation engineering, leakage controls, and methodology diagrams.</p>
            <p><strong>SPRINT:</strong> Spatial communication inference and reproducible feature verification pipelines.</p>
            <p><strong>ChestX-ray14 Distillation:</strong> Multi-label thoracic pathology classification and knowledge-distillation evaluation.</p>
            <p><strong>Nirapod:</strong> HCI survey portal and emergency-safety interaction prototype.</p>
          </div>
        </section>
        <section className="mt-6">
          <h2 className="font-mono text-xs uppercase tracking-widest text-accent">Skills</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {skillGroups.map(group => (
              <p key={group.title} className="text-sm"><strong>{group.title}:</strong> {group.skills.join(", ")}</p>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
