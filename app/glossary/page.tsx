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
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
        <h1 className="text-3xl font-bold text-stone-900 mb-4">My Glossary</h1>
        <p className="text-stone-600">{MOCK_GLOSSARY.length} words learned</p>
      </div>

      {/* Review Modes */}
      <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
        <h2 className="text-lg font-semibold text-stone-900 mb-4">Review Mode</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => { setReviewMode('list'); setCurrentIndex(0) }}
            className={`p-4 rounded-lg border-2 transition font-medium ${
              reviewMode === 'list'
                ? 'border-teal-500 bg-teal-50 text-teal-700'
                : 'border-stone-200 hover:border-stone-300'
            }`}
          >
            📋 List
          </button>
          <button
            onClick={() => { setReviewMode('flashcard'); setCurrentIndex(0) }}
            className={`p-4 rounded-lg border-2 transition font-medium ${
              reviewMode === 'flashcard'
                ? 'border-teal-500 bg-teal-50 text-teal-700'
                : 'border-stone-200 hover:border-stone-300'
            }`}
          >
            🎴 Flashcard
          </button>
          <button
            onClick={() => { setReviewMode('contextual'); setCurrentIndex(0) }}
            className={`p-4 rounded-lg border-2 transition font-medium ${
              reviewMode === 'contextual'
                ? 'border-teal-500 bg-teal-50 text-teal-700'
                : 'border-stone-200 hover:border-stone-300'
            }`}
          >
            📖 Contextual
          </button>
        </div>
      </div>

      {/* List View */}
      {reviewMode === 'list' && (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Search words..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          <div className="space-y-3">
            {filteredGlossary.map((entry, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-stone-900">{entry.word}</h3>
                <p className="text-stone-600 mt-2">{entry.definition}</p>
                <p className="text-xs text-stone-500 mt-2">From Article {entry.articleId}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Flashcard View */}
      {reviewMode === 'flashcard' && filteredGlossary.length > 0 && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-lg shadow-lg text-white min-h-64 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-xl transition">
            <div className="space-y-4">
              <p className="text-sm opacity-90">{currentIndex + 1} of {filteredGlossary.length}</p>
              <h2 className="text-4xl font-bold">{filteredGlossary[currentIndex].word}</h2>
              <p className="text-sm opacity-75">Click to reveal definition</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              className="flex-1 px-4 py-3 border border-stone-300 rounded-lg hover:bg-stone-50 transition font-medium"
            >
              ← Previous
            </button>
            <button
              onClick={() => setCurrentIndex(Math.min(filteredGlossary.length - 1, currentIndex + 1))}
              className="flex-1 px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-medium"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Contextual View */}
      {reviewMode === 'contextual' && (
        <div className="bg-white p-8 rounded-lg border border-stone-200 shadow-sm space-y-6">
          <p className="text-stone-600">💡 Contextual view shows words in their original sentences from articles.</p>
          <div className="space-y-4">
            {filteredGlossary.slice(0, 3).map((entry, i) => (
              <div key={i} className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                <p className="text-sm text-stone-600 mb-2">From Article {entry.articleId}</p>
                <p className="text-stone-700">La <strong className="text-teal-700">{entry.word}</strong> es importante...</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
