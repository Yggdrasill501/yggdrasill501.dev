import Link from "next/link";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <div className="border-2 border-bone bg-ash p-8 shadow-brut-rust sm:p-12">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-rust">
            §02 ／ TRANSMIT
          </div>
          <h2 className="mt-2 font-display text-3xl font-black uppercase sm:text-5xl">
            Looking for an engineer who ships the{" "}
            <span className="text-rust">whole loop?</span>
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-sm text-bone/75">
            Hiring, raising, or going zero-to-one and need an engineer who can
            ship the product <em>and</em> the growth surfaces around it? AI,
            agents, PLG, early-stage — those are my favourite problems.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:filipzitny@proton.me">
              <Button variant="rust" size="lg">
                MAIL →
              </Button>
            </a>
            <Link href="/about">
              <Button variant="outline" size="lg">
                READ MORE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
