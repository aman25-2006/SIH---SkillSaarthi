import { useState } from 'react'
import AnimatedPage from '../../components/AnimatedPage'
import { GlassCard } from '../../components/UI'

function MentorPage() {
  const [input, setInput] = useState('Mera communication weak hai, TCS ke liye kya karu?')

  return (
    <AnimatedPage className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">AI Career Mentor</h1>
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <GlassCard>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Student</p>
          <p className="mt-2 text-slate-700">{input}</p>
        </GlassCard>
        <GlassCard className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0B4F9F]">AI Mentor typing...</p>
          <p className="mt-2 text-slate-700">
            Great question. Agle 30 din ke liye daily plan follow karo: 1) 15-minute English speaking practice, 2) SQL basics module complete karo, 3) weekly mock interview do.
          </p>
        </GlassCard>
        <div className="mt-4 flex gap-2">
          <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 rounded-xl border border-slate-300 px-3 py-2" />
          <button className="rounded-xl bg-[#0B4F9F] px-4 py-2 text-sm font-semibold text-white">Send</button>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default MentorPage
