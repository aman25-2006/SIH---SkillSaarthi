import AnimatedPage from '../../components/AnimatedPage'
import { GlassCard, SectionTitle } from '../../components/UI'

function AboutPage() {
  return (
    <AnimatedPage className="mx-auto max-w-6xl space-y-8 px-4 py-10 md:px-6">
      <SectionTitle
        eyebrow="About Platform"
        title="Mission-Led Employability Infrastructure"
        subtitle="Bridging aspiration and opportunity for students in rural India, tier-2 and tier-3 cities."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <GlassCard>
          <h3 className="text-lg font-semibold text-slate-900">Our Mission</h3>
          <p className="mt-2 text-slate-600">Deliver trusted, language-accessible career guidance and measurable readiness pathways to every student.</p>
        </GlassCard>
        <GlassCard>
          <h3 className="text-lg font-semibold text-slate-900">Our Vision</h3>
          <p className="mt-2 text-slate-600">Enable equitable career mobility through AI, local relevance, and public-private collaboration.</p>
        </GlassCard>
        <GlassCard className="md:col-span-2">
          <h3 className="text-lg font-semibold text-slate-900">Problem We Solve</h3>
          <p className="mt-2 text-slate-600">
            Students often lack structured guidance, clarity on company expectations, and access to internships. This platform transforms raw ambition into a guided action plan with progress tracking.
          </p>
        </GlassCard>
      </div>
    </AnimatedPage>
  )
}

export default AboutPage
