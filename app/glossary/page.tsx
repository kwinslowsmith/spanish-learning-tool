'use client'

import { useState } from 'react'

const MOCK_GLOSSARY = [
  { word: 'música', definition: 'art of combining sounds in a pleasing way', articleId: '1' },
  { word: 'tradición', definition: 'customs or beliefs passed down through generations', articleId: '1' },
  { word: 'ritmo', definition: 'pattern of sounds or beats', articleId: '1' },
  { word: 'pan', definition: 'bread', articleId: '2' },
  { word: 'mezcla', definition: 'combination of different things', articleId: '1' },
]

export default function GlossaryPage() {
  const [reviewMode, setReviewMode] = useState<'list' | 'flashcard' | 'contextual'>('list')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredGlossary = MOCK_GLOSSARY.filter(entry =>
    entry.word.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #faf8f3 0%, #f5f1eb 100%)' }}>
      <div className="max-w-4xl mx-auto px-8 py-12 space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold" style={{ color: '#8b3a3a', fontFamily: "'Garamond', 'Georgia', serif" }}>My Glossary</h1>
          <p className="text-lg" style={{ color: '#0d5f5f' }}>{MOCK_GLOSSARY.length} words collected</p>
        </div>

        {/* Review Modes */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { mode: 'list' as const, label: '📋 List', color: '#0d5f5f' },
            { mode: 'flashcard' as const, label: '🎴 Flashcard', color: '#8b3a3a' },
            { mode: 'contextual' as const, label: '📖 Contextual', color: '#d4a574' },
          ].map(({ mode, label, color }) => (
            <button
              key={mode}
              onClick={() => { setReviewMode(mode); setCurrentIndex(0) }}
              className="py-4 px-6 rounded font-medium transition text-white"
              style={{
                background: reviewMode === mode ? color : '#d4c5b9',
                opacity: reviewMode === mode ? 1 : 0.6,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* List View */}
        {reviewMode === 'list' && (
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Search your collection..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 border-2 text-lg"
              style={{ borderColor: '#d4a574', background: 'white', color: '#1c1917' }}
            />
            <div className="space-y-5">
              {filteredGlossary.map((entry, i) => (
                <div
                  key={i}
                  className="p-6 rounded"
                  style={{ background: 'white', borderLeft: `4px solid #d4a574`, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
                >
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#8b3a3a', fontFamily: "'Garamond', 'Georgia', serif" }}>{entry.word}</h3>
                  <p className="text-lg leading-relaxed mb-3" style={{ color: '#1c1917' }}>{entry.definition}</p>
                  <p className="text-xs uppercase tracking-widest" style={{ color: '#0d5f5f' }}>Article {entry.articleId}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Flashcard View */}
        {reviewMode === 'flashcard' && filteredGlossary.length > 0 && (
          <div className="space-y-8">
            <div
              className="p-12 rounded text-white min-h-80 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-xl transition"
              style={{
                background: `linear-gradient(135deg, var(--lib-burgundy) 0%, var(--lib-navy) 100%)`,
                boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
              }}
            >
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-widest opacity-80">{currentIndex + 1} of {filteredGlossary.length}</p>
                <h2 className="serif-headline text-5xl">{filteredGlossary[currentIndex].word}</h2>
                <p className="text-sm opacity-70">Tap to reveal definition</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                className="flex-1 py-4 font-medium text-lg rounded transition"
                style={{ background: 'white', color: 'var(--lib-burgundy)', border: `2px solid var(--lib-burgundy)` }}
              >
                ← Previous
              </button>
              <button
                onClick={() => setCurrentIndex(Math.min(filteredGlossary.length - 1, currentIndex + 1))}
                className="flex-1 py-4 font-medium text-lg rounded text-white transition"
                style={{ background: 'var(--lib-burgundy)' }}
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* Contextual View */}
        {reviewMode === 'contextual' && (
          <div className="space-y-6">
            <p className="text-lg" style={{ color: 'var(--lib-teal)' }}>💡 Words in context from your reading</p>
            <div className="space-y-5">
              {filteredGlossary.slice(0, 3).map((entry, i) => (
                <div
                  key={i}
                  className="p-6 rounded"
                  style={{ background: 'white', borderLeft: `4px solid var(--lib-teal)`, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
                >
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--lib-gold)' }}>Article {entry.articleId}</p>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--lib-dark)' }}>
                    La <strong style={{ color: 'var(--lib-burgundy)' }}>{entry.word}</strong> es importante...
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
