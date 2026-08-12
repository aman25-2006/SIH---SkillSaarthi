import AnimatedPage from '../../components/AnimatedPage'
import { GlassCard, SectionTitle } from '../../components/UI'
import { useSaarthi } from '../../context/SaarthiContext'

function InternshipsPage() {
  const { profile, analysis, opportunities } = useSaarthi()
  const apprenticeshipReadiness = analysis.apprenticeshipReadiness

  return (
    <AnimatedPage className="space-y-6">
      <SectionTitle eyebrow="Opportunity radar" title="Apprenticeships, internships and more" subtitle={`The cards below are demo opportunities matched for ${profile.name}.`} />

      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <GlassCard>
          <p className="text-sm text-slate-500 dark:text-slate-400">Apprenticeship readiness</p>
          <h2 className="mt-2 text-4xl font-bold text-slate-950 dark:text-white">{apprenticeshipReadiness}%</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Completed: {analysis.strongSkills.join(', ') || 'Your strongest skills will appear here.'}</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Needs attention: {analysis.topPrioritySkills.join(', ')}</p>
        </GlassCard>

        <GlassCard>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Why the top match works</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{opportunities[0]?.title}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{opportunities[0]?.whyMatch}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {(opportunities[0]?.overlap || []).map((skill) => (
              <span key={skill} className="rounded-full bg-[#0B4F9F]/10 px-3 py-1 font-semibold text-[#0B4F9F] dark:bg-[#7cc2ff]/10 dark:text-[#7cc2ff]">{skill}</span>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {opportunities.slice(0, 3).map((opportunity) => (
          <GlassCard key={opportunity.title}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B4F9F] dark:text-[#7cc2ff]">{opportunity.type}</p>
                <h3 className="mt-1 font-semibold text-slate-950 dark:text-white">{opportunity.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{opportunity.organization}</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">{opportunity.matchPercent}%</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{opportunity.whyMatch}</p>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{opportunity.eligibility}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{opportunity.deadline} • {opportunity.location}</p>
          </GlassCard>
        ))}
      </div>
    </AnimatedPage>
  )
}

export default InternshipsPage
