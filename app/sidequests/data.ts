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
    id: "k2-before-30",
    title: "Climb K2 before I turn 30",
    kana: "山",
    era: "→ 2032",
    status: "active",
    description:
      "The big one for the next six years. Everything else on the mountain side of this list is a step toward standing on top of K2 before my 30th birthday.",
    tags: ["mountains", "longterm"],
  },
  {
    id: "matterhorn-mont-blanc",
    title: "Matterhorn + Mont Blanc within a year",
    era: "→ 2027",
    status: "active",
    description:
      "The first two rungs on the way to K2. Both summits inside the next twelve months.",
    tags: ["mountains", "alps"],
  },
  {
    id: "running",
    title: "10 km under an hour",
    era: "ONGOING",
    status: "active",
    description:
      "Current target: 10 km in under 60 minutes. Stretch goal: 20 km in under 2 hours.",
    tags: ["body", "running"],
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
    id: "occasional-speaker",
    title: "Occasional speaker",
    era: "2024 →",
    status: "active",
    description:
      "I get on a stage now and then when I have something worth saying. One of them: a ReactGirls talk on why every web dev should touch C, Rust, Go, or Zig at least once.",
    tags: ["talk"],
    href: "https://www.youtube.com/watch?v=iKZEol3GQXg",
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
