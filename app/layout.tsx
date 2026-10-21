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
        <nav className="border-b" style={{ borderColor: 'var(--news-border)', background: 'var(--news-bg)' }} className="sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
            <h1 className="serif-headline text-3xl" style={{ color: 'var(--news-teal)' }}>
              Spanish Learning
            </h1>
            <div className="flex gap-8 text-sm font-medium">
              <a href="/" className="transition" style={{ color: 'var(--news-text)' }} onMouseEnter={(e) => e.target.style.color = 'var(--news-teal)'} onMouseLeave={(e) => e.target.style.color = 'var(--news-text)'}>
                Articles
              </a>
              <a href="/glossary" className="transition" style={{ color: 'var(--news-text)' }} onMouseEnter={(e) => e.target.style.color = 'var(--lib-burgundy)'} onMouseLeave={(e) => e.target.style.color = 'var(--news-text)'}>
                Glossary
              </a>
              <a href="/notebook" className="transition" style={{ color: 'var(--news-text)' }} onMouseEnter={(e) => e.target.style.color = 'var(--lib-burgundy)'} onMouseLeave={(e) => e.target.style.color = 'var(--news-text)'}>
                Notebook
              </a>
              <a href="/writing" className="transition" style={{ color: 'var(--news-text)' }} onMouseEnter={(e) => e.target.style.color = 'var(--lib-burgundy)'} onMouseLeave={(e) => e.target.style.color = 'var(--news-text)'}>
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
