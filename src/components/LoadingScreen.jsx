import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

function LoadingScreen() {
  const { isDark } = useTheme()

  return (
    <div
      className={`grid min-h-screen place-items-center ${
        isDark
          ? 'bg-[radial-gradient(circle_at_top,#0f172a_0%,#020617_55%,#111827_100%)]'
          : 'bg-[radial-gradient(circle_at_top,#dbeafe_0%,#f8fafc_60%,#eef2ff_100%)]'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-white/70 bg-white/80 px-10 py-8 text-center shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/85"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B4F9F] dark:text-[#FFB15E]">Launching platform</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-50">SkillSaarthi</h2>
        <div className="mt-4 h-1.5 w-56 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <motion.div
            className="h-full bg-[#0B4F9F] dark:bg-[#FF9933]"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default LoadingScreen
