import type { ReactNode } from 'react'

import { RouteShell } from '@/components/shared/route-shell'
import { SiteShell } from '@/components/shared/site-shell'

export default function StudentLayout({ children }: { children: ReactNode }) {
  return (
    <main className="py-10 sm:py-14">
      <SiteShell>
        <RouteShell
          eyebrow="Student portal"
          title="Student Portal Foundation"
          description="Reserved for the student workstream. No student business logic is implemented in this task."
        >
          {children}
        </RouteShell>
      </SiteShell>
    </main>
  )
}
