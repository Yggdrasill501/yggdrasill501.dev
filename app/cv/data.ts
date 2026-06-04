export interface Role {
  title: string;
  company: string;
  url?: string;
  dates: string;
  sub?: string;
  bullets: string[];
}

export interface School {
  name: string;
  program: string;
  dates: string;
}

export const profile = {
  name: "Filip Žitný",
  title: "Product Engineer · Full-Stack & AI",
  location: "Prague / SF",
  email: "filipzitny@proton.me",
  phone: "+420 608 430 064",
  github: "github.com/Yggdrasill501",
  linkedin: "linkedin.com/in/filip-zitny501",
  pdfPath: "/cv_filip_zitny.pdf",
};

export const experience: Role[] = [
  {
    title: "Product Engineer",
    company: "Duvo",
    url: "https://duvo.ai",
    dates: "Dec 2025 – Present",
    bullets: [
      "Build AI-powered automation that goes beyond copilot suggestions to complete end-to-end operational workflows where rigid scripts and prompts fall short.",
      "Ship product features across the stack in TypeScript and Python, working closely with the founding team to translate customer problems into shippable agentic solutions.",
      "Use Claude Code and other coding agents as part of daily workflow to scaffold integrations and accelerate delivery while maintaining production-grade test coverage and code review standards.",
    ],
  },
  {
    title: "Software Engineer & Open Source Lead",
    company: "Deepnote (YC W19)",
    dates: "Jun 2024 – Nov 2025",
    sub: "Open Source Lead (Jun – Nov 2025) · Software Engineer, AI Team (Jan – Nov 2025) · Data Scientist (Aug 2024 – Jan 2025) · Data Science Intern (Jun – Aug 2024)",
    bullets: [
      "Led a cross-functional team of engineers to open-source Deepnote — an AI-first Jupyter replacement with real-time collaboration and deployable data apps — defining repo structure, contribution model, and release process.",
      "Built the LLM implementation layer and context engineering for the AI workspace as part of the AI team, shipping features that grounded model outputs in users' notebooks and data.",
      "As Product Engineer on the Growth team, drove SEO and product-led growth experiments in TypeScript / Next.js, owning the funnel from landing page to activated workspace.",
      "Started as Data Science Intern and converted to full-time Data Scientist on Growth, building data pipelines and dashboards in Python/SQL that informed marketing and product decisions.",
    ],
  },
  {
    title: "Cyber Security Engineer",
    company: "Global Payments Inc.",
    dates: "May 2024 – Sep 2024",
    bullets: [
      "Designed security architecture and led migration of internal services from VMware to Kubernetes, hardening deployment pipelines for PCI DSS-compliant payment processing.",
      "Built defense tooling in Go and embedded DevSecOps practices into CI/CD, shifting vulnerability detection earlier in the delivery cycle.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Digiteq Automotive",
    dates: "Mar 2023 – May 2024",
    bullets: [
      "Built and maintained a Python framework for automotive test automation, covering Android infotainment systems and CI/CD execution at scale.",
      "Developed C++ desktop applications and core libraries, plus data processing pipelines used by QA and engineering teams.",
      "Trained AI models to represent driver behavior and infotainment interaction patterns for use in test scenario generation.",
    ],
  },
  {
    title: "Co-Founder",
    company: "HackNitra",
    dates: "Sep 2023 – Present",
    bullets: [
      "Co-founded an NGO and community in Nitra, Slovakia bringing together developers, students, and civic technologists around open data, AI, public-sector digitization, and modern education.",
    ],
  },
];

export const education: School[] = [
  {
    name: "Czech Technical University in Prague",
    program: "Informatics in Natural Sciences, Faculty of Nuclear Sciences and Physical Engineering",
    dates: "2022 – 2025",
  },
  {
    name: "Charles University in Prague",
    program: "Computer Science, Faculty of Mathematics and Physics",
    dates: "2021 – 2022",
  },
];

export const skills: Array<{ k: string; v: string }> = [
  { k: "LANGUAGES", v: "TypeScript · Python · Go · C++" },
  { k: "FRONTEND", v: "React · Next.js" },
  { k: "BACKEND / INFRA", v: "Node.js · PostgreSQL · Docker · Kubernetes · AWS / GCP / Azure" },
  { k: "AI / TOOLING", v: "LLM application layer · context engineering · agentic workflows · Claude Code · Linux · Git · CI/CD" },
];
