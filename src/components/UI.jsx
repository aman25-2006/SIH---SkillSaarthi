import { motion } from 'framer-motion'
import { pageItem } from './motion'

export function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div variants={pageItem} className="space-y-3">
      <p className="inline-block rounded-full bg-[#0B4F9F]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B4F9F] dark:bg-[#0B4F9F]/20 dark:text-[#7cc2ff]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl dark:text-slate-50">{title}</h2>
      <p className="max-w-3xl text-slate-600 dark:text-slate-300">{subtitle}</p>
    </motion.div>
  )
}

export function GlassCard({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      variants={pageItem}
      className={`rounded-2xl border border-white/70 bg-white/75 p-5 shadow-[0_10px_30px_-18px_rgba(11,79,159,0.5)] backdrop-blur dark:border-slate-700 dark:bg-slate-900/75 dark:shadow-[0_10px_30px_-18px_rgba(15,23,42,0.9)] ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedCounter({ value, suffix = '' }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-slate-900 dark:text-slate-50"
    >
      {Intl.NumberFormat('en-IN').format(value)}
      {suffix}
    </motion.span>
  )
}

export function ProgressRing({ value }) {
  const r = 48
  const circumference = 2 * Math.PI * r
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="relative grid h-32 w-32 place-items-center">
      <svg viewBox="0 0 120 120" className="h-32 w-32 -rotate-90">
        <circle cx="60" cy="60" r={r} stroke="#dbeafe" strokeWidth="10" fill="none" />
        <motion.circle
          cx="60"
          cy="60"
          r={r}
          stroke="#0B4F9F"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </svg>
      <span className="absolute text-2xl font-bold text-slate-900 dark:text-slate-50">{value}%</span>
    </div>
  )
}

export function SkeletonCard() {
  return <div className="h-28 animate-pulse rounded-2xl bg-slate-200/70 dark:bg-slate-800/70" />
}

export function EmptyState({ title, description }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-7 text-center dark:border-slate-700 dark:bg-slate-900">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{title}</h3>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  )
}

export function ErrorState({ title, description }) {
  return (
    <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 dark:border-rose-900 dark:bg-rose-950/40">
      <h3 className="font-semibold text-rose-800 dark:text-rose-200">{title}</h3>
      <p className="mt-1 text-rose-700 dark:text-rose-300">{description}</p>
    </div>
  )
}
