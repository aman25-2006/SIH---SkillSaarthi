import type { ReactNode } from 'react'

import { PublicHeader } from '@/components/navigation/public-header'

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicHeader />
      <main>{children}</main>
    </div>
  )
}
