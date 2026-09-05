import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type PageSectionProps = {
  title: string
  description: string
  children?: ReactNode
  className?: string
}

export function PageSection({ title, description, children, className }: PageSectionProps) {
  return (
    <section className={cn('space-y-6', className)}>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">{description}</p>
      </div>
      {children}
    </section>
  )
}
