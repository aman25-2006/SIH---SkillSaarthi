// Demo data for the government portal dashboard

export const dashboardMetrics = {
  totalBeneficiaries: {
    value: 124580,
    change: 8.4,
    trend: 'up' as const,
  },
  trained: {
    value: 98420,
    percentage: 79.0,
    trend: 'up' as const,
  },
  employed: {
    value: 72350,
    change: 6.8,
    trend: 'up' as const,
  },
  employmentRate: {
    value: 73.5,
    change: 4.2,
    trend: 'up' as const,
  },
  activePrograms: {
    value: 48,
    districts: 12,
  },
  skillGapsIdentified: {
    value: 32840,
    source: 'AI detected',
  },
  followUpsDue: {
    value: 4286,
    overdue: 1390,
    trend: 'warning' as const,
  },
  averageWage: {
    value: 18450,
    change: 12.6,
    trend: 'up' as const,
    currency: '₹',
  },
}

export const employmentOutcomeData = [
  { period: '2024', trained: 45000, employed: 28500, employmentRate: 63.3 },
  { period: '2025', trained: 72000, employed: 50400, employmentRate: 70.0 },
  { period: '2026', trained: 98420, employed: 72350, employmentRate: 73.5 },
]

export const wageProgressionData = [
  { period: 'Before Training', wage: 9500 },
  { period: '3 Months', wage: 13200 },
  { period: '6 Months', wage: 15800 },
  { period: '12 Months', wage: 18700 },
  { period: '24 Months', wage: 23400 },
]

export const skillGapsData = [
  { skill: 'Python', percentage: 34 },
  { skill: 'Data Analytics', percentage: 29 },
  { skill: 'Communication', percentage: 26 },
  { skill: 'SQL', percentage: 24 },
  { skill: 'Cloud Computing', percentage: 19 },
  { skill: 'AI/ML', percentage: 17 },
]

export const trainingProviderData = [
  {
    id: '1',
    name: 'ABC Skill Institute',
    district: 'Muzaffarpur',
    enrolled: 2450,
    completed: 91,
    employmentRate: 78,
    averageWage: 19200,
    status: 'Excellent',
  },
  {
    id: '2',
    name: 'XYZ Training Academy',
    district: 'Patna',
    enrolled: 1820,
    completed: 84,
    employmentRate: 69,
    averageWage: 17800,
    status: 'Good',
  },
  {
    id: '3',
    name: 'SkillTech Centre',
    district: 'Gaya',
    enrolled: 1260,
    completed: 94,
    employmentRate: 83,
    averageWage: 21400,
    status: 'Excellent',
  },
  {
    id: '4',
    name: 'Tech Training Hub',
    district: 'Bhagalpur',
    enrolled: 980,
    completed: 79,
    employmentRate: 71,
    averageWage: 18900,
    status: 'Good',
  },
  {
    id: '5',
    name: 'Digital Skills Centre',
    district: 'Nalanda',
    employed: 750,
    completed: 88,
    employmentRate: 75,
    averageWage: 19800,
    status: 'Good',
  },
]

export const aiInsights = [
  {
    id: '1',
    type: 'warning',
    title: 'High Skill Gap Detected',
    description:
      'Data Analytics and Cloud Computing skills are significantly below industry demand in selected districts.',
    recommendation: 'Increase Data Analytics training capacity in the next cohort.',
    icon: '⚠️',
  },
  {
    id: '2',
    type: 'opportunity',
    title: 'Employment Opportunity',
    description:
      'Candidates with Python + SQL skills demonstrate higher employment outcomes.',
    recommendation: 'Introduce combined Python + SQL modules.',
    icon: '📈',
  },
  {
    id: '3',
    type: 'alert',
    title: 'Follow-up Risk',
    description: '1,390 beneficiaries have overdue employment follow-ups.',
    recommendation: 'Trigger automated WhatsApp follow-up campaigns.',
    icon: '🔄',
  },
]

export const recentActivityData = [
  {
    id: '1',
    action: '245 beneficiary records updated',
    icon: '✓',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    action: '86 employment outcomes verified',
    icon: '✓',
    timestamp: '4 hours ago',
  },
  {
    id: '3',
    action: '32 follow-up campaigns completed',
    icon: '✓',
    timestamp: '1 day ago',
  },
  {
    id: '4',
    action: '14 new training batches added',
    icon: '✓',
    timestamp: '2 days ago',
  },
  {
    id: '5',
    action: 'District report generated',
    icon: '✓',
    timestamp: '3 days ago',
  },
]

export const followUpTrackingData = [
  { stage: '3 Months', due: 8240, completed: 7560, pending: 680 },
  { stage: '6 Months', due: 5420, completed: 4890, pending: 530 },
  { stage: '12 Months', due: 3850, completed: 3220, pending: 630 },
  { stage: '24 Months', due: 1920, completed: 1680, pending: 240 },
]

export const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'Home', href: '/officer/dashboard' },
  { id: 'beneficiaries', label: 'Beneficiaries', icon: 'Users', href: '/officer/beneficiaries' },
  { id: 'programs', label: 'Training Programs', icon: 'BookOpen', href: '/officer/programs' },
  {
    id: 'providers',
    label: 'Training Providers',
    icon: 'Building2',
    href: '/officer/providers',
  },
  { id: 'analytics', label: 'Skill Gap Analytics', icon: 'Brain', href: '/officer/analytics' },
  { id: 'outcomes', label: 'Employment Outcomes', icon: 'Briefcase', href: '/officer/outcomes' },
  { id: 'followup', label: 'Follow-up Tracking', icon: 'RotateCw', href: '/officer/followup' },
  { id: 'wages', label: 'Wage Progression', icon: 'TrendingUp', href: '/officer/wages' },
  { id: 'aiinsights', label: 'AI Policy Insights', icon: 'Sparkles', href: '/officer/ai-insights' },
  { id: 'reports', label: 'Reports', icon: 'BarChart3', href: '/officer/reports' },
  { id: 'notifications', label: 'Notifications', icon: 'Bell', href: '/officer/notifications' },
  { id: 'settings', label: 'Settings', icon: 'Settings', href: '/officer/settings' },
]
