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
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">My Writing</h1>
        <p className="text-stone-600">{MOCK_SUBMISSIONS.length} submissions</p>
      </div>

      {/* Filter & Sort */}
      <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search submissions..."
            className="flex-1 px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          <select className="px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
            <option>Most Recent</option>
            <option>Oldest First</option>
            <option>By Article</option>
          </select>
        </div>
      </div>

      {/* Submissions */}
      <div className="space-y-4">
        {MOCK_SUBMISSIONS.map((submission) => (
          <div key={submission.id} className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="mb-4">
              <h3 className="text-sm text-stone-500 font-medium">Article</h3>
              <h2 className="text-xl font-semibold text-stone-900">{submission.articleTitle}</h2>
            </div>

            <div className="mb-4 p-4 bg-stone-50 rounded-lg border border-stone-200">
              <p className="text-sm text-stone-600 font-medium mb-2">Prompt:</p>
              <p className="text-stone-700">{submission.prompt}</p>
            </div>

            <div className="mb-4 p-4 bg-teal-50 rounded-lg border border-teal-200">
              <p className="text-sm text-teal-700 font-medium mb-2">Your Response:</p>
              <p className="text-stone-700">{submission.content}</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-200">
              <p className="text-xs text-stone-500">{new Date(submission.submittedAt).toLocaleDateString()}</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm border border-stone-300 rounded-lg hover:bg-stone-50 transition">
                  ✏️ Edit
                </button>
                <button className="px-3 py-1 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">
                  👀 View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
