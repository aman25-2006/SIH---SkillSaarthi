import AnimatedPage from '../../components/AnimatedPage'
import { GlassCard, SectionTitle } from '../../components/UI'

function AboutPage() {
  return (
    <AnimatedPage className="mx-auto max-w-6xl space-y-8 px-4 py-10 md:px-6">
      <SectionTitle
        eyebrow="About Platform"
        title="Personalized employability infrastructure"
        subtitle="Skill Saarthi bridges aspiration and opportunity with skill-gap intelligence, roadmap guidance, and practical opportunity discovery."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <GlassCard>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Our Mission</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Deliver trusted, language-accessible career guidance and measurable readiness pathways to every learner.</p>
        </GlassCard>
        <GlassCard>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Our Vision</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Enable equitable career mobility through AI, local relevance, and public-private collaboration.</p>
        </GlassCard>
        <GlassCard className="md:col-span-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Problem We Solve</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Students often have access to learning content and opportunities, but lack structured guidance. This platform transforms raw ambition into a guided action plan with progress tracking and relevant matches.
          </p>
        </GlassCard>
      </div>
    </AnimatedPage>
  )
}

export default AboutPage
