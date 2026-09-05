'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import * as Icons from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigationItems } from '@/lib/demo-data'

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div
      className={cn(
        'fixed left-0 top-0 z-40 flex flex-col border-r border-gray-200 bg-white transition-all duration-300 pt-20',
        isCollapsed ? 'w-20' : 'w-64',
      )}
      style={{ height: 'calc(100vh - 80px)' }}
    >
      {/* Collapse Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="mx-4 mb-4 flex items-center justify-center rounded-lg p-2 hover:bg-gray-100"
        title={isCollapsed ? 'Expand' : 'Collapse'}
      >
        <ChevronLeft className={cn('h-5 w-5 transition-transform', isCollapsed && 'rotate-180')} />
      </button>

      {/* Logo Section */}
      <div className="mb-6 border-b border-gray-200 px-4 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-800">
            <span className="text-lg font-bold text-white">S</span>
          </div>
          {!isCollapsed && (
            <div>
              <div className="font-bold text-gray-900">Skill Saarthi</div>
              <div className="text-xs text-gray-500">Government Portal</div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-2">
        {navigationItems.map((item) => {
          // Get the icon component
          const IconComponent = Icons[item.icon as keyof typeof Icons] as React.ComponentType<
            { className?: string }
          >
          const isActive = pathname === item.href || pathname.startsWith(item.href)

          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                  : 'text-gray-700 hover:bg-gray-100',
              )}
              title={isCollapsed ? item.label : undefined}
            >
              {IconComponent && <IconComponent className="h-5 w-5 flex-shrink-0" />}
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Profile Section */}
      <div className="border-t border-gray-200 p-4">
        {!isCollapsed ? (
          <div className="text-xs">
            <div className="font-medium text-gray-900">Logged in as</div>
            <div className="mt-1 text-gray-700">Government Officer</div>
            <div className="mt-1 text-gray-500">Skill Development Dept.</div>
          </div>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
            <span className="text-sm font-bold text-blue-600">GO</span>
          </div>
        )}
      </div>
    </div>
  )
}
