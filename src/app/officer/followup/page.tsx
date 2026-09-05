'use client'

import { FollowUpTracking } from '@/components/dashboard/followup-tracking'
import { RotateCw } from 'lucide-react'

export default function FollowupPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <RotateCw className="h-8 w-8 text-blue-600" />
          Follow-up Tracking
        </h1>
        <p className="mt-1 text-gray-600">Longitudinal tracking of beneficiary employment and wage progression</p>
      </div>

      <FollowUpTracking />
    </div>
  )
}
