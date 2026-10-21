import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spanish Learning Tool",
  description: "Learn Spanish through reading, vocabulary, and writing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <nav className="border-b sticky top-0 z-50" style={{ borderColor: '#e8e4dc', background: '#faf8f3' }}>
          <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold" style={{ color: '#0d5f5f', fontFamily: "'Garamond', 'Georgia', serif" }}>
              Spanish Learning
            </h1>
            <div className="flex gap-8 text-sm font-medium">
              <a href="/" className="transition hover:opacity-70" style={{ color: '#1c1917' }}>
                Articles
              </a>
              <a href="/glossary" className="transition hover:opacity-70" style={{ color: '#1c1917' }}>
                Glossary
              </a>
              <a href="/notebook" className="transition hover:opacity-70" style={{ color: '#1c1917' }}>
                Notebook
              </a>
              <a href="/writing" className="transition hover:opacity-70" style={{ color: '#1c1917' }}>
                My Writing
              </a>
            </div>
          </div>
        </nav>
        <main className="flex-1 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
