import Link from "next/link";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import { Button } from "./components/ui/button";
import { featuredProjects } from "./projects/data";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 flex items-end justify-between border-b-2 border-bone/30 pb-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
              §02 ／ 仕事
            </div>
            <h2 className="font-display text-3xl font-black uppercase">Selected work</h2>
          </div>
          <Link href="/projects" className="font-mono text-xs uppercase tracking-[0.2em] text-rust hover:underline">
            all →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.slice(0, 4).map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6">
        <div className="border-2 border-bone bg-ash p-8 shadow-brut-rust sm:p-12">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-rust">
            §03 ／ TRANSMIT
          </div>
          <h2 className="mt-2 font-display text-3xl font-black uppercase sm:text-5xl">
            Want to build something <span className="text-rust">strange?</span>
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-sm text-bone/75">
            I&apos;m open to interesting engineering work — especially anything involving
            compilers, low-level systems, or quantum stuff. Send a signal.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:filipzitny@gmail.com">
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
