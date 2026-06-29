import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/about", label: "ABOUT", kana: "私" },
  { href: "/cv", label: "EXPERIENCE", kana: "経験" },
  { href: "/sidequests", label: "SIDEQUESTS", kana: "寄り道" },
  { href: "/blog", label: "LOG", kana: "記録" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b-2 border-bone/80 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="border-2 border-bone bg-rust px-2 py-0.5 font-display text-sm font-black tracking-tight text-ink">
            FZ
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-bone/60 sm:inline">
            yggdrasill501.dev
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <ul className="flex items-center gap-1 sm:gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group relative flex flex-col items-center px-2 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-bone/80 hover:text-rust"
                >
                  <span>{l.label}</span>
                  <span className="text-[9px] text-bone/30 group-hover:text-rust/60">
                    {l.kana}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
