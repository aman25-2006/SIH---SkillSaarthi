'use client'

import { EmploymentOutcomeChart } from '@/components/dashboard/employment-chart'
import { Briefcase } from 'lucide-react'

export default function OutcomesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <Briefcase className="h-8 w-8 text-green-600" />
          Employment Outcomes
        </h1>
        <p className="mt-1 text-gray-600">Track employment metrics and beneficiary outcomes</p>
      </div>

      <div className="grid gap-6">
        <EmploymentOutcomeChart />
      </div>
    </div>
  )
}
