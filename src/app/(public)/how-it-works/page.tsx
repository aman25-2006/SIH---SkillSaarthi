import { PageSection } from '@/components/shared/page-section'
import { RouteShell } from '@/components/shared/route-shell'

export default function HowItWorksPage() {
  return (
    <>
      <RouteShell
        eyebrow="Public foundation"
        title="How It Works"
        description="A structural placeholder for the future onboarding and platform explanation content."
      />
      <PageSection
        title="Next step"
        description="Product teams can now add step-by-step content here without changing the app architecture."
      />
    </>
  )
}
