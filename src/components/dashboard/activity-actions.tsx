'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { recentActivityData } from '@/lib/demo-data'
import {
  UserPlus,
  BookOpen,
  Building2,
  RotateCw,
  BarChart3,
  Download,
} from 'lucide-react'

const quickActions = [
  { label: 'Add Beneficiary', icon: UserPlus },
  { label: 'Add Training Program', icon: BookOpen },
  { label: 'Register Provider', icon: Building2 },
  { label: 'Trigger Follow-up', icon: RotateCw },
  { label: 'Generate Report', icon: BarChart3 },
  { label: 'Export Data', icon: Download },
]

export function RecentActivityAndQuickActions() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <p className="text-xs text-gray-500 mt-1">Latest government portal actions</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivityData.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3 border-b border-gray-100 pb-3 last:border-0"
              >
                <div className="mt-1 text-lg">{item.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{item.action}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <p className="text-xs text-gray-500 mt-1">Frequently used operations</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 h-auto py-3 text-xs justify-start"
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="text-left">{action.label}</span>
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
