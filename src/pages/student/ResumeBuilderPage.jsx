import AnimatedPage from '../../components/AnimatedPage'
import { GlassCard, SectionTitle } from '../../components/UI'
import { useSaarthi } from '../../context/SaarthiContext'

function ResumeBuilderPage() {
  const { profile, analysis, resume } = useSaarthi()

  return (
    <AnimatedPage className="space-y-6">
      <SectionTitle eyebrow="Resume + interview" title="Lightweight employability prep" subtitle="This page demonstrates resume readiness, suggestions, and mock interview prompts without building a full generator." />
      <div className="grid gap-4 lg:grid-cols-[1fr_0.95fr]">
        <GlassCard>
          <p className="text-sm text-slate-500 dark:text-slate-400">Resume readiness</p>
          <h2 className="mt-2 text-4xl font-bold text-slate-950 dark:text-white">{resume.readiness}%</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{resume.summary}</p>
          <div className="mt-5 space-y-3">
            {resume.suggestions.map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 dark:bg-slate-800/70 dark:text-slate-200">• {item}</div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Interview prep</p>
          <div className="mt-3 rounded-2xl bg-[#0B4F9F]/5 p-4 text-sm text-slate-700 dark:bg-[#0B4F9F]/15 dark:text-slate-200">
            <p className="font-semibold text-slate-950 dark:text-white">Recommended project story</p>
            <p className="mt-1">{analysis.goal} project: {profile.currentSkills[0]} + {analysis.topPrioritySkills[0]} + career-ready dashboard.</p>
          </div>
          <div className="mt-4 space-y-3">
            {resume.interviewQuestions.map((question) => (
              <div key={question} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 dark:bg-slate-800/70 dark:text-slate-200">{question}</div>
            ))}
          </div>
        </GlassCard>
      </div>
    </AnimatedPage>
  )
}

export default ResumeBuilderPage
