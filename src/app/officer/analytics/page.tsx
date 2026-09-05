'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { skillGapsData } from '@/lib/demo-data'
import { Brain } from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <Brain className="h-8 w-8 text-blue-600" />
          Skill Gap Analytics
        </h1>
        <p className="mt-1 text-gray-600">AI-driven skill demand and supply analysis</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Skill Gaps by District</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {skillGapsData.map((item) => (
            <div key={item.skill} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">{item.skill}</span>
                <span className="text-sm text-gray-600">{item.percentage}% gap</span>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
