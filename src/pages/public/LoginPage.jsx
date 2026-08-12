import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AnimatedPage from '../../components/AnimatedPage'

function LoginPage() {
  const navigate = useNavigate()
  const [role, setRole] = useState('student')

  return (
    <AnimatedPage className="mx-auto max-w-md px-4 py-12">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Welcome Back</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Secure sign-in for students and institutions.</p>
        <div className="mt-5 grid grid-cols-2 rounded-xl bg-slate-100 p-1 text-sm dark:bg-slate-800">
          <button
            type="button"
            className={`rounded-lg py-2 ${role === 'student' ? 'bg-white font-semibold text-[#0B4F9F] dark:bg-slate-900' : 'text-slate-500 dark:text-slate-400'}`}
            onClick={() => setRole('student')}
          >
            Student Login
          </button>
          <button
            type="button"
            className={`rounded-lg py-2 ${role === 'admin' ? 'bg-white font-semibold text-[#0B4F9F] dark:bg-slate-900' : 'text-slate-500 dark:text-slate-400'}`}
            onClick={() => setRole('admin')}
          >
            College/Admin
          </button>
        </div>
        <form className="mt-4 space-y-3">
          <input className="w-full rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950" placeholder="Email or Mobile" />
          <input type="password" className="w-full rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950" placeholder="Password" />
          <button type="button" onClick={() => navigate(role === 'student' ? '/student/dashboard' : '/college/dashboard')} className="w-full rounded-xl bg-[#0B4F9F] py-2 font-semibold text-white">
            Open {role === 'student' ? 'Student Demo' : 'College Demo'}
          </button>
        </form>
      </div>
    </AnimatedPage>
  )
}

export default LoginPage
