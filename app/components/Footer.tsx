export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t-2 border-bone/80">
      <div
        aria-hidden
        className="overflow-hidden whitespace-nowrap border-b-2 border-bone/80 bg-rust py-2"
      >
        <div className="animate-marquee inline-block font-mono text-xs font-bold uppercase tracking-[0.25em] text-ink">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="mx-6">
              ■ TECHNO · BRUTALISM · 低 LEVEL · ALT · ノイズ · SIGNAL ＞ NOISE ·
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-12 gap-4 px-4 py-10 sm:px-6">
        <div className="col-span-12 sm:col-span-5">
          <div className="font-display text-3xl font-black uppercase break-all">yggdrasill501<span className="text-rust">.dev</span></div>
          <p className="mt-2 max-w-xs font-mono text-xs text-bone/50">
            Personal site. Hand-built, no tracking, no cookies, no nonsense.
          </p>
        </div>

        <div className="col-span-6 sm:col-span-3">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-bone/40">
            CHANNELS
          </div>
          <ul className="space-y-1 font-mono text-xs">
            <li>
              <a
                href="https://github.com/Yggdrasill501"
                className="hover:text-rust"
                target="_blank"
                rel="noopener noreferrer"
              >
                github ↗
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/filip-zitny501/"
                className="hover:text-rust"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin ↗
              </a>
            </li>
            <li>
              <a href="mailto:filipzitny@gmail.com" className="hover:text-rust">
                filipzitny@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-6 sm:col-span-4">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-bone/40">
            META
          </div>
          <ul className="space-y-1 font-mono text-xs text-bone/60">
            <li>BUILT WITH NEXT.JS + TAILWIND</li>
            <li>NO ANALYTICS · NO ADS</li>
            <li>© {year} FILIP ŽITNÝ</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
