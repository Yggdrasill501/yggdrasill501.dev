import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

export const metadata = { title: "HOW TO WORK WITH ME / 説明書 — Filip Žitný" };

const blocks: Array<{ index: string; kana: string; title: string; hint: string }> = [
  {
    index: "01",
    kana: "通信",
    title: "COMMUNICATION",
    hint: "Async by default, response windows, which channel for what. Where DMs go to die.",
  },
  {
    index: "02",
    kana: "会議",
    title: "MEETINGS",
    hint: "When they're worth it, when they're not, my ideal cadence, camera-on policy.",
  },
  {
    index: "03",
    kana: "決定",
    title: "DECISIONS",
    hint: "How I decide, disagree-and-commit, what needs a doc vs. a Slack, escalation rules.",
  },
  {
    index: "04",
    kana: "反応",
    title: "FEEDBACK",
    hint: "Direct, blameless, no sandwiches. How I give it, how I want it back.",
  },
  {
    index: "05",
    kana: "査読",
    title: "CODE REVIEW",
    hint: "What I actually look for, my nits vs. blockers, turnaround expectations.",
  },
  {
    index: "06",
    kana: "時間",
    title: "AVAILABILITY",
    hint: "Timezones, deep-work blocks, when I'm reachable, when I'm not, weekends.",
  },
  {
    index: "07",
    kana: "禁忌",
    title: "RED FLAGS",
    hint: "Things that will make me disengage fast. Save us both the time.",
  },
  {
    index: "08",
    kana: "相性",
    title: "GREEN FLAGS",
    hint: "The energy, teams and problems I'm at my best around.",
  },
];

export default function HowToWorkWithMePage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-4 pt-12 pb-20 sm:px-6 sm:pt-20">
        <header className="mb-12 border-b-2 border-bone/30 pb-6">
          <div className="flex items-center gap-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
              §07 ／ 説明書 ／ HOW TO WORK WITH ME
            </div>
            <Badge variant="outline">DRAFT</Badge>
          </div>
          <h1 className="mt-2 font-display text-5xl font-black uppercase tracking-tight sm:text-7xl">
            HOW TO WORK <span className="text-rust">WITH ME.</span>
          </h1>
          <p className="mt-3 max-w-2xl font-mono text-sm text-bone/65">
            An operating manual. Placeholder for now — the sections are shape,
            the copy comes later. If you want the rig instead of the manual,{" "}
            <Link href="/how-do-i-work" className="text-rust hover:underline">
              read how I work ←
            </Link>
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {blocks.map((b) => (
            <PlaceholderBlock key={b.index} {...b} />
          ))}
        </div>

        <div className="mt-16 border-2 border-rust bg-ink p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-rust">
            TRANSMIT
          </div>
          <h2 className="mt-2 font-display text-2xl font-black uppercase">
            Read the draft, still want to work together?
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="mailto:filipzitny@proton.me">
              <Button variant="rust" size="lg">
                MAIL →
              </Button>
            </a>
            <Link href="/about">
              <Button variant="outline" size="lg">
                ABOUT
              </Button>
            </Link>
          </div>
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
