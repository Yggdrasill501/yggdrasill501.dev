import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { profile, experience, education, skills } from "./data";

export const metadata = { title: "CV / 履歴 — Filip Žitný" };

export default function CvPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-4 pt-12 pb-20 sm:px-6 sm:pt-20">
        <header className="mb-10 border-b-2 border-bone/30 pb-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
            §05 ／ 履歴 ／ CURRICULUM VITAE
          </div>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">
                {profile.name.split(" ")[0]}
                <span className="text-rust">.</span>
                <br />
                {profile.name.split(" ").slice(1).join(" ")}
              </h1>
              <p className="mt-2 font-mono text-sm uppercase tracking-[0.18em] text-bone/70">
                {profile.title}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={profile.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Button variant="rust" size="lg">
                  DOWNLOAD PDF ↓
                </Button>
              </a>
              <a href={`mailto:${profile.email}`}>
                <Button variant="outline" size="lg">
                  EMAIL →
                </Button>
              </a>
            </div>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-xs sm:grid-cols-4">
            {[
              { k: "LOCALE", v: profile.location },
              { k: "MAIL", v: profile.email, href: `mailto:${profile.email}` },
              { k: "PHONE", v: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
              { k: "GIT", v: profile.github, href: `https://${profile.github}` },
              { k: "LINKEDIN", v: profile.linkedin, href: `https://${profile.linkedin}` },
            ].map((item) => (
              <div key={item.k} className="flex flex-col">
                <dt className="text-[10px] uppercase tracking-[0.25em] text-bone/40">
                  {item.k}
                </dt>
                <dd className="truncate">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-rust"
                    >
                      {item.v}
                    </a>
                  ) : (
                    item.v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <section className="mb-14">
          <SectionTitle index="01" kana="経験">
            EXPERIENCE
          </SectionTitle>
          <div className="space-y-10">
            {experience.map((role, i) => (
              <article
                key={`${role.company}-${i}`}
                className="grid grid-cols-12 gap-x-4 gap-y-3"
              >
                <div className="col-span-12 sm:col-span-3">
                  <Badge variant={i === 0 ? "rust" : "outline"}>
                    {i === 0 ? "NOW" : `[${String(i + 1).padStart(2, "0")}]`}
                  </Badge>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-bone/55">
                    {role.dates}
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-9">
                  <h3 className="font-display text-xl font-black uppercase leading-tight sm:text-2xl">
                    {role.title}
                    <span className="text-bone/40"> ／ </span>
                    {role.url ? (
                      <a
                        href={role.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rust hover:underline"
                      >
                        {role.company}
                      </a>
                    ) : (
                      <span className="text-rust">{role.company}</span>
                    )}
                  </h3>
                  {role.sub && (
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-bone/45">
                      {role.sub}
                    </p>
                  )}
                  <ul className="mt-3 space-y-2 border-l-2 border-bone/30 pl-4 font-mono text-sm leading-relaxed text-bone/80">
                    {role.bullets.map((b, j) => (
                      <li key={j} className="relative">
                        <span className="absolute -left-[1.05rem] top-2 inline-block h-1.5 w-1.5 bg-rust" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <SectionTitle index="02" kana="学歴">
            EDUCATION
          </SectionTitle>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {education.map((s) => (
              <div key={s.name} className="border-2 border-bone p-5 shadow-brut-sm">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/45">
                  {s.dates}
                </div>
                <div className="mt-1 font-display text-lg font-black uppercase leading-tight">
                  {s.name}
                </div>
                <div className="mt-1 font-mono text-xs text-bone/70">
                  {s.program}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle index="03" kana="技術">
            TECHNICAL SKILLS
          </SectionTitle>
          <div className="border-2 border-bone bg-ash p-6 shadow-brut">
            <dl className="grid grid-cols-1 gap-y-3 font-mono text-sm md:grid-cols-[10rem_1fr] md:gap-x-6">
              {skills.map((s) => (
                <div key={s.k} className="contents">
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-rust">
                    {s.k}
                  </dt>
                  <dd className="text-bone/85">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <p className="mt-12 border-t-2 border-bone/20 pt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-bone/35">
          {"// end of transmission ／ last sync: "}
          {new Date().toISOString().slice(0, 10)}
        </p>
      </main>
      <Footer />
    </>
  );
}

function SectionTitle({
  index,
  kana,
  children,
}: {
  index: string;
  kana: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-end justify-between border-b-2 border-bone/30 pb-3">
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
          §{index} ／ {kana}
        </div>
        <h2 className="font-display text-3xl font-black uppercase">{children}</h2>
      </div>
    </div>
  );
}
