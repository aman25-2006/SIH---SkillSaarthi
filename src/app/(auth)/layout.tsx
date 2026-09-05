import type { ReactNode } from 'react'

import { SiteShell } from '@/components/shared/site-shell'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen items-center py-16">
      <SiteShell className="max-w-2xl">{children}</SiteShell>
    </main>
  )
}
