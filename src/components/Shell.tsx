"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { withBase } from "@/lib/paths";
import { links } from "@/data/links";

export function Header() {
  const [open, setOpen] = useState(false);
  const itemClass = "text-sm font-medium hover:text-accent";
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur" style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--background) 92%, transparent)" }}>
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-4">
        <a href={withBase("/")} className="font-mono text-lg font-bold" aria-label="Portfolio home">aitanzil<span className="text-accent">.</span></a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          <a className={itemClass} href={withBase("/#research")}>Research</a>
          <a className={itemClass} href={withBase("/#projects")}>Projects</a>
          <a className={itemClass} href={withBase("/#about")}>About</a>
          <a className={itemClass} href={withBase("/#contact")}>Contact</a>
          <a className={itemClass} href={withBase("/cv")}>CV</a>
          <ThemeToggle />
        </nav>
        <button type="button" className="md:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t px-4 py-4 md:hidden" style={{ borderColor: "var(--border)", background: "var(--background)" }} aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-[1100px] flex-col gap-4">
            <a href={withBase("/#research")} onClick={() => setOpen(false)}>Research</a>
            <a href={withBase("/#projects")} onClick={() => setOpen(false)}>Projects</a>
            <a href={withBase("/#about")} onClick={() => setOpen(false)}>About</a>
            <a href={withBase("/#contact")} onClick={() => setOpen(false)}>Contact</a>
            <a href={withBase("/cv")} onClick={() => setOpen(false)}>CV</a>
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto grid max-w-[1100px] gap-8 px-4 py-12 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold">Let&apos;s build evidence-backed systems.</h2>
        </div>
        <div className="md:text-right">
          <a className="text-lg font-medium underline decoration-accent underline-offset-4" href={links.email}>{links.emailAddress}</a>
          <div className="mt-5 flex gap-5 md:justify-end">
            <a className="hover:text-accent" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="hover:text-accent" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="hover:text-accent" href={withBase("/cv")}>CV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
