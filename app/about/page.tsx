import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export const metadata = { title: "ABOUT / 私 — Filip Žitný" };

const facts: Array<{ k: string; v: string }> = [
  { k: "ROLE", v: "Software engineer" },
  { k: "LOCALE", v: "Prague / SF" },
  { k: "INTO", v: "low-level, compilers, quantum" },
  { k: "TOOLS", v: "Rust · Go · C · Python · TS" },
  { k: "AVOID", v: "frameworks of the month" },
  { k: "MUSIC", v: "techno · ambient · noise" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6 sm:pt-20">
        <header className="mb-12 border-b-2 border-bone/30 pb-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
            §03 ／ 私 ／ ABOUT
          </div>
          <h1 className="mt-2 font-display text-5xl font-black uppercase tracking-tight sm:text-7xl">
            WHO<span className="text-rust">.</span>
          </h1>
        </header>

        <div className="grid grid-cols-12 gap-8">
          <article className="col-span-12 space-y-5 font-mono text-sm leading-relaxed text-bone/85 md:col-span-7">
            <p>
              I&apos;m <span className="text-rust">Filip</span> — a software engineer
              from Slovakia who got into computers the wrong way (assembly before
              JavaScript) and never quite recovered.
            </p>
            <p>
              Day to day I write the kind of code most people scroll past: low-level
              systems, infra glue, weird tools. I&apos;m drawn to compilers, type
              systems, and the parts of the stack where things still feel honest.
            </p>
            <p>
              On the side I read about <span className="text-rust">quantum computing</span>{" "}
              — not the marketing kind, the linear-algebra kind. I&apos;ve given
              talks (ReactGirls on low-level languages, 2024) and I keep a small
              blog of notes on this site.
            </p>
            <p>
              I believe in <span className="text-rust">signal &gt; noise</span>.
              Less polish, more honesty. No frameworks because they&apos;re
              trending. No tools without a reason.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/cv">
                <Button variant="rust" size="lg">
                  READ CV →
                </Button>
              </Link>
              <a href="/cv_filip_zitny.pdf" target="_blank" rel="noopener noreferrer" download>
                <Button variant="outline" size="lg">
                  PDF ↓
                </Button>
              </a>
              <a href="mailto:filipzitny@proton.me">
                <Button variant="ghost" size="lg">
                  EMAIL →
                </Button>
              </a>
            </div>
          </article>

          <aside className="col-span-12 md:col-span-5">
            <div className="border-2 border-bone p-6 shadow-brut-sm">
              <div className="mb-4 flex items-center justify-between border-b-2 border-bone/30 pb-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50">
                  PROFILE.SYS
                </span>
                <Badge variant="rust">v01</Badge>
              </div>
              <dl className="space-y-2 font-mono text-xs">
                {facts.map((f) => (
                  <div key={f.k} className="flex justify-between gap-4">
                    <dt className="text-bone/40">{f.k}</dt>
                    <dd className="text-right text-bone">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 border-2 border-rust bg-ink p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-rust">
                LINKS
              </div>
              <ul className="mt-3 space-y-1 font-mono text-xs">
                <li>
                  →{" "}
                  <a
                    href="https://github.com/Yggdrasill501"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-rust"
                  >
                    github.com/Yggdrasill501
                  </a>
                </li>
                <li>
                  →{" "}
                  <a
                    href="https://www.linkedin.com/in/filip-zitny501/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-rust"
                  >
                    linkedin.com/in/filip-zitny501
                  </a>
                </li>
                <li>
                  →{" "}
                  <a
                    href="mailto:filipzitny@gmail.com"
                    className="hover:text-rust"
                  >
                    filipzitny@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
