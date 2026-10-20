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
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">My Notebook</h1>
        <p className="text-stone-600">{MOCK_NOTEBOOK.length} entries</p>
        <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-medium">
          + New Entry
        </button>
      </div>

      {/* Entries */}
      <div className="space-y-4">
        {MOCK_NOTEBOOK.map((entry) => (
          <div key={entry.id} className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm hover:shadow-md transition cursor-pointer">
            <h2 className="text-xl font-semibold text-stone-900 mb-2">{entry.title}</h2>
            <p className="text-stone-600 mb-4">{entry.content}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {entry.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-stone-500">{new Date(entry.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
