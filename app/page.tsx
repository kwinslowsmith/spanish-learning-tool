'use client'

import Link from 'next/link'

const MOCK_ARTICLES = [
  {
    id: '1',
    title: 'La Música Colombiana: Ritmo y Tradición',
    excerpt: 'Descubre cómo la música colombiana ha evolucionado a través de los siglos, combinando influencias africanas, indígenas y europeas...',
    source: 'El País',
    region: 'Colombia',
    contentType: 'Music',
    difficulty: 'intermediate',
    publishedDate: '2026-10-18',
  },
  {
    id: '2',
    title: 'Recetas Tradicionales Mexicanas: Pan de Muerto',
    excerpt: 'El pan de muerto es una de las tradiciones más icónicas de México. Aquí te mostramos cómo prepararlo en casa...',
    source: 'BBC Mundo',
    region: 'Mexico',
    contentType: 'Food',
    difficulty: 'basic',
    publishedDate: '2026-10-17',
  },
  {
    id: '3',
    title: 'Gabriel García Márquez: El Realismo Mágico',
    excerpt: 'Explora la vida y obra del famoso autor colombiano que revolucionó la literatura latinoamericana...',
    source: 'Infobae',
    region: 'Colombia',
    contentType: 'Literature',
    difficulty: 'advanced',
    publishedDate: '2026-10-16',
  },
]

const REGIONS = ['Colombia', 'Mexico', 'Ecuador', 'Spain', 'Argentina']
const CONTENT_TYPES = ['Music', 'Food', 'Literature', 'History', 'Politics']

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
        <h2 className="text-lg font-semibold text-stone-900 mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Region</label>
            <select className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              <option>All Regions</option>
              {REGIONS.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Content Type</label>
            <select className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              <option>All Types</option>
              {CONTENT_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Articles */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-stone-900">Latest Articles</h2>
        {MOCK_ARTICLES.map(article => (
          <Link key={article.id} href={`/articles/${article.id}`}>
            <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-stone-900">{article.title}</h3>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-4 ${
                  article.difficulty === 'basic' ? 'bg-green-100 text-green-700' :
                  article.difficulty === 'intermediate' ? 'bg-blue-100 text-blue-700' :
                  'bg-purple-100 text-purple-700'
                }`}>
                  {article.difficulty}
                </span>
              </div>
              <p className="text-stone-600 mb-4">{article.excerpt}</p>
              <div className="flex gap-3 text-xs text-stone-500">
                <span>📰 {article.source}</span>
                <span>📍 {article.region}</span>
                <span>🏷️ {article.contentType}</span>
                <span>📅 {new Date(article.publishedDate).toLocaleDateString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
