'use client'

const MOCK_SUBMISSIONS = [
  {
    id: '1',
    articleTitle: 'La Música Colombiana: Ritmo y Tradición',
    prompt: '¿Cuál es tu género musical colombiano favorito?',
    content: 'Mi género favorito es la cumbia porque tiene un ritmo muy bonito y tradicional. Me hace sentir como si estuviera en la playa con amigos.',
    submittedAt: '2026-10-19',
  },
  {
    id: '2',
    articleTitle: 'Recetas Tradicionales Mexicanas: Pan de Muerto',
    prompt: '¿Has probado el pan de muerto?',
    content: 'No he probado el pan de muerto, pero quiero hacerlo este año. Parece muy delicioso y la tradición detrás es muy interesante.',
    submittedAt: '2026-10-18',
  },
]

export default function WritingPage() {
  return (
    <div className="library-section min-h-screen" style={{ background: 'linear-gradient(135deg, #faf8f3 0%, #f5f1eb 100%)' }}>
      <div className="max-w-4xl mx-auto px-8 py-12 space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="serif-headline text-4xl" style={{ color: 'var(--lib-burgundy)' }}>My Writing</h1>
          <p className="text-lg" style={{ color: 'var(--lib-teal)' }}>{MOCK_SUBMISSIONS.length} responses saved</p>
        </div>

        {/* Filter & Sort */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search your writing..."
            className="flex-1 px-5 py-3 border-2 text-lg rounded"
            style={{ borderColor: 'var(--lib-gold)', background: 'white', color: 'var(--lib-dark)' }}
          />
          <select
            className="px-5 py-3 border-2 text-lg rounded"
            style={{ borderColor: 'var(--lib-gold)', background: 'white', color: 'var(--lib-dark)' }}
          >
            <option>Most Recent</option>
            <option>Oldest First</option>
            <option>By Article</option>
          </select>
        </div>

        {/* Submissions */}
        <div className="space-y-6">
          {MOCK_SUBMISSIONS.map((submission) => (
            <div
              key={submission.id}
              className="p-8 rounded"
              style={{ background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderLeft: `4px solid var(--lib-navy)` }}
            >
              <div className="mb-6 pb-6 border-b" style={{ borderColor: 'var(--lib-gold)' }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--lib-gold)' }}>Article</p>
                <h2 className="serif-headline text-2xl" style={{ color: 'var(--lib-burgundy)' }}>{submission.articleTitle}</h2>
              </div>

              <div className="mb-6 p-6 rounded" style={{ background: 'var(--lib-cream)', borderLeft: `4px solid var(--lib-teal)` }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--lib-teal)' }}>Prompt</p>
                <p className="text-lg" style={{ color: 'var(--lib-dark)' }}>{submission.prompt}</p>
              </div>

              <div className="mb-6 p-6 rounded" style={{ background: '#f0ece5', borderLeft: `4px solid var(--lib-burgundy)` }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--lib-burgundy)' }}>Your Response</p>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--lib-dark)' }}>{submission.content}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--lib-gold)' }}>
                <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--lib-gold)' }}>
                  {new Date(submission.submittedAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <div className="flex gap-3">
                  <button
                    className="px-4 py-2 text-sm font-medium rounded transition"
                    style={{ background: 'white', color: 'var(--lib-burgundy)', border: `1px solid var(--lib-burgundy)` }}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium rounded text-white transition"
                    style={{ background: 'var(--lib-burgundy)' }}
                  >
                    👀 View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
