import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import AnimatedPage from '../../components/AnimatedPage'
import { pageItem } from '../../components/motion'
import { AnimatedCounter, GlassCard, SectionTitle } from '../../components/UI'
import { faq, stats, testimonials } from '../../data'

function HomePage() {
  return (
    <AnimatedPage className="mx-auto max-w-7xl space-y-18 px-4 py-10 md:px-6">
      <section className="grid items-center gap-8 md:grid-cols-2">
        <motion.div variants={pageItem} className="space-y-5">
          <p className="inline-block rounded-full bg-[#FF9933]/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#a05c16]">
            Career Infrastructure for Bharat
          </p>
          <h1 className="text-4xl leading-tight font-bold text-slate-900 md:text-5xl">
            Empowering Students with Career Clarity, Skills and Opportunities
          </h1>
          <p className="text-slate-600">
            A trusted AI-powered employability platform designed for rural, tier-2, and tier-3 students to become industry-ready.
          </p>
          <div className="flex flex-wrap gap-3">
            <NavLink to="/register" className="rounded-xl bg-[#0B4F9F] px-5 py-3 text-sm font-semibold text-white hover:bg-[#083d7b]">
              Start Free Onboarding
            </NavLink>
            <NavLink to="/how-it-works" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-white">
              See Student Journey
            </NavLink>
          </div>
        </motion.div>
        <GlassCard className="parallax-soft grid gap-4">
          <h3 className="text-xl font-semibold text-slate-900">Why it matters now</h3>
          <p className="text-slate-600">Millions of students have ambition, but lack clear guidance on job-ready pathways.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">Assessment to Action</p>
              <p className="text-xl font-bold text-slate-900">&lt; 15 mins</p>
            </div>
            <div className="rounded-xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">AI Mentor Languages</p>
              <p className="text-xl font-bold text-slate-900">EN + HI + Hinglish</p>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <GlassCard key={s.label}>
            <AnimatedCounter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-sm text-slate-600">{s.label}</p>
          </GlassCard>
        ))}
      </section>

      <section className="space-y-6">
        <SectionTitle
          eyebrow="How It Works"
          title="Student Success Journey"
          subtitle="From uncertainty to employability through structured, mentor-guided progression."
        />
        <div className="grid gap-4 md:grid-cols-5">
          {['Register', 'Assess', 'Identify Gaps', 'Practice', 'Get Opportunity'].map((step, i) => (
            <GlassCard key={step} className="text-center">
              <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#0B4F9F] text-sm font-semibold text-white">{i + 1}</div>
              <p className="mt-3 text-sm font-semibold text-slate-900">{step}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle eyebrow="Voices" title="Student and College Testimonials" subtitle="Evidence of impact across underserved regions." />
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <GlassCard key={t.name}>
              <p className="text-sm text-slate-600">“{t.quote}”</p>
              <p className="mt-4 font-semibold text-slate-900">{t.name}</p>
              <p className="text-xs text-slate-500">{t.role}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" subtitle="Built for clarity and trust." />
        <div className="grid gap-3">
          {faq.map((f) => (
            <motion.details key={f.q} variants={pageItem} className="rounded-2xl border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer font-semibold text-slate-900">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </section>
    </AnimatedPage>
  )
}

export default HomePage
