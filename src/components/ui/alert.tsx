import * as React from 'react'
import { AlertTriangle } from 'lucide-react'

import { cn } from '@/lib/utils'

function Alert({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div role="alert" className={cn('relative w-full rounded-xl border border-border bg-card p-4 text-card-foreground', className)} {...props} />
}

function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h5 className={cn('mb-1 flex items-center gap-2 font-semibold leading-none tracking-tight', className)} {...props} />
}

function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <div className={cn('text-sm text-muted-foreground', className)} {...props} />
}

function WarningAlert({ title, description }: { title: string; description: string }) {
  return (
    <Alert>
      <AlertTitle>
        <AlertTriangle className="h-4 w-4" />
        {title}
      </AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}

export { Alert, AlertDescription, AlertTitle, WarningAlert }
