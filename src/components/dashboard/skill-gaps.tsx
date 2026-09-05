'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { skillGapsData } from '@/lib/demo-data'

export function SkillGapsAnalytics() {
  return (
    <Card className="col-span-full lg:col-span-1">
      <CardHeader>
        <CardTitle>Top Skill Gaps</CardTitle>
        <p className="text-xs text-gray-500 mt-1">Demand-supply mismatch</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {skillGapsData.map((item) => (
          <div key={item.skill} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-700">{item.skill}</span>
              <span className="font-medium text-gray-900">{item.percentage}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
