import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FILIP ŽITNÝ // フィリップ",
  description:
    "Software engineer. Low-level languages, quantum computing, alt-tech. Personal site of Filip Žitný.",
  icons: { icon: "/favicon.png" },
};

export const viewport: Viewport = { themeColor: "#0a0a0a" };

const noFlashScript =`(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className="min-h-screen bg-ink text-bone antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border-2 focus:border-bone focus:bg-rust focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-[0.2em] focus:text-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
