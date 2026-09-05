import type { ReactNode } from 'react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type RouteShellProps = {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}

export function RouteShell({ eyebrow, title, description, children }: RouteShellProps) {
  return (
    <div className="py-10 sm:py-14">
      <Card>
        <CardHeader className="space-y-3">
          <Badge variant="secondary" className="w-fit">
            {eyebrow}
          </Badge>
          <CardTitle className="text-2xl sm:text-3xl">{title}</CardTitle>
          <CardDescription className="max-w-2xl text-sm sm:text-base">{description}</CardDescription>
        </CardHeader>
        {children ? <CardContent>{children}</CardContent> : null}
      </Card>
    </div>
  )
}
