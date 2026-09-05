'use client'

import { WageProgressionChart } from '@/components/dashboard/wage-chart'
import { TrendingUp } from 'lucide-react'

export default function WagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <TrendingUp className="h-8 w-8 text-green-600" />
          Wage Progression
        </h1>
        <p className="mt-1 text-gray-600">Monitor income growth and wage progression of beneficiaries</p>
      </div>

      <div className="grid gap-6">
        <WageProgressionChart />
      </div>
    </div>
  )
}
