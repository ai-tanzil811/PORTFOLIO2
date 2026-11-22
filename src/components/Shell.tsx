"use client";

import { useState } from "react";
import { Check, Copy, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { withBase } from "@/lib/paths";
import { links } from "@/data/links";

export function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    ["About", "#about"],
    ["Research", "#research"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <a href={withBase("/")} className="monogram" aria-label="Ashraful Islam Tanzil home">AIT<span>.</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <button type="button" className="menu-button" aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle navigation" onClick={() => setOpen(value => !value)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    await navigator.clipboard.writeText(links.emailAddress);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-card">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something measurable.</h2>
        </div>
        <div className="footer-action">
          <button type="button" className="email-link copy-email" onClick={copyEmail}>
            {links.emailAddress}
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
          <div className="footer-socials">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={links.kaggle} target="_blank" rel="noopener noreferrer">Kaggle</a>
            <a href={links.pypi} target="_blank" rel="noopener noreferrer">PyPI</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>© {new Date().getFullYear()} Ashraful Islam Tanzil</span>
        <a
          href="https://www.cloudflare.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Protected and accelerated by Cloudflare"
          className="cloudflare-status"
        >
          <span className="cloudflare-status-dot" aria-hidden="true"></span>
          <span>Protected by Cloudflare</span>
        </a>
      </div>
    </footer>
  );
}
