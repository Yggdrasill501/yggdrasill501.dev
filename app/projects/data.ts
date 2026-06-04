import type { Project } from "../components/ProjectCard";

export const featuredProjects: Project[] = [
  {
    id: "yggdrasill501-dev",
    title: "yggdrasill501.dev",
    kana: "このサイト",
    year: "2026",
    status: "live",
    description:
      "This site. Hand-built brutalist portfolio. Next.js + Tailwind, no UI lib, no tracking.",
    stack: ["Next.js", "Tailwind", "TypeScript"],
    repo: "https://github.com/Yggdrasill501",
    accent: true,
  },
  {
    id: "low-level-talk",
    title: "Do low-level languages matter?",
    kana: "低レベル言語",
    year: "2024",
    status: "live",
    description:
      "Talk at ReactGirls on why every web dev should touch C, Rust, Go or Zig at least once.",
    stack: ["Talk", "C", "Rust", "Go"],
    href: "https://www.youtube.com/watch?v=iKZEol3GQXg",
  },
  {
    id: "quantum-notes",
    title: "Quantum notes",
    kana: "量子メモ",
    year: "2025",
    status: "wip",
    description:
      "Personal notes and toy implementations from reading quantum computing papers.",
    stack: ["Python", "Qiskit"],
  },
  {
    id: "placeholder",
    title: "Untitled / TBA",
    kana: "未定",
    year: "2026",
    status: "wip",
    description:
      "Something between a compiler and a misbehaviour. More info soon.",
    stack: ["Rust", "LLVM"],
  },
];
