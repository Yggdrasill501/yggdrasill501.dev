import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

export const metadata = { title: "HOW DO I WORK / 環境 — Filip Žitný" };

const blocks: Array<{ index: string; kana: string; title: string; hint: string }> = [
  {
    index: "01",
    kana: "機材",
    title: "HARDWARE",
    hint: "Laptop, keyboard, monitor, chair, headphones — what I actually sit at.",
  },
  {
    index: "02",
    kana: "編集",
    title: "EDITOR & SHELL",
    hint: "Editor, extensions, terminal, dotfiles, the keybindings I can't live without.",
  },
  {
    index: "03",
    kana: "知能",
    title: "AI & AGENTS",
    hint: "Which models, when, and where they sit in the loop. Claude Code + custom agents.",
  },
  {
    index: "04",
    kana: "流れ",
    title: "DAILY LOOP",
    hint: "Morning, deep-work, shipping, reviews — how the day is actually shaped.",
  },
  {
    index: "05",
    kana: "音",
    title: "AMBIENT",
    hint: "Music, coffee, lighting, room. The unglamorous stuff that decides output.",
  },
  {
    index: "06",
    kana: "境界",
    title: "GUARDRAILS",
    hint: "What I don't do — no notifications, no meetings before noon, etc.",
  },
];

export default function HowDoIWorkPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-4 pt-12 pb-20 sm:px-6 sm:pt-20">
        <header className="mb-12 border-b-2 border-bone/30 pb-6">
          <div className="flex items-center gap-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
              §06 ／ 環境 ／ HOW DO I WORK
            </div>
            <Badge variant="outline">DRAFT</Badge>
          </div>
          <h1 className="mt-2 font-display text-5xl font-black uppercase tracking-tight sm:text-7xl">
            HOW DO I <span className="text-rust">WORK.</span>
          </h1>
          <p className="mt-3 max-w-2xl font-mono text-sm text-bone/65">
            My rig, my loop, my defaults. This page is placeholder — the shape
            is there, the content isn&apos;t. If you&apos;re looking for how to
            collaborate instead of what I sit at,{" "}
            <Link href="/how-to-work-with-me" className="text-rust hover:underline">
              read the manual →
            </Link>
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {blocks.map((b) => (
            <PlaceholderBlock key={b.index} {...b} />
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t-2 border-bone/20 pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/40">
            {"// end of page ／ next:"}
          </p>
          <Link href="/how-to-work-with-me">
            <Button variant="rust" size="lg">
              HOW TO WORK WITH ME →
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

function PlaceholderBlock({
  index,
  kana,
  title,
  hint,
}: {
  index: string;
  kana: string;
  title: string;
  hint: string;
}) {
  return (
    <section className="flex h-full flex-col border-2 border-dashed border-bone/40 bg-ash/40 p-5">
      <div className="mb-3 flex items-center justify-between border-b border-bone/20 pb-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/40">
          §{index} ／ {kana}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-rust/70">
          TODO
        </span>
      </div>
      <h2 className="font-display text-xl font-black uppercase leading-tight">
        {title}
      </h2>
      <p className="mt-2 font-mono text-xs leading-relaxed text-bone/55">
        {hint}
      </p>
      <div
        aria-hidden
        className="mt-4 flex-1 space-y-1.5 font-mono text-xs text-bone/25"
      >
        <div className="h-2 w-4/5 bg-bone/10" />
        <div className="h-2 w-full bg-bone/10" />
        <div className="h-2 w-3/5 bg-bone/10" />
        <div className="h-2 w-2/3 bg-bone/10" />
      </div>
    </section>
  );
}
