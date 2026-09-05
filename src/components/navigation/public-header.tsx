import Link from 'next/link'

import { publicNavigation } from '@/lib/constants'
import { appConfig } from '@/lib/config'
import { SiteShell } from '@/components/shared/site-shell'
import { Button } from '@/components/ui/button'

export function PublicHeader() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <SiteShell className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-sm font-semibold tracking-wide text-foreground">
          {appConfig.name}
        </Link>

        <nav aria-label="Public navigation" className="hidden items-center gap-6 md:flex">
          {publicNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm" variant="outline">
          <Link href="/login">Login</Link>
        </Button>
      </SiteShell>
    </header>
  )
}
