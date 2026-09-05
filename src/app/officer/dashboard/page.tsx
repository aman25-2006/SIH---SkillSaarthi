'use client'

import { KPICard } from '@/components/dashboard/kpi-card'
import { EmploymentOutcomeChart } from '@/components/dashboard/employment-chart'
import { WageProgressionChart } from '@/components/dashboard/wage-chart'
import { SkillGapsAnalytics } from '@/components/dashboard/skill-gaps'
import { AIInsights } from '@/components/dashboard/ai-insights'
import { ProviderPerformanceTable } from '@/components/dashboard/provider-table'
import { FollowUpTracking } from '@/components/dashboard/followup-tracking'
import { RecentActivityAndQuickActions } from '@/components/dashboard/activity-actions'
import { Button } from '@/components/ui/button'
import { dashboardMetrics } from '@/lib/demo-data'
import {
  Users,
  BookOpen,
  TrendingUp,
  Percent,
  BarChart3,
  Brain,
  AlertCircle,
  DollarSign,
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Good Morning, Government Officer</h1>
          <p className="mt-2 text-gray-600">
            Monitor skilling outcomes, employment and long-term impact across beneficiaries.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap justify-end">
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:border-gray-400">
            <option>September 2026</option>
            <option>August 2026</option>
            <option>July 2026</option>
          </select>
          <Button variant="outline">Export Report</Button>
          <Button>Generate Report</Button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Total Beneficiaries"
          value={dashboardMetrics.totalBeneficiaries.value.toLocaleString()}
          subtitle={`↑ ${dashboardMetrics.totalBeneficiaries.change}% this month`}
          trend="up"
          icon={<Users className="h-5 w-5" />}
        />
        <KPICard
          title="Trained"
          value={dashboardMetrics.trained.value.toLocaleString()}
          subtitle={`${dashboardMetrics.trained.percentage}% of beneficiaries`}
          icon={<BookOpen className="h-5 w-5" />}
        />
        <KPICard
          title="Employed"
          value={dashboardMetrics.employed.value.toLocaleString()}
          subtitle={`↑ ${dashboardMetrics.employed.change}% growth`}
          trend="up"
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <KPICard
          title="Employment Rate"
          value={`${dashboardMetrics.employmentRate.value}%`}
          subtitle={`↑ ${dashboardMetrics.employmentRate.change}%`}
          trend="up"
          icon={<Percent className="h-5 w-5" />}
        />
        <KPICard
          title="Active Programs"
          value={dashboardMetrics.activePrograms.value}
          subtitle={`Across ${dashboardMetrics.activePrograms.districts} districts`}
          icon={<BarChart3 className="h-5 w-5" />}
        />
        <KPICard
          title="Skill Gaps Identified"
          value={dashboardMetrics.skillGapsIdentified.value.toLocaleString()}
          subtitle={dashboardMetrics.skillGapsIdentified.source}
          icon={<Brain className="h-5 w-5" />}
        />
        <KPICard
          title="Follow-ups Due"
          value={dashboardMetrics.followUpsDue.value.toLocaleString()}
          subtitle={`${dashboardMetrics.followUpsDue.overdue} overdue`}
          trend="warning"
          icon={<AlertCircle className="h-5 w-5" />}
        />
        <KPICard
          title="Average Wage"
          value={`₹${dashboardMetrics.averageWage.value.toLocaleString()}`}
          subtitle={`↑ ${dashboardMetrics.averageWage.change}%`}
          trend="up"
          icon={<DollarSign className="h-5 w-5" />}
        />
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        <EmploymentOutcomeChart />
        <WageProgressionChart />
        <SkillGapsAnalytics />
      </div>

      {/* AI Insights */}
      <AIInsights />

      {/* Provider Performance */}
      <ProviderPerformanceTable />

      {/* Follow-up Tracking */}
      <FollowUpTracking />

      {/* Recent Activity & Quick Actions */}
      <RecentActivityAndQuickActions />
    </div>
  )
}
