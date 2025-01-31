import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from './components/NavBar';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "yggdrasill501",
  description: "Not-organic public blog by yggdrasill501",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div>
          <NavBar />
          <button onClick={() => window.location.href='/blog'}>Go to Blog</button>
          {children}
        </div>
      </body>
    </html>
  );
}
