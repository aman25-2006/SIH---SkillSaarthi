import { useState } from 'react'
import AnimatedPage from '../../components/AnimatedPage'

const questions = [
  'What is a primary key in SQL?',
  'Choose the correct percentage shortcut for aptitude.',
  'How confident are you in speaking English during interviews?',
]

function AssessmentPage() {
  const [index, setIndex] = useState(0)
  const progress = Math.round(((index + 1) / questions.length) * 100)

  return (
    <AnimatedPage className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Skill Assessment Quiz</h1>
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center justify-between text-sm">
          <span className="font-semibold text-slate-700">Progress: {progress}%</span>
          <span className="text-slate-500">Timer: 08:42</span>
        </div>
        <div className="h-2 rounded-full bg-slate-200">
          <div style={{ width: `${progress}%` }} className="h-2 rounded-full bg-[#0B4F9F] transition-all" />
        </div>
        <h2 className="mt-6 text-lg font-semibold text-slate-900">{questions[index]}</h2>
        <div className="mt-4 space-y-2 text-sm">
          {['Option A', 'Option B', 'Option C', 'Option D'].map((o) => (
            <button key={o} className="w-full rounded-xl border border-slate-300 px-4 py-2 text-left hover:border-[#0B4F9F] hover:bg-[#0B4F9F]/5">
              {o}
            </button>
          ))}
        </div>
        <button
          className="mt-4 rounded-xl bg-[#0B4F9F] px-4 py-2 text-sm font-semibold text-white"
          onClick={() => setIndex((v) => Math.min(v + 1, questions.length - 1))}
        >
          Next Question
        </button>
      </div>
    </AnimatedPage>
  )
}

export default AssessmentPage
