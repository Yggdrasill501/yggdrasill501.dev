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
