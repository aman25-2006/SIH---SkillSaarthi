import { Menu } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { studentNav } from '../data'
import { useTheme } from '../context/ThemeContext'
import { MoonStar, SunMedium } from 'lucide-react'

function DashboardLayout() {
  const [open, setOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
            <Menu className="h-5 w-5 text-slate-700 dark:text-slate-200" />
          </button>
          <NavLink to="/" className="text-base font-bold text-[#0B4F9F] dark:text-[#7cc2ff]">
            SkillSaarthi
          </NavLink>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-xl border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-[#0B4F9F] hover:text-[#0B4F9F] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              aria-label="Toggle theme"
            >
              {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
            </button>
            <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">Live Mentoring</div>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 md:grid-cols-[240px_1fr] md:px-6">
        <aside className={`${open ? 'block' : 'hidden'} rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 md:block`}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Student Suite</p>
          <nav className="mt-4 flex flex-col gap-1 text-sm">
            {studentNav.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 transition ${
                    isActive
                      ? 'bg-[#0B4F9F] text-white dark:bg-[#FF9933] dark:text-slate-950'
                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
