import { useState } from 'react'
import AnimatedPage from '../../components/AnimatedPage'

const steps = ['Personal', 'Education', 'Preferences']

function RegisterPage() {
  const [active, setActive] = useState(1)

  return (
    <AnimatedPage className="mx-auto max-w-3xl space-y-6 px-4 py-10 md:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Student Onboarding</h1>
      <div className="grid grid-cols-3 gap-3">
        {steps.map((s, idx) => (
          <button
            key={s}
            onClick={() => setActive(idx + 1)}
            className={`rounded-xl border px-3 py-2 text-sm ${
              active === idx + 1 ? 'border-[#0B4F9F] bg-[#0B4F9F] text-white' : 'border-slate-300 bg-white'
            }`}
          >
            {idx + 1}. {s}
          </button>
        ))}
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="grid gap-3 md:grid-cols-2">
          <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Name" />
          <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="State" />
          <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="District" />
          <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Stream" />
          <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="College" />
          <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Language Preference" />
          <input className="rounded-xl border border-slate-300 px-3 py-2 md:col-span-2" placeholder="Career Interest" />
        </div>
        <button className="mt-4 rounded-xl bg-[#0B4F9F] px-5 py-2 text-sm font-semibold text-white">Continue</button>
      </div>
    </AnimatedPage>
  )
}

export default RegisterPage
