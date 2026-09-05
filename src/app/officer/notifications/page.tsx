'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Bell } from 'lucide-react'

export default function NotificationsPage() {
  const notifications = [
    { id: '1', title: 'New Beneficiary Batch', message: '245 new beneficiaries enrolled', time: '2 hours ago', type: 'info' },
    { id: '2', title: 'Follow-up Alert', message: '1,390 overdue employment follow-ups', time: '4 hours ago', type: 'warning' },
    { id: '3', title: 'Report Ready', message: 'Monthly employment report is ready', time: '1 day ago', type: 'success' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <Bell className="h-8 w-8 text-blue-600" />
          Notifications
        </h1>
        <p className="mt-1 text-gray-600">Government portal updates and alerts</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {notifications.map((notif) => (
              <div key={notif.id} className="flex items-start justify-between rounded-lg border border-gray-200 p-4">
                <div>
                  <div className="font-medium text-gray-900">{notif.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{notif.message}</div>
                  <div className="text-xs text-gray-500 mt-2">{notif.time}</div>
                </div>
                <Badge variant={notif.type === 'warning' ? 'secondary' : 'default'}>{notif.type}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
