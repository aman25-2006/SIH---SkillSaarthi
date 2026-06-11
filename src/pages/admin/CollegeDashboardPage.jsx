import AnimatedPage from '../../components/AnimatedPage'
import { GlassCard } from '../../components/UI'

function CollegeDashboardPage() {
  return (
    <AnimatedPage className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">College Employability Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-4">
        {[
          ['Avg Readiness', '64%'],
          ['Top Stream', 'CSE'],
          ['Top Missing Skill', 'Communication'],
          ['Internship Participation', '72%'],
        ].map(([label, value]) => (
          <GlassCard key={label}>
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
          </GlassCard>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <GlassCard>
          <h3 className="font-semibold text-slate-900">Stream-wise Performance</h3>
          <div className="mt-3 space-y-2 text-sm">
            {['CSE 72%', 'ECE 65%', 'Mechanical 58%', 'B.Sc 54%'].map((row) => (
              <div key={row} className="rounded-lg bg-slate-100 px-3 py-2 text-slate-700">{row}</div>
            ))}
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="font-semibold text-slate-900">Placement Readiness Analytics</h3>
          <p className="mt-2 text-sm text-slate-600">
            38% students are interview-ready, 44% in skill-building phase, and 18% need foundational intervention.
          </p>
        </GlassCard>
      </div>
    </AnimatedPage>
  )
}

export default CollegeDashboardPage
