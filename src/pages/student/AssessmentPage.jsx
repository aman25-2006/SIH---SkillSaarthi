import { useState } from 'react'
import AnimatedPage from '../../components/AnimatedPage'
import { GlassCard } from '../../components/UI'

const questions = [
  'What is a primary key in SQL?',
  'Choose the correct percentage shortcut for aptitude.',
  'How confident are you in speaking English during interviews?',
]

function AssessmentPage() {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const progress = Math.round(((index + 1) / questions.length) * 100)

  return (
    <AnimatedPage className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Skill verification sprint</h1>
      <GlassCard className="space-y-4">
        <div className="mb-4 flex items-center justify-between text-sm">
          <span className="font-semibold text-slate-700 dark:text-slate-300">Progress: {progress}%</span>
          <span className="text-slate-500 dark:text-slate-400">Score: {score}</span>
        </div>
        <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
          <div style={{ width: `${progress}%` }} className="h-2 rounded-full bg-[#0B4F9F] transition-all dark:bg-[#FF9933]" />
        </div>
        <h2 className="mt-6 text-lg font-semibold text-slate-900 dark:text-slate-50">{questions[index]}</h2>
        <div className="mt-4 space-y-2 text-sm">
          {['Option A', 'Option B', 'Option C', 'Option D'].map((o) => (
            <button key={o} type="button" onClick={() => setScore((value) => Math.min(100, value + 12))} className="w-full rounded-xl border border-slate-300 px-4 py-2 text-left transition hover:border-[#0B4F9F] hover:bg-[#0B4F9F]/5 dark:border-slate-700 dark:text-slate-200">
              {o}
            </button>
          ))}
        </div>
        <button type="button" className="mt-4 rounded-xl bg-[#0B4F9F] px-4 py-2 text-sm font-semibold text-white" onClick={() => setIndex((v) => Math.min(v + 1, questions.length - 1))}>
          Next Question
        </button>
      </GlassCard>
    </AnimatedPage>
  )
}

export default AssessmentPage
