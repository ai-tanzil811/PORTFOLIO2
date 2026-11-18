import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { caseStudies } from "@/data/research";
import { withBase } from "@/lib/paths";

export function generateStaticParams() {
  return caseStudies.map(project => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = caseStudies.find(item => item.slug === slug);
    return { title: project ? `${project.title} — Ashraful Islam Tanzil` : "Work — Ashraful Islam Tanzil" };
  });
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = caseStudies.find(item => item.slug === slug);
  if (!project) return null;

  const sections = [
    ["Problem", project.problem],
    ["Constraints", project.constraints],
    ["Approach", project.approach],
    ["My contribution", project.contribution],
    ["Results", project.results],
    ["What I would do next", project.next],
  ];

  return (
    <main id="main" className="mx-auto max-w-[860px] px-4 py-16">
      <a className="inline-flex items-center gap-2 text-sm" href={withBase("/#research")}><ArrowLeft size={16} /> Back to selected work</a>
      <p className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-accent">{project.eyebrow}</p>
      <h1 className="mt-3 text-5xl font-semibold tracking-tight">{project.title}</h1>
      <p className="mt-5 text-xl leading-8" style={{ color: "var(--muted)" }}>{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map(technology => <span key={technology} className="rounded-md border px-2.5 py-1 text-sm" style={{ borderColor: "var(--border)" }}>{technology}</span>)}
      </div>
      <div className="mt-14 space-y-10">
        {sections.map(([title, copy]) => (
          <section key={title}>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-3 leading-8" style={{ color: "var(--muted)" }}>{copy}</p>
          </section>
        ))}
      </div>
      {project.artifacts.length > 0 && (
        <section className="mt-14 border-t pt-8" style={{ borderColor: "var(--border)" }}>
          <h2 className="text-2xl font-semibold">Artifacts & links</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {project.artifacts.map(artifact => (
              <a key={artifact.label} className="inline-flex items-center gap-2 rounded-lg border px-4 py-2" style={{ borderColor: "var(--border)" }} href={artifact.url} target="_blank" rel="noopener noreferrer">
                {artifact.label} <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
