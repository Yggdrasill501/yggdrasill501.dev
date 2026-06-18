import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6 sm:pt-20 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute right-2 top-8 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-bone/30 vertical-rl sm:block"
      >
        {"// OS: ALT / STATUS: ONLINE"}
      </div>

      <div className="mb-6 flex items-center gap-3">
        <Badge variant="rust">
          <span className="h-1.5 w-1.5 animate-blink bg-ink" /> ONLINE
        </Badge>
        <Badge variant="outline">VER 02.6</Badge>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/40">
          ／ PRAGUE 50.08°N · SF 37.77°N
        </span>
      </div>

      <h1 className="font-display text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-7xl md:text-8xl">
        FILIP
        <br />
        <span className="text-rust">ŽITNÝ</span>
        <span className="ml-3 align-top text-2xl font-normal text-bone/40 sm:text-3xl">／フィリップ</span>
      </h1>

      <div className="mt-8 grid grid-cols-12 gap-4">
        <div className="col-span-12 border-l-2 border-rust pl-4 md:col-span-7">
          <p className="font-mono text-sm leading-relaxed text-bone/85 sm:text-base">
            Product engineer working both sides of the product —{" "}
            <span className="text-rust">AI systems</span> and the{" "}
            <span className="text-rust">growth and GTM</span> around them.
            I ship full-stack in TypeScript + Python and own the path from
            agentic backend to activated user.
          </p>
          <p className="mt-3 font-mono text-sm leading-relaxed text-bone/70">
            Currently building AI operational workflows at{" "}
            <a
              href="https://duvo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust hover:underline"
            >
              Duvo
            </a>
            . Previously open-source lead at{" "}
            <span className="text-bone">Deepnote</span> (YC W19).
          </p>
          <p className="mt-3 font-mono text-xs text-bone/45">
            {"// signal > noise. less polish, more shipped."}
          </p>
        </div>

        <aside className="col-span-12 border-2 border-bone/30 p-4 md:col-span-5">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-bone/40">
            ▓ NOW
          </div>
          <ul className="space-y-1 font-mono text-xs text-bone/75">
            <li>→ shipping AI agents @ duvo</li>
            <li>→ writing TypeScript + Python</li>
            <li>→ living inside Terminal</li>
          </ul>
        </aside>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <Link href="/projects">
          <Button variant="rust" size="lg">
            VIEW WORK →
          </Button>
        </Link>
        <Link href="/about">
          <Button variant="outline" size="lg">
            ABOUT
          </Button>
        </Link>
        <a
          href="https://github.com/Yggdrasill501"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost" size="lg">
            GITHUB ↗
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/filip-zitny501/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost" size="lg">
            LINKEDIN ↗
          </Button>
        </a>
      </div>
    </section>
  );
}
