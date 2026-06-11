import { MoonStar, SunMedium } from 'lucide-react'
import AnimatedPage from '../../components/AnimatedPage'
import { useTheme } from '../../context/ThemeContext'

function SettingsPage() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <AnimatedPage className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Settings</h1>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
          <label className="flex items-center justify-between rounded-xl bg-slate-50 p-3 dark:bg-slate-800/80">
            Language Switch (English / Hindi)
            <select className="rounded-lg border border-slate-300 bg-white px-2 py-1 dark:border-slate-700 dark:bg-slate-900">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </label>
          <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3 dark:bg-slate-800/80">
            Dark/Light Mode
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0B4F9F] px-3 py-1 text-white dark:bg-[#FF9933] dark:text-slate-950"
              onClick={toggleTheme}
            >
              {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
              {isDark ? 'Dark Mode' : 'Light Mode'}
            </button>
          </div>
          <label className="flex items-center justify-between rounded-xl bg-slate-50 p-3 dark:bg-slate-800/80">
            Notification Preferences
            <input type="checkbox" defaultChecked />
          </label>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default SettingsPage
