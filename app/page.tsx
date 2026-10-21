// Spanish Learning Tool - Newspaper Section
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
    <div className="min-h-screen" style={{ background: '#faf8f3' }}>
      <div className="max-w-4xl mx-auto px-8 py-12 space-y-12">
        {/* Filters */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-widest" style={{ color: '#0d5f5f' }}>Filter by region</label>
            <select className="w-full px-4 py-3 border" style={{ borderColor: '#e8e4dc', background: 'white', color: '#1c1917' }}>
              <option>All Regions</option>
              {REGIONS.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-widest" style={{ color: '#0d5f5f' }}>Filter by type</label>
            <select className="w-full px-4 py-3 border" style={{ borderColor: '#e8e4dc', background: 'white', color: '#1c1917' }}>
              <option>All Types</option>
              {CONTENT_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Articles */}
        <div className="space-y-10">
          {MOCK_ARTICLES.map((article, idx) => (
            <Link key={article.id} href={`/articles/${article.id}`}>
              <article className="space-y-3 pb-8 border-b" style={{ borderColor: '#e8e4dc' }}>
                <div className="space-y-2">
                  <div className="flex gap-3 text-xs uppercase tracking-wider" style={{ color: '#0d5f5f' }}>
                    <span>{article.source}</span>
                    <span>•</span>
                    <span>{article.region}</span>
                  </div>
                  <h2 className="serif-headline text-4xl leading-tight" style={{ color: '#1c1917', fontFamily: "'Garamond', 'Georgia', serif" }}>
                    {article.title}
                  </h2>
                </div>
                <p className="text-lg leading-relaxed" style={{ color: '#5a5550' }}>
                  {article.excerpt}
                </p>
                <div className="flex gap-4 items-center pt-2">
                  <span className="text-xs" style={{ color: '#0d5f5f' }}>
                    {new Date(article.publishedDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span className="text-xs font-medium px-3 py-1" style={{ background: '#0d5f5f', color: 'white', letterSpacing: '0.5px' }}>
                    {article.difficulty.toUpperCase()}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
