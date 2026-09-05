import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { SiteShell } from '@/components/shared/site-shell'
import { appConfig, portalRoutes } from '@/lib/config'

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center py-16">
      <SiteShell>
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Skill Saarthi</p>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{appConfig.tagline}</h1>
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              {appConfig.description} This frontend is the foundation layer only and is ready for future portal,
              analytics, and AI workstreams.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {portalRoutes.map((route) => (
              <Button key={route.href} asChild size="lg" variant={route.label === 'Admin Portal' ? 'outline' : 'default'}>
                <Link href={route.href}>{route.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </SiteShell>
    </main>
  )
}
