import { PageSection } from '@/components/shared/page-section'
import { RouteShell } from '@/components/shared/route-shell'

export default function AboutPage() {
  return (
    <>
      <RouteShell
        eyebrow="Public foundation"
        title="About Skill Saarthi"
        description="A placeholder public page that establishes routing, typography, and spacing for the eventual information architecture."
      />
      <PageSection
        title="What is available now"
        description="This foundation intentionally avoids business logic. It exists to support future content, portal work, and operational pages."
      />
    </>
  )
}
