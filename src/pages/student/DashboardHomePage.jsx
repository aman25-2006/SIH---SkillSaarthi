import AnimatedPage from '../../components/AnimatedPage'
import { GlassCard, ProgressRing } from '../../components/UI'

function DashboardHomePage() {
  return (
    <AnimatedPage className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Student Dashboard</h1>
      <div className="grid gap-4 lg:grid-cols-3">
        <GlassCard className="flex items-center justify-between lg:col-span-1">
          <div>
            <p className="text-sm text-slate-500">Readiness Score</p>
            <p className="text-xl font-semibold text-slate-900">58% - Improving</p>
          </div>
          <ProgressRing value={58} />
        </GlassCard>
        <GlassCard>
          <p className="text-sm text-slate-500">Career Goal</p>
          <h3 className="text-xl font-semibold text-slate-900">System Engineer - TCS</h3>
        </GlassCard>
        <GlassCard>
          <p className="text-sm text-slate-500">Internship Alerts</p>
          <h3 className="text-xl font-semibold text-slate-900">6 New Matches</h3>
        </GlassCard>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <GlassCard>
          <h3 className="font-semibold text-slate-900">Missing Skills</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>SQL fundamentals</li>
            <li>Spoken English confidence</li>
            <li>Quantitative aptitude speed</li>
          </ul>
        </GlassCard>
        <GlassCard>
          <h3 className="font-semibold text-slate-900">Recommended Actions</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Complete SQL Beginner module this week</li>
            <li>Join AI Mentor communication drills</li>
            <li>Attempt aptitude timed mock test</li>
          </ul>
        </GlassCard>
      </div>
    </AnimatedPage>
  )
}

export default DashboardHomePage
