'use client'

import { Bell, ChevronDown } from 'lucide-react'

export function TopHeader() {
  return (
    <>
      {/* Government Info Bar */}
      <div className="border-b border-gray-200 bg-gray-50 px-6 py-2.5 text-xs text-gray-600">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium text-gray-900">Government Skill Development Portal</div>
            <div className="text-gray-500">
              Digital Platform for Skilling, Employment & Outcome Tracking
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="hover:text-gray-900">English | हिंदी</button>
            <button className="hover:text-gray-900">Accessibility</button>
            <button className="hover:text-gray-900">Help</button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200 bg-white px-6 py-4 sticky top-0 z-30">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">SKILL SAARTHI</h1>
            <p className="text-xs text-gray-500">Skilling • Employment • Impact</p>
          </div>

          <div className="flex items-center gap-6">
            <input
              type="text"
              placeholder="Search beneficiaries, programs..."
              className="w-64 rounded-lg border border-gray-300 px-4 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            />

            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-bold text-blue-600">GO</span>
              </div>
              <span className="text-sm">Officer</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
