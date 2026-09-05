import type { ReactNode } from 'react'

import { RouteShell } from '@/components/shared/route-shell'
import { SiteShell } from '@/components/shared/site-shell'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <main className="py-10 sm:py-14">
      <SiteShell>
        <RouteShell
          eyebrow="Admin portal"
          title="Admin Portal Foundation"
          description="Reserved for the public admin and government reporting workstream. No operational logic is present yet."
        >
          {children}
        </RouteShell>
      </SiteShell>
    </main>
  )
}
