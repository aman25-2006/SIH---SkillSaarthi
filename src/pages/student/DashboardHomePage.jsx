import { NavLink } from 'react-router-dom'
import AnimatedPage from '../../components/AnimatedPage'
import { GlassCard, ProgressRing, SectionTitle } from '../../components/UI'
import { useSaarthi } from '../../context/SaarthiContext'

function DashboardHomePage() {
  const { profile, analysis, roadmap, opportunities, metrics, updateProfile } = useSaarthi()
  const topOpportunity = opportunities[0]

  return (
    <AnimatedPage className="space-y-6">
      <SectionTitle
        eyebrow="Personal Dashboard"
        title={`Welcome back, ${profile.name}`}
        subtitle="Here is where you are, what to learn next, and the best practical opportunity to pursue."
      />

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <GlassCard className="space-y-5 border-slate-200 bg-white/90 dark:border-slate-800 dark:bg-slate-900/90">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Career Goal</p>
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{analysis.goal}</h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{profile.educationLevel} • {profile.experienceLevel} • {profile.weeklyLearningTime}</p>
            </div>
            <div className="grid place-items-center rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/70">
              <ProgressRing value={metrics.careerReadiness} />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <NavLink to="/student/skill-gap" className="rounded-2xl bg-[#0B4F9F] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0B4F9F]/20 transition hover:-translate-y-0.5">
              Review skill gap
            </NavLink>
            <NavLink to="/student/roadmap" className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#0B4F9F] hover:text-[#0B4F9F] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              View roadmap
            </NavLink>
            <NavLink to="/student/mentor" className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
              Ask Saarthi AI
            </NavLink>
          </div>
        </GlassCard>

        <div className="grid gap-4">
          {[
            ['Apprenticeship readiness', `${analysis.apprenticeshipReadiness}%`, `${analysis.topPrioritySkills[0] || 'Project'} is the next lever.`],
            ['Skill gap', `${analysis.skillGapPercent}%`, analysis.gapLabel],
            ['Roadmap status', `${metrics.roadmapCompletion}%`, `${roadmap.length} active phases`],
          ].map(([label, value, description]) => (
            <GlassCard key={label} className="border-slate-200 bg-white/90 dark:border-slate-800 dark:bg-slate-900/90">
              <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
              <div className="mt-2 flex items-end justify-between gap-3">
                <p className="text-3xl font-bold text-slate-950 dark:text-white">{value}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_1fr_0.9fr]">
        <GlassCard>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Top priority skills</p>
          <div className="mt-4 space-y-3">
            {analysis.evaluatedSkills.map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${skill.status === 'strong' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' : skill.status === 'improve' ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300'}`}>{skill.status}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                  <div className="h-2 rounded-full bg-[#0B4F9F] transition-all dark:bg-[#FF9933]" style={{ width: `${Math.max(10, Math.round(skill.coverage * 100))}%` }} />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Current roadmap</p>
          <div className="mt-4 space-y-3">
            {roadmap.slice(0, 3).map((phase) => (
              <div key={phase.phase} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/70">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B4F9F] dark:text-[#7cc2ff]">{phase.phase}</p>
                <p className="mt-1 font-semibold text-slate-950 dark:text-white">{phase.title}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{phase.duration}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
            Next recommended action: {analysis.nextAction}
          </div>
        </GlassCard>

        <GlassCard>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Opportunity match</p>
          {topOpportunity ? (
            <div className="mt-4 space-y-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/70">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-slate-950 dark:text-white">{topOpportunity.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{topOpportunity.organization}</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">{topOpportunity.matchPercent}% match</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{topOpportunity.whyMatch}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Deadline: {topOpportunity.deadline} • {topOpportunity.location}</p>
            </div>
          ) : null}
          <div className="mt-4 rounded-2xl bg-[#0B4F9F]/5 p-4 text-sm text-slate-700 dark:bg-[#0B4F9F]/15 dark:text-slate-200">
            <p className="font-semibold text-slate-900 dark:text-slate-50">Recent progress</p>
            <p className="mt-1">{profile.projectsCompleted} project, {profile.certifications} certifications, {profile.applications} demo applications, {profile.learningStreak} day streak.</p>
            <button type="button" onClick={() => updateProfile({ applications: profile.applications + 1 })} className="mt-3 rounded-xl bg-[#0B4F9F] px-4 py-2 text-sm font-semibold text-white">Log next application</button>
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ['Career readiness', `${metrics.careerReadiness}%`],
          ['Skill progress', `${metrics.skillProgress}%`],
          ['Roadmap completion', `${metrics.roadmapCompletion}%`],
          ['XP', `${metrics.xp}`],
        ].map(([label, value]) => (
          <GlassCard key={label} className="border-slate-200 bg-white/90 dark:border-slate-800 dark:bg-slate-900/90">
            <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
            <p className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">{value}</p>
          </GlassCard>
        ))}
      </div>
    </AnimatedPage>
  )
}

export default DashboardHomePage
