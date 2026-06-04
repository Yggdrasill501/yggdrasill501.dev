"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (() => {
      try {
        return localStorage.getItem("theme") as Theme | null;
      } catch {
        return null;
      }
    })();
    const initial: Theme =
      stored ?? (document.documentElement.classList.contains("light") ? "light" : "dark");
    apply(initial);
    setTheme(initial);
    setMounted(true);
  }, []);

  function apply(next: Theme) {
    const root = document.documentElement;
    if (next === "light") root.classList.add("light");
    else root.classList.remove("light");
  }

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    apply(next);
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isLight}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      title={`Switch to ${isLight ? "dark" : "light"} mode`}
      suppressHydrationWarning
      className="relative inline-flex h-9 w-[78px] cursor-pointer items-center border-2 border-bone bg-transparent shadow-brut-sm transition-[transform,box-shadow] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-brut active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-rust transition-transform duration-150 ${
          isLight ? "translate-x-full" : "translate-x-0"
        }`}
      />
      <span className="relative z-10 grid w-full grid-cols-2 items-center justify-items-center font-mono text-sm leading-none">
        <span className={mounted && !isLight ? "text-ink" : "text-bone/45"}>☾</span>
        <span className={mounted && isLight ? "text-ink" : "text-bone/45"}>☀</span>
      </span>
    </button>
  );
}
