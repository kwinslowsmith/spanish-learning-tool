'use client'

const MOCK_NOTEBOOK = [
  {
    id: '1',
    title: 'Colombian Music Reflection',
    content: 'I loved learning about cumbia and vallenato today. The way the music tells stories is so beautiful.',
    date: '2026-10-19',
    tags: ['music', 'colombia'],
  },
  {
    id: '2',
    title: 'Pan de Muerto Experience',
    content: 'Found this recipe and want to try making it this November. The symbolism behind the bread is really moving.',
    date: '2026-10-18',
    tags: ['food', 'mexico', 'tradition'],
  },
]

export default function NotebookPage() {
  return (
    <div className="library-section min-h-screen" style={{ background: 'linear-gradient(135deg, #faf8f3 0%, #f5f1eb 100%)' }}>
      <div className="max-w-4xl mx-auto px-8 py-12 space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="serif-headline text-4xl" style={{ color: 'var(--lib-burgundy)' }}>My Notebook</h1>
            <p className="text-lg" style={{ color: 'var(--lib-teal)' }}>{MOCK_NOTEBOOK.length} reflections saved</p>
          </div>
          <button
            className="px-6 py-3 text-white font-medium rounded transition"
            style={{ background: 'var(--lib-gold)', color: 'white' }}
          >
            + New Entry
          </button>
        </div>

        {/* Entries */}
        <div className="space-y-6">
          {MOCK_NOTEBOOK.map((entry) => (
            <div
              key={entry.id}
              className="p-8 rounded cursor-pointer hover:shadow-lg transition"
              style={{ background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderLeft: `4px solid var(--lib-gold)` }}
            >
              <h2 className="serif-headline text-2xl mb-3" style={{ color: 'var(--lib-burgundy)' }}>{entry.title}</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--lib-dark)' }}>{entry.content}</p>
              <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--lib-gold)' }}>
                <div className="flex gap-2 flex-wrap">
                  {entry.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded"
                      style={{ background: 'var(--lib-teal)', color: 'white' }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--lib-gold)' }}>
                  {new Date(entry.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
