"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Package,
  Terminal,
} from "lucide-react";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { projects, type ProjectCategory } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { links } from "@/data/links";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const [copied, setCopied] = useState(false);
  const visibleProjects = filter === "All" ? projects : projects.filter(project => project.category === filter);

  async function copyInstall() {
    await navigator.clipboard.writeText("pip install tanzil");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main id="main">
      <section className="hero section-shell">
        <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.55 }}>
          <div className="status-pill"><MapPin size={14} /> Dhaka, Bangladesh <span /> Open to AI/ML &amp; Full-Stack Opportunities</div>
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.headline}</p>
          <p className="hero-copy">{profile.bio}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#research">Explore Research &amp; Projects <ArrowRight size={17} /></a>
            <a className="button button-secondary" href="https://aitanzil.me/" target="_blank" rel="noopener noreferrer">
              <Terminal size={17} /> Launch Terminal Portfolio <ExternalLink size={14} />
            </a>
          </div>
          <button type="button" className="install-pill" onClick={copyInstall} aria-label="Copy pip install tanzil">
            <span>$ pip install tanzil</span>
            {copied ? <Check size={15} /> : <Copy size={15} />}
          </button>
          <div className="social-row" aria-label="Social profiles">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href={links.kaggle} target="_blank" rel="noopener noreferrer" aria-label="Kaggle" className="text-kaggle">K</a>
            <a href={links.pypi} target="_blank" rel="noopener noreferrer" aria-label="PyPI"><Package size={18} /></a>
            <a href={links.email} aria-label="Email"><Mail size={18} /></a>
          </div>
        </motion.div>
        <motion.div className="hero-terminal" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.12 }}>
          <div className="terminal-bar"><span /><span /><span /><p>tanzil.profile</p></div>
          <div className="terminal-body">
            <p><span>~/portfolio</span> $ whoami</p>
            <h2>Ashraful Islam Tanzil</h2>
            <p className="terminal-line"><span>role</span> ML &amp; AI / Bioinformatics / Full-Stack</p>
            <p className="terminal-line"><span>location</span> Dhaka, Bangladesh</p>
            <p className="terminal-line"><span>focus</span> reproducible, measurable systems</p>
            <p className="terminal-cursor"><span>~/portfolio</span> $ <b /></p>
          </div>
        </motion.div>
      </section>

      <section id="about" className="section-shell about-grid">
        <motion.article className="about-card card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal} transition={{ duration: 0.45 }}>
          <p className="eyebrow">About me</p>
          <h2>Research depth.<br />Engineering utility.</h2>
          <p>{profile.about}</p>
        </motion.article>
        <motion.article className="metric-card card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <p className="metric">6.06M+</p><p>Cells harmonized</p><span>COHERE · spatial proteomics</span>
        </motion.article>
        <motion.article className="metric-card card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <p className="metric">3.60 <small>/ 4.00</small></p><p>CGPA</p><span>Top 3% · 4× merit scholar</span>
        </motion.article>
        <motion.article className="metric-card card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <p className="metric">30+</p><p>Public repositories</p><span>GitHub Pull Shark · PyPI author</span>
        </motion.article>
        <motion.article className="metric-card card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <p className="metric">2 <small>datasets</small></p><p>1 model · 9 notebooks</p><span>Kaggle contributor</span>
        </motion.article>
      </section>

      <section id="research" className="section-shell section-space">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work</p><h2>Research &amp; engineering</h2></div>
          <div className="filters" role="group" aria-label="Filter projects">
            {(["All", "AI & Bioinformatics", "Full-Stack & Systems", "HCI & Open-Source"] as const).map(item => (
              <button key={item} type="button" className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>
            ))}
          </div>
        </div>
        <motion.div layout className="project-grid">
          {visibleProjects.map((project, index) => (
            <motion.article layout key={project.title} className={`project-card card ${project.wide ? "project-wide" : ""}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: index * 0.04 }}>
              <div className="project-top">
                <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="project-category">{project.category}</span>
              </div>
              {project.metric && (
                <div className="project-metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
              )}
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="tech-row">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
              <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">{project.linkLabel} <ArrowRight size={15} /></a>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="skills" className="section-shell section-space">
        <div className="section-heading"><div><p className="eyebrow">Technical matrix</p><h2>Tools I work with</h2></div></div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article className="skill-card card" key={group.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: index * 0.04 }}>
              <p className="skill-number">0{index + 1}</p>
              <h3>{group.title}</h3>
              <div>{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-shell section-space experience-grid">
        <div>
          <p className="eyebrow">Education</p>
          <h2 className="section-title">Academic foundation</h2>
          <div className="timeline">
            {education.map(item => (
              <article key={item.institution} className="timeline-card card">
                <span>{item.period}</span><h3>{item.institution}</h3><p>{item.credential}</p><strong>{item.detail}</strong>
              </article>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Professional experience</p>
          <h2 className="section-title">Leadership &amp; operations</h2>
          <div className="experience-stack">
            <article className="card experience-card">
              <span>UIU · Leadership</span><h3>Vice President, Public Relations &amp; Communication</h3>
              <p>Managed external communications and social media outreach, supporting technical fests and workshops through stronger community engagement.</p>
            </article>
            <article className="card experience-card">
              <span>Overseas · B2C Services</span><h3>International Sales Executive</h3>
              <p>Executed outbound sales and customer engagement campaigns for a U.S.-based HVAC and air duct maintenance provider.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="awards" className="section-shell section-space">
        <div className="section-heading"><div><p className="eyebrow">Recognition</p><h2>Scholarships &amp; awards</h2></div></div>
        <div className="awards-grid">
          <article className="card award-card"><span>01</span><h3>4× UIU Merit Scholarships</h3><p>50% and 25% tuition waivers for ranking within the Top 3% of academic performers.</p></article>
          <article className="card award-card"><span>02</span><h3>JSC General Board Scholarship</h3><p>Education Board General Scholarship for academic distinction in JSC 2015.</p></article>
          <article className="card award-card"><span>03</span><h3>Science Fair &amp; Presentations</h3><p>Recognized at the SAGCSC Science Fair and 35th Intra GSC Scientist Mania.</p></article>
          <article className="card award-card"><span>04</span><h3>Open-Source Recognition</h3><p>PyPI author, Kaggle contributor, GitHub Developer Program member, Pull Shark achievement.</p></article>
        </div>
      </section>
    </main>
  );
}
