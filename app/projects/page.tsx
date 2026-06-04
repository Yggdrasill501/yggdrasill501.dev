import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "./data";

export const metadata = { title: "WORK / 仕事 — Filip Žitný" };

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6 sm:pt-20">
        <header className="mb-12 border-b-2 border-bone/30 pb-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
            §02 ／ 仕事 ／ WORK INDEX
          </div>
          <h1 className="mt-2 font-display text-5xl font-black uppercase tracking-tight sm:text-7xl">
            WORK<span className="text-rust">.</span>
          </h1>
          <p className="mt-3 max-w-xl font-mono text-sm text-bone/65">
            Selected things I&apos;ve built, broken, or shipped.
            Sorted by recency. Nothing here is sponsored.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
