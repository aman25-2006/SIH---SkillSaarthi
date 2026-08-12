import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import AnimatedPage from '../../components/AnimatedPage'
import { pageItem } from '../../components/motion'
import { AnimatedCounter, GlassCard, SectionTitle } from '../../components/UI'
import { faq, publicJourney, stats, testimonials } from '../../data'

function HomePage() {
  return (
    <AnimatedPage className="mx-auto max-w-7xl space-y-20 px-4 py-10 md:px-6">
      <section className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div variants={pageItem} className="space-y-6">
          <p className="inline-flex items-center rounded-full border border-[#0B4F9F]/15 bg-[#0B4F9F]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B4F9F] dark:border-[#7cc2ff]/20 dark:bg-[#7cc2ff]/10 dark:text-[#7cc2ff]">
            AI-powered career navigation for every learner
          </p>
          <h1 className="max-w-3xl text-5xl leading-[1.05] font-bold text-slate-950 md:text-6xl dark:text-white">
            Your Skills. Your Career. Your Saarthi.
          </h1>
          <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Skill Saarthi helps learners understand where they are, what they need next, which project to build, and which internship or apprenticeship to target.
          </p>
          <div className="flex flex-wrap gap-3">
            <NavLink to="/register" className="rounded-xl bg-[#0B4F9F] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0B4F9F]/25 transition hover:-translate-y-0.5 hover:bg-[#083d7b]">
              Start My Journey
            </NavLink>
            <NavLink to="/how-it-works" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#0B4F9F] hover:text-[#0B4F9F] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              See How It Works
            </NavLink>
            <NavLink to="/student/dashboard" className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
              Open Demo Dashboard
            </NavLink>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ['Profile-aware', 'Different learners get different roadmaps.'],
              ['Opportunity radar', 'Find apprenticeships, internships, hackathons.'],
              ['Mock AI', 'Rule-based Saarthi AI for the first demo.'],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
                <p className="font-semibold text-slate-900 dark:text-slate-50">{title}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <GlassCard className="space-y-5 border-slate-200/70 bg-white/85 p-6 dark:border-slate-800/70 dark:bg-slate-900/85">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B4F9F] dark:text-[#7cc2ff]">Problem to outcome</p>
          <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            {publicJourney.map((step, index) => (
              <div key={step} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-800/70">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0B4F9F] text-xs font-semibold text-white dark:bg-[#FF9933] dark:text-slate-950">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-50">{step}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {index === 0 && 'Learner profile and current context'}
                    {index === 1 && 'AI compares current vs required skills'}
                    {index === 2 && 'Roadmap adjusted to the selected career'}
                    {index === 3 && 'Build a project that proves readiness'}
                    {index === 4 && 'Match to practical opportunities'}
                    {index === 5 && 'Target role, interview, and apply'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <GlassCard key={s.label}>
            <AnimatedCounter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.label}</p>
          </GlassCard>
        ))}
      </section>

      <section className="space-y-6">
        <SectionTitle eyebrow="How It Works" title="From skill gap to career opportunity" subtitle="The demo is built to show the full flow in under five minutes." />
        <div className="grid gap-4 md:grid-cols-5">
          {['Profile', 'Gap Analysis', 'Roadmap', 'Projects', 'Opportunities'].map((step, i) => (
            <GlassCard key={step} className="text-center">
              <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#0B4F9F] text-sm font-semibold text-white dark:bg-[#FF9933] dark:text-slate-950">
                {i + 1}
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-50">{step}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle eyebrow="Voices" title="Student and college feedback" subtitle="A fast way to show credibility in the SIH demo." />
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <GlassCard key={t.name}>
              <p className="text-sm text-slate-600 dark:text-slate-300">“{t.quote}”</p>
              <p className="mt-4 font-semibold text-slate-900 dark:text-slate-50">{t.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle eyebrow="FAQ" title="Frequently asked questions" subtitle="Built for clarity and trust." />
        <div className="grid gap-3">
          {faq.map((f) => (
            <motion.details key={f.q} variants={pageItem} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <summary className="cursor-pointer font-semibold text-slate-900 dark:text-slate-50">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </section>
    </AnimatedPage>
  )
}

export default HomePage
