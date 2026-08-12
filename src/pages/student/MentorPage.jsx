import { useState } from 'react'
import AnimatedPage from '../../components/AnimatedPage'
import { GlassCard, SectionTitle } from '../../components/UI'
import { useSaarthi } from '../../context/SaarthiContext'

function MentorPage() {
  const { profile, analysis, askSaarthi } = useSaarthi()
  const [input, setInput] = useState('What should I learn next?')
  const [messages, setMessages] = useState([
    { role: 'assistant', title: 'Saarthi AI', message: `Hi ${profile.name}, I understand your goal is ${analysis.goal}. Ask me what to learn next, whether you are ready, or which project to build.` },
  ])

  const sendPrompt = (prompt) => {
    const question = prompt || input
    const reply = askSaarthi(question)
    setMessages((current) => [...current, { role: 'user', title: 'You', message: question }, { role: 'assistant', title: reply.title, message: reply.message, chips: reply.chips }])
    setInput('')
  }

  return (
    <AnimatedPage className="space-y-6">
      <SectionTitle eyebrow="Saarthi AI" title="Ask a profile-aware assistant" subtitle="This is a mock assistant, but its answers change based on the learner profile and selected goal." />
      <div className="grid gap-4 lg:grid-cols-[1fr_0.35fr]">
        <GlassCard className="space-y-4">
          <div className="space-y-3">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`rounded-2xl p-4 ${message.role === 'assistant' ? 'bg-slate-50 dark:bg-slate-800/70' : 'bg-[#0B4F9F]/5 dark:bg-[#0B4F9F]/15'}`}>
                <p className={`text-xs font-semibold uppercase tracking-[0.15em] ${message.role === 'assistant' ? 'text-[#0B4F9F] dark:text-[#7cc2ff]' : 'text-slate-500 dark:text-slate-400'}`}>{message.title}</p>
                <p className="mt-2 text-slate-700 dark:text-slate-200">{message.message}</p>
                {message.chips ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {message.chips.map((chip) => (
                      <span key={chip} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm dark:bg-slate-900 dark:text-slate-300">{chip}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {['What should I learn next?', 'Am I ready for an apprenticeship?', 'Suggest a project for me', 'How can I improve my resume?'].map((prompt) => (
              <button key={prompt} type="button" onClick={() => sendPrompt(prompt)} className="rounded-full border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-[#0B4F9F] hover:text-[#0B4F9F] dark:border-slate-700 dark:text-slate-300">
                {prompt}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950" placeholder="Ask Saarthi anything about your career path" />
            <button type="button" onClick={() => sendPrompt()} className="rounded-xl bg-[#0B4F9F] px-4 py-2 text-sm font-semibold text-white">Send</button>
          </div>
        </GlassCard>

        <GlassCard className="space-y-3">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">AI memory</p>
          <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-800/70 dark:text-slate-300">
            <p><span className="font-semibold text-slate-900 dark:text-slate-50">Goal:</span> {analysis.goal}</p>
            <p className="mt-2"><span className="font-semibold text-slate-900 dark:text-slate-50">Current readiness:</span> {analysis.readiness}%</p>
            <p className="mt-2"><span className="font-semibold text-slate-900 dark:text-slate-50">Next priority:</span> {analysis.topPrioritySkills.join(', ')}</p>
          </div>
          <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
            Saarthi AI is mocked for the MVP. It behaves like an assistant, but all responses come from local profile rules so the demo is fast and reliable.
          </div>
        </GlassCard>
      </div>
    </AnimatedPage>
  )
}

export default MentorPage
