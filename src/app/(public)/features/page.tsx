import { PageSection } from '@/components/shared/page-section'
import { RouteShell } from '@/components/shared/route-shell'

export default function FeaturesPage() {
  return (
    <>
      <RouteShell
        eyebrow="Public foundation"
        title="Features"
        description="Reserved for future product narrative. The page exists to confirm clean routing and maintainable layout behavior."
      />
      <PageSection
        title="Extensible by design"
        description="This route is intentionally restrained so the team can add verified content later without rewiring the shell."
      />
    </>
  )
}
