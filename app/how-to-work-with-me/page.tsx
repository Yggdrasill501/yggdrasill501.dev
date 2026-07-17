import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

export const metadata = { title: "HOW TO WORK WITH ME / 説明書 — Filip Žitný" };

const blocks: Array<{
  index: string;
  kana: string;
  title: string;
  prime: string;
  rules: string[];
}> = [
  {
    index: "01",
    kana: "通信",
    title: "COMMUNICATION",
    prime:
      "Async or sync — both work. What matters is a clear topic and nobody left guessing what the other wants.",
    rules: [
      "Channels: email for external + formal, Slack for work threads, issues/PRs for anything about code.",
      "Urgent? Don't type an essay — grab me for a 5-minute huddle. I'd rather talk it out than trade paragraphs.",
      "Lead with the ask: topic, context, what you need from me. Don't ask to ask.",
      "Decisions live in public channels or docs. A decision made in a DM didn't happen.",
    ],
  },
  {
    index: "02",
    kana: "会議",
    title: "MEETINGS",
    prime: "Default no. If it can be a doc, it's a doc.",
    rules: [
      "Worth it: kickoffs, hard tradeoffs, retros, anything with genuine disagreement in it.",
      "Not before noon — mornings are deep-work blocks and they're not negotiable.",
      "Agenda or it doesn't happen. 25 minutes is the default, not the floor.",
      "Camera on when we're deciding something. Off is fine for status.",
    ],
  },
  {
    index: "03",
    kana: "決定",
    title: "DECISIONS",
    prime: "Strong opinions, loosely held. Show me data or a demo and I flip fast.",
    rules: [
      "Reversible → Slack thread, decide, go. Irreversible or expensive → short doc with one owner.",
      "Disagree and commit. Once it's decided we ship it; relitigate only with new information.",
      "Escalate early and loud. Bad news ages terribly — surprises are worse than problems.",
      "No decision is also a decision, usually the worst one on the menu.",
    ],
  },
  {
    index: "04",
    kana: "反応",
    title: "FEEDBACK",
    prime: "Direct, blameless, no sandwiches.",
    rules: [
      "I critique the work, never the person. Expect it fast, specific, and in the moment.",
      "Give it back the same way — blunt is a feature here. If I'm wrong, say so plainly.",
      "Praise in public, correction in private.",
      "Postmortems are about systems, not culprits. If a human error broke prod, the process let it.",
    ],
  },
  {
    index: "05",
    kana: "査読",
    title: "CODE REVIEW",
    prime: "I review for correctness, blast radius, and whether we can delete it later.",
    rules: [
      "Nits are prefixed nit: — take them or leave them. Blockers are rare and always explained.",
      "Small PRs get reviewed same day. A 1000-line diff waits, and that's on the diff.",
      "I won't block on style a formatter should own. Ship > polish.",
      "Review my code the hard way. Rubber stamps help nobody.",
    ],
  },
  {
    index: "06",
    kana: "時間",
    title: "AVAILABILITY",
    prime: "Prague base, SF overlap — afternoons and evenings CET are the sync window.",
    rules: [
      "Mornings: notifications off, deep work. Slow replies before noon are policy, not mood.",
      "Async almost always reachable. Sync by appointment.",
      "Weekends are off unless production is on fire — and it better actually be on fire.",
      "If I'm heads-down on a deadline I'll say so up front, not go dark.",
    ],
  },
  {
    index: "07",
    kana: "禁忌",
    title: "RED FLAGS",
    prime: "Things that make me disengage fast. Save us both the time.",
    rules: [
      "Meetings that should have been a message. Status theater — looking busy over being useful.",
      "Blame games and information hoarding.",
      "“We've always done it this way.” Process without a reason attached.",
      "Tools for the sake of tools. No new system without a problem it solves.",
    ],
  },
  {
    index: "08",
    kana: "相性",
    title: "GREEN FLAGS",
    prime: "Zero-to-one energy: small team, unclear map, real users waiting.",
    rules: [
      "People who ship first and argue with data after.",
      "Direct communicators — low ego, high ownership.",
      "Problems where AI changes the shape of the product, not just the copy.",
      "Signal > noise. Less polish, more shipped.",
    ],
  },
  {
    index: "09",
    kana: "癖",
    title: "HOW TO READ ME",
    prime: "The quirks, decoded — so you don't misread the defaults.",
    rules: [
      "Terse messages aren't anger — it's me mid-flow. The answer comes now, the tone tax comes later.",
      "If I go quiet, I'm building, not ignoring you. Ping again if it's blocking — that's not rude here.",
      "I think out loud. Half of what I say is hypothesis, not decision — ask which one you just got.",
      "I'm direct in a second language. Read intent, not phrasing.",
    ],
  },
  {
    index: "10",
    kana: "知能",
    title: "AI IN THE LOOP",
    prime: "AI is in my loop everywhere. I don't care if a model wrote it — I care if you can defend it.",
    rules: [
      "Expect agent-drafted work from me: code, docs, copy. Everything that ships under my name gets my review first.",
      "Same deal back: use whatever you want, but own the output. “The AI did it” isn't a defense in review.",
      "If a task is automatable, I'll automate it and move up a level. Humans are for judgment, taste, and the ask.",
      "I'll happily pair on agent workflows — bring me your prompts like you'd bring me your code.",
    ],
  },
  {
    index: "11",
    kana: "弱点",
    title: "WHAT I'M BAD AT",
    prime: "Known failure modes, published so you can route around them.",
    rules: [
      "Heads-down mode means I under-communicate progress. Ask for status — you'll get it instantly and without offense.",
      "I bias hard to shipping. If craft matters more than speed on this one, say so explicitly.",
      "Process without an owner or a reason makes me impatient, sometimes visibly.",
      "Context-switching is expensive for me — batch the small asks when you can.",
    ],
  },
];

export default function HowToWorkWithMePage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-4 pt-12 pb-20 sm:px-6 sm:pt-20">
        <header className="mb-12 border-b-2 border-bone/30 pb-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
            §07 ／ 説明書 ／ HOW TO WORK WITH ME
          </div>
          <h1 className="mt-2 font-display text-5xl font-black uppercase tracking-tight sm:text-7xl">
            HOW TO WORK <span className="text-rust">WITH ME.</span>
          </h1>
          <p className="mt-3 max-w-2xl font-mono text-sm text-bone/65">
            An operating manual: how I communicate, decide, and take
            feedback — and how to change my mind. Five minutes here saves us
            a month of guessing at each other. If you want the rig instead
            of the manual,{" "}
            <Link href="/how-do-i-work" className="text-rust hover:underline">
              read how I work ←
            </Link>
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {blocks.map((b) => (
            <ManualBlock key={b.index} {...b} />
          ))}
        </div>

        <div className="mt-16 border-2 border-rust bg-ink p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-rust">
            TRANSMIT
          </div>
          <h2 className="mt-2 font-display text-2xl font-black uppercase">
            Read the manual, still want to work together?
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

function ManualBlock({
  index,
  kana,
  title,
  prime,
  rules,
}: {
  index: string;
  kana: string;
  title: string;
  prime: string;
  rules: string[];
}) {
  return (
    <section className="flex h-full flex-col border-2 border-bone/40 bg-ash/40 p-5 shadow-brut-sm">
      <div className="mb-3 flex items-center justify-between border-b border-bone/20 pb-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/40">
          §{index} ／ {kana}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-rust/70">
          LIVE
        </span>
      </div>
      <h2 className="font-display text-xl font-black uppercase leading-tight">
        {title}
      </h2>
      <p className="mt-2 font-mono text-xs leading-relaxed text-bone">
        {prime}
      </p>
      <ul className="mt-3 flex-1 space-y-2 font-mono text-xs leading-relaxed text-bone/65">
        {rules.map((rule) => (
          <li key={rule} className="flex items-baseline gap-2">
            <span aria-hidden className="text-rust/70">
              →
            </span>
            <span>{rule}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
