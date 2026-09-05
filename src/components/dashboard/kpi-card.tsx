import { cn } from '@/lib/utils'
import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react'

interface KPICardProps {
  title: string
  value: string | number
  subtitle?: string
  change?: number
  trend?: 'up' | 'down' | 'warning'
  icon?: React.ReactNode
  className?: string
}

export function KPICard({
  title,
  value,
  subtitle,
  change,
  trend,
  icon,
  className,
}: KPICardProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md',
        className,
      )}
    >
      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>

      <div className="mb-3 flex items-baseline gap-2">
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        {change !== undefined && (
          <div
            className={cn('flex items-center gap-1 text-xs font-medium', {
              'text-green-600': trend === 'up',
              'text-red-600': trend === 'down',
              'text-orange-600': trend === 'warning',
            })}
          >
            {trend === 'up' && <TrendingUp className="h-4 w-4" />}
            {trend === 'down' && <TrendingDown className="h-4 w-4" />}
            {trend === 'warning' && <AlertCircle className="h-4 w-4" />}
            {Math.abs(change)}%
          </div>
        )}
      </div>

      {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
    </div>
  )
}
