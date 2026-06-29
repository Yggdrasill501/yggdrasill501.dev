export type SideQuestStatus = "active" | "completed" | "abandoned";

export interface SideQuest {
  id: string;
  title: string;
  kana?: string;
  era: string;
  status: SideQuestStatus;
  description: string;
  tags?: string[];
  href?: string;
}

export const sidequests: SideQuest[] = [
  {
    id: "kana-vending",
    title: "Read a vending machine without Google Translate",
    kana: "自販機",
    era: "ONGOING",
    status: "active",
    description:
      "Get fluent enough in hiragana + katakana to buy a drink in Japan without translation-app cope. Currently at 'can confidently spot コーヒー'.",
    tags: ["language", "japan"],
  },
  {
    id: "zig-real-thing",
    title: "Ship one real thing in Zig",
    era: "ONGOING",
    status: "active",
    description:
      "Not a hello world. Not a benchmark. Something a human would actually download and run on purpose.",
    tags: ["lang", "engineering"],
  },
  {
    id: "marathon",
    title: "Sub-3:30 marathon",
    era: "ONGOING",
    status: "active",
    description:
      "Slowly turning compute-bound legs into something that can survive 42.2 km without renegotiating life choices at km 32.",
    tags: ["body", "longterm"],
  },
  {
    id: "hacknitra",
    title: "Co-founded HackNitra",
    kana: "ハック",
    era: "2023 →",
    status: "completed",
    description:
      "Started a community / NGO in Nitra, Slovakia for devs, students, and civic technologists. Open data, AI, public-sector digitization, modern education.",
    tags: ["community", "slovakia"],
  },
  {
    id: "reactgirls-low-level",
    title: "Argued for low-level languages at ReactGirls",
    era: "2024",
    status: "completed",
    description:
      "Gave a talk arguing every web dev should touch C, Rust, Go, or Zig at least once. Survived the Q&A. The framing is retired, the talk still rules.",
    tags: ["talk"],
    href: "https://www.youtube.com/watch?v=iKZEol3GQXg",
  },
  {
    id: "site-rewrite-n",
    title: "The Nth personal site rewrite",
    era: "every year",
    status: "completed",
    description:
      "Started, deleted, started again. This one (yggdrasill501.dev) might actually stick because there's nothing left to rewrite — it's already a single red dot and some kana.",
    tags: ["meta"],
  },
  {
    id: "quantum-notes",
    title: "Quantum computing notes",
    kana: "量子",
    era: "2025",
    status: "abandoned",
    description:
      "Was reading papers and writing toy Qiskit implementations on the side. The framing didn't survive the positioning rewrite — moved on, kept the notes.",
    tags: ["physics", "off-brand"],
  },
];
