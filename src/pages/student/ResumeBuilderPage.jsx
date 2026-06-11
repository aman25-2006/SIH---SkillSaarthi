import AnimatedPage from '../../components/AnimatedPage'

function ResumeBuilderPage() {
  return (
    <AnimatedPage className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">ATS Resume Builder</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">Resume Inputs</h2>
          <div className="mt-3 space-y-2">
            {['Personal Details', 'Skills', 'Education', 'Projects'].map((field) => (
              <input key={field} placeholder={field} className="w-full rounded-xl border border-slate-300 px-3 py-2" />
            ))}
          </div>
          <button className="mt-4 rounded-xl bg-[#0B4F9F] px-4 py-2 text-sm font-semibold text-white">Generate Resume</button>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">Live Preview</h2>
          <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Ravi Kumar</p>
            <p>SQL, Excel, Communication</p>
            <p className="mt-2">B.Tech - Mechanical Engineering</p>
            <p className="mt-2">Project: Placement readiness dashboard with AI recommendations</p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default ResumeBuilderPage
