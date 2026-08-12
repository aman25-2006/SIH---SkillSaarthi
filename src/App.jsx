import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import { SaarthiProvider } from './context/SaarthiContext'
import { ThemeProvider } from './context/ThemeContext'
import DashboardLayout from './layouts/DashboardLayout'
import PublicLayout from './layouts/PublicLayout'
import NotFoundPage from './pages/NotFoundPage'
import CollegeDashboardPage from './pages/admin/CollegeDashboardPage'
import SettingsPage from './pages/admin/SettingsPage'
import AboutPage from './pages/public/AboutPage'
import HomePage from './pages/public/HomePage'
import HowItWorksPage from './pages/public/HowItWorksPage'
import LoginPage from './pages/public/LoginPage'
import RegisterPage from './pages/public/RegisterPage'
import AssessmentPage from './pages/student/AssessmentPage'
import DashboardHomePage from './pages/student/DashboardHomePage'
import InternshipsPage from './pages/student/InternshipsPage'
import MentorPage from './pages/student/MentorPage'
import ResumeBuilderPage from './pages/student/ResumeBuilderPage'
import RoadmapPage from './pages/student/RoadmapPage'
import SkillGapPage from './pages/student/SkillGapPage'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <SaarthiProvider>
        {loading ? (
          <LoadingScreen />
        ) : (
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>

            <Route element={<DashboardLayout />}>
              <Route path="/student/dashboard" element={<DashboardHomePage />} />
              <Route path="/student/assessment" element={<AssessmentPage />} />
              <Route path="/student/skill-gap" element={<SkillGapPage />} />
              <Route path="/student/mentor" element={<MentorPage />} />
              <Route path="/student/roadmap" element={<RoadmapPage />} />
              <Route path="/student/internships" element={<InternshipsPage />} />
              <Route path="/student/resume" element={<ResumeBuilderPage />} />
              <Route path="/college/dashboard" element={<CollegeDashboardPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>

            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/demo" element={<Navigate to="/student/dashboard" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )}
      </SaarthiProvider>
    </ThemeProvider>
  )
}

export default App
