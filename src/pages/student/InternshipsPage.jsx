import AnimatedPage from '../../components/AnimatedPage'
import { EmptyState, ErrorState, GlassCard, SkeletonCard } from '../../components/UI'

const internships = [
  { title: 'Remote Data Analyst Intern', company: 'SkillGrid', district: 'Any', type: 'Remote' },
  { title: 'Apprentice Trainee', company: 'NSDC Partner', district: 'Patna', type: 'Govt' },
  { title: 'Junior Support Intern', company: 'Local IT Hub', district: 'Indore', type: 'Local' },
]

function InternshipsPage() {
  return (
    <AnimatedPage className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Internship Recommendations</h1>
      <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-4">
        <input className="rounded-xl border border-slate-300 px-3 py-2 text-sm" placeholder="Stream" />
        <input className="rounded-xl border border-slate-300 px-3 py-2 text-sm" placeholder="Skill" />
        <input className="rounded-xl border border-slate-300 px-3 py-2 text-sm" placeholder="District" />
        <input className="rounded-xl border border-slate-300 px-3 py-2 text-sm" placeholder="Company" />
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {internships.map((job) => (
          <GlassCard key={job.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0B4F9F]">{job.type}</p>
            <h3 className="mt-1 font-semibold text-slate-900">{job.title}</h3>
            <p className="text-sm text-slate-600">{job.company}</p>
            <p className="mt-2 text-xs text-slate-500">District: {job.district}</p>
          </GlassCard>
        ))}
      </div>

      <EmptyState title="Need hyper-local options?" description="Enable district preference and language matching to fetch region-specific roles." />
      <ErrorState title="Unable to refresh opportunities" description="Network quality is low. Cached internship results are being shown." />
    </AnimatedPage>
  )
}

export default InternshipsPage
