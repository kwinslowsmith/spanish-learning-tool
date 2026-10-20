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
      <body className="min-h-full flex flex-col bg-stone-50">
        <nav className="border-b border-stone-200 bg-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-teal-700">📚 Spanish Learning</h1>
            <div className="flex gap-6 text-sm font-medium text-stone-600">
              <a href="/" className="hover:text-teal-700 transition">Articles</a>
              <a href="/glossary" className="hover:text-teal-700 transition">Glossary</a>
              <a href="/notebook" className="hover:text-teal-700 transition">Notebook</a>
              <a href="/writing" className="hover:text-teal-700 transition">My Writing</a>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto w-full px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
