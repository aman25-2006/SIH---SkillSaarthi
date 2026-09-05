'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { followUpTrackingData } from '@/lib/demo-data'
import { ArrowRight } from 'lucide-react'

export function FollowUpTracking() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Longitudinal Follow-up Tracking</CardTitle>
        <p className="text-xs text-gray-500 mt-1">Employment status and wage progression tracking</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Timeline */}
          <div className="flex items-center justify-between gap-2 mb-8">
            <div className="flex-1 text-center">
              <div className="text-sm font-medium text-gray-900">Training Completed</div>
              <div className="text-xs text-gray-500 mt-1">Baseline</div>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-300" />

            <div className="flex-1 text-center">
              <div className="text-sm font-medium text-gray-900">3 Months</div>
              <div className="text-xs text-gray-500 mt-1">Employment Status</div>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-300" />

            <div className="flex-1 text-center">
              <div className="text-sm font-medium text-gray-900">6 Months</div>
              <div className="text-xs text-gray-500 mt-1">Job Retention</div>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-300" />

            <div className="flex-1 text-center">
              <div className="text-sm font-medium text-gray-900">12 Months</div>
              <div className="text-xs text-gray-500 mt-1">Progression</div>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-300" />

            <div className="flex-1 text-center">
              <div className="text-sm font-medium text-gray-900">24 Months</div>
              <div className="text-xs text-gray-500 mt-1">Long-term Impact</div>
            </div>
          </div>

          {/* Status Cards */}
          <div className="grid gap-4 md:grid-cols-4">
            {followUpTrackingData.map((item, index) => (
              <div key={index} className="rounded-lg border border-gray-200 p-4">
                <div className="text-sm font-medium text-gray-900 mb-3">{item.stage}</div>

                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Total Due</div>
                    <div className="text-lg font-bold text-gray-900">{item.due.toLocaleString()}</div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="text-green-600 font-medium">Completed</span>
                        <span className="text-green-600 font-medium">
                          {((item.completed / item.due) * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-200">
                        <div
                          className="h-full rounded-full bg-green-500"
                          style={{ width: `${(item.completed / item.due) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="text-orange-600 font-medium">Pending</span>
                        <span className="text-orange-600 font-medium">
                          {((item.pending / item.due) * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-200">
                        <div
                          className="h-full rounded-full bg-orange-500"
                          style={{ width: `${(item.pending / item.due) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
