import { motion } from 'framer-motion'
import AnimatedPage from '../../components/AnimatedPage'
import { pageItem } from '../../components/motion'
import { SectionTitle } from '../../components/UI'
import { publicJourney } from '../../data'

function HowItWorksPage() {
  return (
    <AnimatedPage className="mx-auto max-w-5xl space-y-8 px-4 py-10 md:px-6">
      <SectionTitle
        eyebrow="How It Works"
        title="From Registration to Career Readiness"
        subtitle="A transparent and measurable journey with guided milestones."
      />
      <div className="relative space-y-4 border-l-2 border-[#0B4F9F]/30 pl-6">
        {publicJourney.map((step, index) => (
          <motion.div
            key={step}
            variants={pageItem}
            className="relative rounded-2xl border border-slate-200 bg-white p-4"
          >
            <span className="absolute -left-[34px] top-4 grid h-6 w-6 place-items-center rounded-full bg-[#0B4F9F] text-xs font-semibold text-white">
              {index + 1}
            </span>
            <h3 className="font-semibold text-slate-900">{step}</h3>
          </motion.div>
        ))}
      </div>
    </AnimatedPage>
  )
}

export default HowItWorksPage
