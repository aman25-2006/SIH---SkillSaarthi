import AnimatedPage from '../../components/AnimatedPage'
import { GlassCard, ProgressRing } from '../../components/UI'

const required = [
  { skill: 'SQL', expected: 80, current: 45 },
  { skill: 'Aptitude', expected: 75, current: 60 },
  { skill: 'Communication', expected: 85, current: 50 },
]

function SkillGapPage() {
  return (
    <AnimatedPage className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Skill Gap Report</h1>
      <div className="grid gap-4 lg:grid-cols-3">
        <GlassCard className="lg:col-span-1">
          <p className="text-sm text-slate-500">Target Company</p>
          <h2 className="text-2xl font-semibold text-slate-900">TCS</h2>
          <p className="mt-3 text-sm text-slate-500">Job Readiness Score</p>
          <div className="mt-2"><ProgressRing value={58} /></div>
        </GlassCard>
        <GlassCard className="lg:col-span-2">
          <h3 className="font-semibold text-slate-900">Required vs Current Skills</h3>
          <div className="mt-4 space-y-4">
            {required.map((r) => (
              <div key={r.skill} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-700">{r.skill}</span>
                  <span className="text-slate-500">{r.current}% / {r.expected}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200">
                  <div className="h-2 rounded-full bg-[#0B4F9F] transition-all" style={{ width: `${r.current}%` }} />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <GlassCard>
          <h3 className="font-semibold text-slate-900">Missing Skills</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
            <li>SQL query confidence</li>
            <li>Spoken English fluency</li>
          </ul>
        </GlassCard>
        <GlassCard>
          <h3 className="font-semibold text-slate-900">Recommended Intervention</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
            <li>2-week SQL sprint with practice sheets</li>
            <li>Daily 20-min communication speaking drills</li>
          </ul>
        </GlassCard>
      </div>
    </AnimatedPage>
  )
}

export default SkillGapPage
