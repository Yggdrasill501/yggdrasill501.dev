import { Card, CardContent, CardFooter, CardHeader, CardMeta, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export interface Project {
  id: string;
  title: string;
  kana?: string;
  year: string;
  status: "live" | "wip" | "archive";
  description: string;
  stack: string[];
  href?: string;
  repo?: string;
  accent?: boolean;
}

const statusVariant: Record<Project["status"], "rust" | "default" | "outline"> = {
  live: "rust",
  wip: "default",
  archive: "outline",
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Card accent={project.accent}>
      <CardHeader>
        <div className="flex flex-col">
          <CardMeta>
            [{String(index + 1).padStart(2, "0")}] · {project.year}
          </CardMeta>
          <CardTitle>{project.title}</CardTitle>
          {project.kana && (
            <span className="font-mono text-xs text-bone/40">{project.kana}</span>
          )}
        </div>
        <Badge variant={statusVariant[project.status]}>{project.status}</Badge>
      </CardHeader>
      <CardContent>
        <p>{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="border border-bone/40 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-bone/70"
            >
              {t}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.2em] text-rust hover:underline"
          >
            visit ↗
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.2em] text-bone/80 hover:text-rust"
          >
            source ↗
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
