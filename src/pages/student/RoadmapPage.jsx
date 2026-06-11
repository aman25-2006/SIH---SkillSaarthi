import AnimatedPage from '../../components/AnimatedPage'
import { GlassCard } from '../../components/UI'

const roadmap = ['Week 1: Aptitude Basics', 'Week 2: SQL Beginner', 'Week 3: Communication Practice', 'Week 4: Mock Interview & Resume']

function RoadmapPage() {
  return (
    <AnimatedPage className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Career Roadmap</h1>
      <div className="relative space-y-3 border-l-2 border-[#0B4F9F]/30 pl-6">
        {roadmap.map((r, i) => (
          <GlassCard key={r} className="relative">
            <span className="absolute -left-10 top-5 grid h-6 w-6 place-items-center rounded-full bg-[#FF9933] text-xs font-semibold text-white">{i + 1}</span>
            <p className="font-semibold text-slate-900">{r}</p>
          </GlassCard>
        ))}
      </div>
    </AnimatedPage>
  )
}

export default RoadmapPage
