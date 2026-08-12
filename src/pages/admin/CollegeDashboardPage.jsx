import AnimatedPage from '../../components/AnimatedPage'
import { GlassCard } from '../../components/UI'
import { stats } from '../../data'

function CollegeDashboardPage() {
  return (
    <AnimatedPage className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">College ecosystem dashboard</h1>
      <div className="grid gap-4 md:grid-cols-4">
        {[
          ['Avg Readiness', '64%'],
          ['Top Stream', 'CSE'],
          ['Top Skill Gap', 'Data Structures'],
          ['Apprenticeship Interest', '72%'],
        ].map(([label, value]) => (
          <GlassCard key={label}>
            <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
            <p className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">{value}</p>
          </GlassCard>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <GlassCard>
          <h3 className="font-semibold text-slate-900 dark:text-slate-50">Stream-wise performance</h3>
          <div className="mt-3 space-y-2 text-sm">
            {['CSE 72%', 'ECE 65%', 'Mechanical 58%', 'B.Sc 54%'].map((row) => (
              <div key={row} className="rounded-lg bg-slate-100 px-3 py-2 text-slate-700 dark:bg-slate-800 dark:text-slate-300">{row}</div>
            ))}
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="font-semibold text-slate-900 dark:text-slate-50">Placement readiness analytics</h3>
          <p className="mt-2 text-sm text-slate-600">
            38% students are interview-ready, 44% in skill-building phase, and 18% need foundational intervention.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {stats.slice(0, 2).map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/70">
                <p className="text-xs text-slate-500 dark:text-slate-400">{item.label}</p>
                <p className="mt-1 text-xl font-bold text-slate-950 dark:text-white">{item.value.toLocaleString('en-IN')}{item.suffix}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </AnimatedPage>
  )
}

export default CollegeDashboardPage
