'use client'

import { AIInsights } from '@/components/dashboard/ai-insights'

export default function AIInsightsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI Policy Insights</h1>
        <p className="mt-1 text-gray-600">Machine learning powered recommendations for policy decisions</p>
      </div>

      <AIInsights />
    </div>
  )
}
