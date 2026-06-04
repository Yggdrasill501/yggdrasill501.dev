import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

export const metadata = { title: "LOG / 記録 — Filip Žitný" };

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6 sm:pt-20">
        <header className="mb-12 border-b-2 border-bone/30 pb-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
            §04 ／ 記録 ／ LOG
          </div>
          <h1 className="mt-2 font-display text-5xl font-black uppercase tracking-tight sm:text-7xl">
            LOG<span className="text-rust">.</span>
          </h1>
          <p className="mt-3 max-w-xl font-mono text-sm text-bone/65">
            Notes, half-formed ideas, and longer-form writing. Coming back online soon.
          </p>
        </header>

        <div className="relative border-2 border-bone bg-ash p-10 text-center shadow-brut sm:p-16">
          <div className="absolute inset-0 scanline opacity-40 pointer-events-none" />
          <div className="relative">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 border-2 border-rust bg-rust/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-rust">
              <span className="h-1.5 w-1.5 animate-blink bg-rust" /> NO SIGNAL
            </div>
            <h2 className="font-display text-4xl font-black uppercase sm:text-6xl">
              SOON<span className="text-rust">.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md font-mono text-sm text-bone/65">
              Posts are being rewritten. New entries land here when they&apos;re ready,
              not before.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link href="/projects">
                <Button variant="outline">SEE WORK</Button>
              </Link>
              <Link href="/">
                <Button variant="ghost">↩ HOME</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
