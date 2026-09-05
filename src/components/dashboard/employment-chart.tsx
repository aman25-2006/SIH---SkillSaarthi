'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { employmentOutcomeData } from '@/lib/demo-data'
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export function EmploymentOutcomeChart() {
  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Employment Outcomes</CardTitle>
            <p className="text-xs text-gray-500 mt-1">Year-over-year comparison</p>
          </div>
          <div className="flex gap-2">
            <select className="text-xs border border-gray-200 rounded px-2 py-1">
              <option>All States</option>
            </select>
            <select className="text-xs border border-gray-200 rounded px-2 py-1">
              <option>All Programs</option>
            </select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={employmentOutcomeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="period" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Bar dataKey="trained" fill="#3b82f6" name="Trained" />
            <Bar dataKey="employed" fill="#10b981" name="Employed" />
            <Line
              type="monotone"
              dataKey="employmentRate"
              stroke="#f59e0b"
              name="Employment Rate (%)"
              yAxisId="right"
              strokeWidth={2}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
