import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        bone: "rgb(var(--bone) / <alpha-value>)",
        ash: "rgb(var(--ash) / <alpha-value>)",
        smoke: "rgb(var(--smoke) / <alpha-value>)",
        rust: "rgb(var(--rust) / <alpha-value>)",
        rustdim: "rgb(var(--rustdim) / <alpha-value>)",
        border: "rgb(var(--bone) / <alpha-value>)",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        brut: "6px 6px 0 0 rgb(var(--bone))",
        "brut-sm": "3px 3px 0 0 rgb(var(--bone))",
        "brut-rust": "6px 6px 0 0 rgb(var(--rust))",
        "brut-rust-sm": "3px 3px 0 0 rgb(var(--rust))",
        "brut-lg": "8px 8px 0 0 rgb(var(--bone))",
        "brut-rust-lg": "8px 8px 0 0 rgb(var(--rust))",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "rgb(var(--bone) / 0.85)",
            "--tw-prose-headings": "rgb(var(--bone))",
            "--tw-prose-lead": "rgb(var(--bone) / 0.75)",
            "--tw-prose-links": "rgb(var(--rust))",
            "--tw-prose-bold": "rgb(var(--bone))",
            "--tw-prose-counters": "rgb(var(--bone) / 0.5)",
            "--tw-prose-bullets": "rgb(var(--bone) / 0.4)",
            "--tw-prose-hr": "rgb(var(--bone) / 0.3)",
            "--tw-prose-quotes": "rgb(var(--bone) / 0.8)",
            "--tw-prose-quote-borders": "rgb(var(--rust))",
            "--tw-prose-captions": "rgb(var(--bone) / 0.5)",
            "--tw-prose-code": "rgb(var(--rust))",
            "--tw-prose-pre-code": "rgb(var(--bone))",
            "--tw-prose-pre-bg": "rgb(var(--ash))",
            "--tw-prose-th-borders": "rgb(var(--bone) / 0.4)",
            "--tw-prose-td-borders": "rgb(var(--bone) / 0.2)",
          },
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        blink: "blink 1.1s steps(2) infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};
export default config;
