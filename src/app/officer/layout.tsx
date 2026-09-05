import { Sidebar } from '@/components/navigation/sidebar'
import { TopHeader } from '@/components/navigation/top-header'
import { Footer } from '@/components/shared/footer'
import { ReactNode } from 'react'

export default function OfficerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopHeader />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-0 pt-20 lg:ml-64">
          <div className="p-6 md:p-8">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
