import AnimatedPage from '../../components/AnimatedPage'
import { GlassCard, ProgressRing, SectionTitle } from '../../components/UI'
import { useSaarthi } from '../../context/SaarthiContext'

function SkillGapPage() {
  const { profile, analysis } = useSaarthi()

  return (
    <AnimatedPage className="space-y-6">
      <SectionTitle eyebrow="Skill analysis" title="Current skills vs required skills" subtitle={`Built for ${profile.name} targeting ${analysis.goal}.`} />
      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <GlassCard className="space-y-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">Career readiness</p>
          <h2 className="text-4xl font-bold text-slate-950 dark:text-white">{analysis.readiness}%</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">{analysis.gapLabel} for the selected role.</p>
          <div className="pt-2">
            <ProgressRing value={analysis.readiness} />
          </div>
          <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-800/70 dark:text-slate-300">
            Top priority: <span className="font-semibold text-slate-900 dark:text-slate-50">{analysis.topPrioritySkills.join(', ')}</span>
          </div>
        </GlassCard>

        <GlassCard className="space-y-4">
          <h3 className="font-semibold text-slate-900 dark:text-slate-50">Required vs current skills</h3>
          <div className="space-y-4">
            {analysis.evaluatedSkills.map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                  <span className="text-slate-500 dark:text-slate-400">{Math.round(skill.coverage * 100)}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                  <div className={`h-2 rounded-full ${skill.status === 'strong' ? 'bg-emerald-500' : skill.status === 'improve' ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${Math.max(10, Math.round(skill.coverage * 100))}%` }} />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <GlassCard>
          <h3 className="font-semibold text-slate-900 dark:text-slate-50">Strong</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {analysis.strongSkills.map((skill) => (
              <span key={skill} className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">{skill}</span>
            ))}
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="font-semibold text-slate-900 dark:text-slate-50">Needs improvement</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {analysis.improvingSkills.map((skill) => (
              <span key={skill} className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">{skill}</span>
            ))}
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="font-semibold text-slate-900 dark:text-slate-50">Missing</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {analysis.missingSkills.map((skill) => (
              <span key={skill} className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">{skill}</span>
            ))}
          </div>
        </GlassCard>
      </div>
    </AnimatedPage>
  )
}

export default SkillGapPage
