'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { wageProgressionData } from '@/lib/demo-data'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export function WageProgressionChart() {
  const wageDifference = 23400 - 9500
  const percentageIncrease = ((wageDifference / 9500) * 100).toFixed(0)

  return (
    <Card className="col-span-full lg:col-span-1">
      <CardHeader>
        <CardTitle>Average Wage Progression</CardTitle>
        <p className="text-xs text-gray-500 mt-1">24-month tracking</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={wageProgressionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="period" stroke="#6b7280" angle={-45} height={80} interval={0} />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
              formatter={(value) => `₹${value?.toLocaleString?.()}`}
            />
            <Line
              type="monotone"
              dataKey="wage"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ fill: '#10b981', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="rounded-lg bg-green-50 p-4">
          <p className="text-xs font-medium text-gray-700">
            Average beneficiary income increased by <span className="font-bold">{percentageIncrease}%</span> over 24
            months.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
