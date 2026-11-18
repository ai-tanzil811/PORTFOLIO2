"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const shouldDark = saved ? saved === "dark" : false;
    setDark(shouldDark);
    document.documentElement.classList.toggle("dark", shouldDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button type="button" onClick={toggle} aria-label={dark ? "Use light theme" : "Use dark theme"} className="grid h-10 w-10 place-items-center rounded-full border" style={{ borderColor: "var(--border)" }}>
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
