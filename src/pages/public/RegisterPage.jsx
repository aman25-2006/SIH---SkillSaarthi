import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AnimatedPage from '../../components/AnimatedPage'
import { GlassCard } from '../../components/UI'
import { careerCatalog, demoProfile } from '../../data'
import { useSaarthi } from '../../context/SaarthiContext'

const steps = ['Basics', 'Skills', 'Career Goal', 'Availability']

function RegisterPage() {
  const navigate = useNavigate()
  const { replaceProfile } = useSaarthi()
  const [active, setActive] = useState(1)
  const [form, setForm] = useState(demoProfile)

  const careerOptions = useMemo(() => Object.keys(careerCatalog), [])

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleLaunch = () => {
    replaceProfile(form)
    navigate('/student/dashboard')
  }

  return (
    <AnimatedPage className="mx-auto max-w-5xl space-y-6 px-4 py-10 md:px-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B4F9F]">Onboarding</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-950 dark:text-slate-50">Create your Skill Saarthi profile</h1>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">This is a fast, guided setup. It seeds the demo profile used by the dashboard, skill-gap analysis, roadmap, and Saarthi AI.</p>
        </div>
        <button
          type="button"
          onClick={() => setForm(demoProfile)}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#0B4F9F] hover:text-[#0B4F9F] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
        >
          Load Demo Profile
        </button>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {steps.map((s, idx) => (
          <button
            key={s}
            type="button"
            onClick={() => setActive(idx + 1)}
            className={`rounded-xl border px-3 py-2 text-sm ${
              active === idx + 1 ? 'border-[#0B4F9F] bg-[#0B4F9F] text-white' : 'border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900'
            }`}
          >
            {idx + 1}. {s}
          </button>
        ))}
      </div>

      <GlassCard className="space-y-6 bg-white/90 dark:bg-slate-900/90">
        {active === 1 && (
          <div className="grid gap-4 md:grid-cols-2">
            <input value={form.name} onChange={(e) => updateField('name', e.target.value)} className="rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950" placeholder="Name" />
            <input value={form.educationLevel} onChange={(e) => updateField('educationLevel', e.target.value)} className="rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950" placeholder="Education level" />
            <input value={form.currentCourse} onChange={(e) => updateField('currentCourse', e.target.value)} className="rounded-xl border border-slate-300 px-3 py-2 md:col-span-2 dark:border-slate-700 dark:bg-slate-950" placeholder="Current course / occupation" />
          </div>
        )}

        {active === 2 && (
          <div className="grid gap-4 md:grid-cols-2">
            <textarea value={form.currentSkills.join(', ')} onChange={(e) => updateField('currentSkills', e.target.value.split(',').map((item) => item.trim()).filter(Boolean))} className="min-h-28 rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950 md:col-span-2" placeholder="Current skills, separated by commas" />
            <textarea value={form.interests.join(', ')} onChange={(e) => updateField('interests', e.target.value.split(',').map((item) => item.trim()).filter(Boolean))} className="min-h-28 rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950 md:col-span-2" placeholder="Interests, separated by commas" />
          </div>
        )}

        {active === 3 && (
          <div className="grid gap-4 md:grid-cols-2">
            <select value={form.careerGoal} onChange={(e) => updateField('careerGoal', e.target.value)} className="rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950">
              {careerOptions.map((career) => (
                <option key={career} value={career}>{career}</option>
              ))}
            </select>
            <select value={form.experienceLevel} onChange={(e) => updateField('experienceLevel', e.target.value)} className="rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950">
              {['Beginner', 'Beginner-Intermediate', 'Intermediate', 'Advanced'].map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
            <input value={form.location} onChange={(e) => updateField('location', e.target.value)} className="rounded-xl border border-slate-300 px-3 py-2 md:col-span-2 dark:border-slate-700 dark:bg-slate-950" placeholder="Location / district" />
          </div>
        )}

        {active === 4 && (
          <div className="grid gap-4 md:grid-cols-2">
            <select value={form.weeklyLearningTime} onChange={(e) => updateField('weeklyLearningTime', e.target.value)} className="rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950">
              {['5-7 hrs', '8-10 hrs', '10-12 hrs', '12+ hrs'].map((hours) => (
                <option key={hours} value={hours}>{hours}</option>
              ))}
            </select>
            <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-800/70 dark:text-slate-300">
              Demo profile ready. Launching now will save the answers locally and open the personalized dashboard.
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-500 dark:text-slate-400">Step {active} of 4</p>
          <div className="flex gap-2">
            <button type="button" onClick={() => setActive((value) => Math.max(1, value - 1))} className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200">Back</button>
            {active < 4 ? (
              <button type="button" onClick={() => setActive((value) => Math.min(4, value + 1))} className="rounded-xl bg-[#0B4F9F] px-4 py-2 text-sm font-semibold text-white">Continue</button>
            ) : (
              <button type="button" onClick={handleLaunch} className="rounded-xl bg-[#0B4F9F] px-4 py-2 text-sm font-semibold text-white">Launch My Demo</button>
            )}
          </div>
        </div>
      </GlassCard>
    </AnimatedPage>
  )
}

export default RegisterPage
