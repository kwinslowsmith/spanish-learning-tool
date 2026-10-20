'use client'

import Link from 'next/link'
import { useState } from 'react'

const ARTICLE_CONTENT = {
  '1': {
    title: 'La Música Colombiana: Ritmo y Tradición',
    content: `
      La música colombiana es una mezcla rica de influencias africanas, indígenas y europeas que se ha desarrollado durante siglos.
      Desde la cumbia hasta el vallenato, cada ritmo cuenta una historia de la cultura y la tradición colombiana.

      El folclore colombiano incluye géneros como la salsa, el reggaeton, y la champeta. La salsa, en particular, es considerada
      la "música de los dioses" y tiene sus raíces en la costa caribeña de Colombia. El vallenato es otro género importante,
      originario de la región de la Guajira, que narra historias de amor, vida cotidiana y política.

      La música colombiana ha ganado reconocimiento internacional con artistas como Shakira, Juan Luis Guerra y recientemente,
      reggaeton y trap latino han tomado por asalto las listas de éxitos mundiales.

      Los instrumentos tradicionales colombianos incluyen la guacharaca, el tres, la cuatría, la marimba y los tambores.
      Estos instrumentos son esenciales para la identidad musical del país y se encuentran en celebraciones y festivales
      en todo Colombia.

      Hoy en día, la música colombiana es un símbolo de identidad nacional y orgullo cultural que se celebra en festivales
      como el Festival de Música de Cartagena y el Festival Folclórico de Ibagué.
    `,
    writingPrompt: '¿Cuál es tu género musical colombiano favorito? Describe por qué te gusta y cómo te hace sentir.',
    comprehensionQuestion: '¿De cuáles tres influencias culturales es mezcla la música colombiana?'
  },
  '2': {
    title: 'Recetas Tradicionales Mexicanas: Pan de Muerto',
    content: `
      El pan de muerto es una de las tradiciones culinarias más importantes de México, especialmente durante la festividad
      de Día de Muertos. Este pan dulce tiene una historia rica que combina tradiciones prehispánicas con influencias españolas.

      El pan de muerto tiene una forma característica que simboliza la vida y la muerte. Tradicionalmente, está decorado con
      tiras de masa que representan los "huesos" del difunto. El pan es suave, dulce y frecuentemente infusionado con
      sabores de anís, naranja y vainilla.

      La preparación del pan de muerto es un ritual familiar que se transmite de generación en generación. Muchas familias
      mexicanas preparan este pan desde principios de octubre para estar listo cuando llegue Día de Muertos el 1 y 2 de noviembre.

      El pan se sirve típicamente con chocolate caliente o café, y a menudo se coloca en los altares de Día de Muertos
      junto con fotos de los seres queridos fallecidos. Se cree que el aroma del pan guía a los espíritus de los difuntos
      de regreso a casa para celebrar con sus familias.

      En diferentes regiones de México, el pan de muerto varía ligeramente. Algunas versiones incluyen ingredientes como
      leche de coco o chocolate, creando sabores únicos que reflejan las tradiciones locales.
    `,
    writingPrompt: '¿Has probado el pan de muerto? Describe tu experiencia o imagina cómo crees que sabe basándote en la lectura.',
    comprehensionQuestion: '¿Cuál es el significado de las tiras de masa en la forma del pan de muerto?'
  },
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = ARTICLE_CONTENT[params.id as keyof typeof ARTICLE_CONTENT]
  const [difficulty, setDifficulty] = useState('intermediate')
  const [selectedWords, setSelectedWords] = useState<Set<string>>(new Set())
  const [showWritingPrompt, setShowWritingPrompt] = useState(false)
  const [writingText, setWritingText] = useState('')

  if (!article) {
    return <div className="text-center py-12">Article not found</div>
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white p-8 rounded-lg border border-stone-200 shadow-sm">
        <Link href="/" className="text-teal-700 font-medium hover:underline mb-4 block">← Back to articles</Link>
        <h1 className="text-4xl font-bold text-stone-900 mb-4">{article.title}</h1>
        <div className="flex gap-4 items-center">
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="px-4 py-2 border border-stone-300 rounded-lg text-sm"
          >
            <option value="basic">Basic</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <span className="text-sm text-stone-600">Difficulty: {difficulty}</span>
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white p-8 rounded-lg border border-stone-200 shadow-sm">
        <div className="prose prose-stone max-w-none">
          <div className="text-lg leading-relaxed text-stone-700 space-y-6">
            {article.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="hover:bg-yellow-50 p-2 rounded cursor-text transition">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>

        {/* Highlight & Glossary Actions */}
        <div className="mt-8 pt-8 border-t border-stone-200 space-y-4">
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition text-sm font-medium">
              💾 Highlight
            </button>
            <button className="px-4 py-2 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition text-sm font-medium">
              📝 Add to Glossary
            </button>
          </div>
        </div>
      </div>

      {/* Comprehension & Writing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Comprehension Question */}
        <div className="bg-white p-8 rounded-lg border border-stone-200 shadow-sm">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Comprehension Check</h2>
          <div className="space-y-4">
            <p className="text-stone-700 font-medium">{article.comprehensionQuestion}</p>
            <textarea
              placeholder="Write your answer here..."
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent h-32"
            />
            <button className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-medium">
              Submit Answer
            </button>
          </div>
        </div>

        {/* Writing Prompt */}
        <div className="bg-white p-8 rounded-lg border border-stone-200 shadow-sm">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Writing Practice</h2>
          <div className="space-y-4">
            <p className="text-stone-700 font-medium">{article.writingPrompt}</p>
            <textarea
              value={writingText}
              onChange={(e) => setWritingText(e.target.value)}
              placeholder="Escribe tu respuesta aquí..."
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent h-32 font-medium"
            />
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition font-medium">
                Save Draft
              </button>
              <button className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-medium">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
