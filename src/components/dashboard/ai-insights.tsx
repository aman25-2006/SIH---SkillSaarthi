'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { aiInsights } from '@/lib/demo-data'

export function AIInsights() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <span className="text-xl">🤖</span>
          <div>
            <CardTitle>AI-Powered Policy Insights</CardTitle>
            <p className="text-xs text-gray-500 mt-1">Actionable recommendations</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          {aiInsights.map((insight) => {
            const bgColors: Record<string, string> = {
              warning: 'bg-amber-50 border-amber-200',
              opportunity: 'bg-green-50 border-green-200',
              alert: 'bg-orange-50 border-orange-200',
            }

            const textColors: Record<string, string> = {
              warning: 'text-amber-900',
              opportunity: 'text-green-900',
              alert: 'text-orange-900',
            }

            return (
              <div
                key={insight.id}
                className={`rounded-lg border p-4 ${bgColors[insight.type] || ''}`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{insight.icon}</span>
                  <div className="flex-1">
                    <h4 className={`font-medium text-sm ${textColors[insight.type] || ''}`}>
                      {insight.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-2">{insight.description}</p>
                    <p className="text-xs font-medium text-gray-700 mt-3 border-t border-opacity-20 pt-2">
                      Recommended: {insight.recommendation}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-4">
          <Button variant="outline" className="w-full text-sm">
            View AI Recommendations
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
