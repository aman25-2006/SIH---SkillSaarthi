import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function NotFoundPage() {
  const navigate = useNavigate()
  const { setTheme } = useTheme()

  const handleReturnHome = () => {
    window.localStorage.setItem('skillsaarthi-theme', 'light')
    document.documentElement.classList.remove('dark')
    document.documentElement.dataset.theme = 'light'
    setTheme('light')
    navigate('/', { replace: true })
  }

  return (
    <div className="grid min-h-[60vh] place-items-center px-4 text-center">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Page not found</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">The requested route is unavailable.</p>
        <button
          type="button"
          onClick={handleReturnHome}
          className="mt-4 inline-block rounded-xl bg-[#0B4F9F] px-4 py-2 text-sm font-semibold text-white"
        >
          Return Home
        </button>
      </div>
    </div>
  )
}

export default NotFoundPage
