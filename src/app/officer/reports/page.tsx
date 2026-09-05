'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart3 } from 'lucide-react'

export default function ReportsPage() {
  const reports = [
    { id: '1', name: 'Monthly Employment Report', date: 'Sep 2026', type: 'Employment' },
    { id: '2', name: 'Quarterly Skill Gap Analysis', date: 'Q3 2026', type: 'Analytics' },
    { id: '3', name: 'Provider Performance Summary', date: 'Sep 2026', type: 'Performance' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <BarChart3 className="h-8 w-8 text-blue-600" />
          Reports
        </h1>
        <p className="mt-1 text-gray-600">Generate and manage government reports</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Available Reports</CardTitle>
            <Button>Generate New Report</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {reports.map((report) => (
              <div key={report.id} className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                <div>
                  <div className="font-medium text-gray-900">{report.name}</div>
                  <div className="text-sm text-gray-500">{report.type} • {report.date}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
