import Link from 'next/link'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Authentication is intentionally not implemented yet. This route only establishes the future auth surface.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <AlertTitle>Foundation only</AlertTitle>
          <AlertDescription>Role-based sign-in flows will be added by the auth workstream later.</AlertDescription>
        </Alert>

        <Button asChild variant="outline">
          <Link href="/">Back to home</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
