import { ArrowRight, Download, ExternalLink, Github } from "lucide-react";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { flagshipProjects, secondaryProjects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { links } from "@/data/links";
import { withBase } from "@/lib/paths";
import { StatusBadge } from "@/components/StatusBadge";

export default function Home() {
  return (
    <main id="main">
      <section className="mx-auto grid min-h-[70vh] max-w-[1100px] items-center px-4 py-16">
        <div className="max-w-[820px]">
          <p className="mb-5 inline-flex rounded-full border px-3 py-1 font-mono text-xs" style={{ borderColor: "var(--border)" }}>
            <span className="mr-2 text-accent">●</span>{profile.availability}
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">{profile.name}</h1>
          <p className="mt-5 max-w-[680px] text-xl md:text-2xl" style={{ color: "var(--muted)" }}>{profile.headline}</p>
          <p className="mt-5 max-w-[700px] leading-7" style={{ color: "var(--muted)" }}>{profile.bio}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-white" href={withBase("/#research")}>View research & work <ArrowRight size={17} /></a>
            <a className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-medium" style={{ borderColor: "var(--border)" }} href={withBase("/work/greenpeft")}>Launch GreenPEFT</a>
            <a className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-medium" style={{ borderColor: "var(--border)" }} href={withBase("/cv.pdf")} download>Download CV <Download size={17} /></a>
          </div>
        </div>
      </section>

      <section aria-label="Verified highlights" className="border-y" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 px-4 py-7 md:grid-cols-4">
          {[["CGPA", "3.60 / 4.00"], ["Degree", "B.Sc. CSE · 2026"], ["Location", profile.location], ["Focus", "AI / ML / Software"]].map(([label, value]) => (
            <div key={label} className="border-l px-4 first:border-l-0" style={{ borderColor: "var(--border)" }}>
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{label}</p>
              <p className="mt-1 text-sm font-medium">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="research" className="mx-auto max-w-[1100px] px-4 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Featured research & live systems</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight">Selected work</h2>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {flagshipProjects.map((project, index) => (
            <article key={project.slug} className={`rounded-2xl border p-6 ${index === 0 ? "md:col-span-2" : ""}`} style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
              <div className="flex items-center justify-between gap-4">
                <StatusBadge status={project.status} />
                <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-3 leading-7" style={{ color: "var(--muted)" }}>{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map(t => <span key={t} className="font-mono text-xs" style={{ color: "var(--muted)" }}>#{t}</span>)}</div>
              <a className="mt-7 inline-flex items-center gap-2 font-medium text-accent" href={withBase(`/work/${project.slug}`)}>Read case study <ArrowRight size={16} /></a>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="border-y" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <div className="mx-auto max-w-[1100px] px-4 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Engineering projects</p>
          <h2 className="mt-3 text-4xl font-semibold">Selected systems</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {secondaryProjects.map(project => (
              <article key={project.title} className="rounded-xl border p-5" style={{ borderColor: "var(--border)" }}>
                <StatusBadge status={project.status} />
                <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm leading-6" style={{ color: "var(--muted)" }}>{project.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-4 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Education</p>
            <div className="mt-6 space-y-6">
              {education.map(item => (
                <article key={item.institution}>
                  <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>{item.period}</p>
                  <h3 className="mt-2 font-semibold">{item.institution}</h3>
                  <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{item.credential}</p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <div id="about">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About</p>
            <h2 className="mt-4 text-3xl font-semibold">Evidence before adjectives.</h2>
            <p className="mt-5 leading-7" style={{ color: "var(--muted)" }}>{profile.about}</p>
            <a className="mt-5 inline-flex items-center gap-2 font-medium text-accent" href={links.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub profile <ExternalLink size={14} /></a>
          </div>
        </div>
      </section>

      <section className="border-t" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1100px] px-4 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Skills</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {skillGroups.map(group => (
              <article key={group.title}>
                <h3 className="font-semibold">{group.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map(skill => <span key={skill} className="rounded-md border px-2.5 py-1 text-sm" style={{ borderColor: "var(--border)" }}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
