import { NavLink, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MoonStar, SunMedium } from 'lucide-react'
import { navLinks } from '../data'
import { useTheme } from '../context/ThemeContext'

function PublicLayout() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_10%,#dbeafe_0%,#f8fafc_32%,#eef2ff_100%)] text-slate-900 dark:bg-[radial-gradient(circle_at_10%_10%,#0f172a_0%,#020617_42%,#0b1120_100%)] dark:text-slate-50">
      <header className="sticky top-0 z-30 border-b border-white/60 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <NavLink to="/" className="text-lg font-bold tracking-tight text-[#0B4F9F] dark:text-[#7cc2ff]">
            SkillSaarthi
          </NavLink>
          <nav className="hidden items-center gap-5 text-sm md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? 'font-semibold text-[#0B4F9F] dark:text-[#7cc2ff]'
                    : 'text-slate-600 transition hover:text-[#0B4F9F] dark:text-slate-300 dark:hover:text-[#7cc2ff]'
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 transition hover:border-[#0B4F9F] hover:text-[#0B4F9F] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              aria-label="Toggle theme"
            >
              {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
            </button>
            <NavLink
              to="/student/dashboard"
              className="rounded-xl bg-[#0B4F9F] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#083d7b] dark:bg-[#FF9933] dark:text-slate-950 dark:hover:bg-[#f08f1f]"
            >
              Student Dashboard
            </NavLink>
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="mt-20 border-t border-white/60 bg-white/85 dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-50">National Employability Infrastructure</h4>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Trusted guidance for rural and underserved India, designed with Digital Public Infrastructure standards.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-50">Quick Links</h4>
            <div className="mt-2 flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
              <NavLink to="/about">Mission</NavLink>
              <NavLink to="/how-it-works">How It Works</NavLink>
              <NavLink to="/login">Student Access</NavLink>
            </div>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h4 className="font-semibold text-slate-900 dark:text-slate-50">Supported Languages</h4>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">English | Hindi | Hinglish</p>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">Designed for low-bandwidth and mobile-first delivery.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default PublicLayout
