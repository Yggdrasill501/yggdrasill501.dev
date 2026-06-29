import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Badge } from "../components/ui/badge";
import { sidequests, type SideQuest, type SideQuestStatus } from "./data";

export const metadata = { title: "SIDEQUESTS / 寄り道 — Filip Žitný" };

const sections: Array<{
  status: SideQuestStatus;
  label: string;
  kana: string;
  caption: string;
}> = [
  {
    status: "active",
    label: "ACTIVE",
    kana: "進行中",
    caption: "Currently running in the background.",
  },
  {
    status: "completed",
    label: "COMPLETED",
    kana: "完了",
    caption: "Finished, shipped, or survived.",
  },
  {
    status: "abandoned",
    label: "ABANDONED",
    kana: "放棄",
    caption: "Dropped on purpose. Kept here for the lore.",
  },
];

const statusVariant: Record<SideQuestStatus, "rust" | "default" | "outline"> = {
  active: "rust",
  completed: "default",
  abandoned: "outline",
};

export default function SidequestsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6 sm:pt-20">
        <header className="mb-12 border-b-2 border-bone/30 pb-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
            §04 ／ 寄り道 ／ SIDEQUESTS &amp; STORIES
          </div>
          <h1 className="mt-2 font-display text-5xl font-black uppercase tracking-tight sm:text-7xl">
            SIDEQUESTS<span className="text-rust">.</span>
          </h1>
          <p className="mt-3 max-w-xl font-mono text-sm text-bone/65">
            Objectives that aren&apos;t the main quest. Things I&apos;m chasing,
            things I shipped sideways, and things I dropped on purpose.
            Sorted by status, not by importance.
          </p>
        </header>

        <div className="space-y-16">
          {sections.map((section) => {
            const items = sidequests.filter((q) => q.status === section.status);
            if (items.length === 0) return null;
            return (
              <section key={section.status}>
                <div className="mb-6 flex items-end justify-between border-b border-bone/20 pb-2">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-rust">
                      {section.label} ／ {section.kana}
                    </div>
                    <p className="mt-1 font-mono text-xs text-bone/50">
                      {section.caption}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/40">
                    [{String(items.length).padStart(2, "0")}]
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {items.map((q, i) => (
                    <QuestCard key={q.id} quest={q} index={i} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

function QuestCard({ quest, index }: { quest: SideQuest; index: number }) {
  return (
    <article className="flex h-full flex-col border-2 border-bone bg-ash p-5 shadow-brut-sm transition-[transform,box-shadow] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-brut">
      <header className="mb-3 flex items-start justify-between gap-3">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/40">
            [SQ-{String(index + 1).padStart(2, "0")}] · {quest.era}
          </span>
          <h3 className="mt-1 font-display text-xl font-black uppercase leading-tight">
            {quest.title}
          </h3>
          {quest.kana && (
            <span className="mt-0.5 font-mono text-xs text-bone/40">
              {quest.kana}
            </span>
          )}
        </div>
        <Badge variant={statusVariant[quest.status]}>{quest.status}</Badge>
      </header>

      <p className="flex-1 font-mono text-sm leading-relaxed text-bone/80">
        {quest.description}
      </p>

      {quest.tags && quest.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {quest.tags.map((t) => (
            <span
              key={t}
              className="border border-bone/40 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-bone/70"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {quest.href && (
        <div className="mt-4 border-t border-bone/20 pt-3">
          <a
            href={quest.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.2em] text-rust hover:underline"
          >
            evidence ↗
          </a>
        </div>
      )}
    </article>
  );
}
