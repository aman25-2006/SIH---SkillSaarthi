import AnimatedPage from '../../components/AnimatedPage'
import { GlassCard, SectionTitle } from '../../components/UI'
import { useSaarthi } from '../../context/SaarthiContext'

function RoadmapPage() {
  const { profile, roadmap } = useSaarthi()

  return (
    <AnimatedPage className="space-y-6">
      <SectionTitle eyebrow="Roadmap" title="Personalized career roadmap" subtitle={`A ${roadmap.length}-phase plan built around ${profile.name}'s current skill gap and goal.`} />
      <div className="grid gap-4">
        {roadmap.map((phase, index) => (
          <GlassCard key={phase.phase} className="relative overflow-hidden">
            <div className="grid gap-4 lg:grid-cols-[0.25fr_1fr] lg:items-start">
              <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0B4F9F] text-sm font-semibold text-white dark:bg-[#FF9933] dark:text-slate-950">{index + 1}</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B4F9F] dark:text-[#7cc2ff]">{phase.phase}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{phase.duration}</p>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{phase.title}</h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{phase.progress}% started</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                  <div className="h-2 rounded-full bg-[#0B4F9F] dark:bg-[#FF9933]" style={{ width: `${phase.progress}%` }} />
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Tasks</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {phase.tasks.map((task) => <li key={task}>• {task}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Resources</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {phase.resources.map((resource) => <li key={resource}>• {resource}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </AnimatedPage>
  )
}

export default RoadmapPage
