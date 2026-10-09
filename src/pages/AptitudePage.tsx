import { useState } from "react"
import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"
import { AptitudeOverview } from "@/features/aptitude/components/AptitudeOverview"
import { AptitudeSession } from "@/features/aptitude/components/AptitudeSession"
import type { SessionConfig } from "@/features/aptitude/types/aptitude"

export default function AptitudePage() {
  const [sessionConfig, setSessionConfig] = useState<SessionConfig | null>(null)

  return (
    <PageContainer className="pb-12">
      {!sessionConfig && (
        <PageHeader 
          title="Aptitude Practice" 
          description="Master quantitative, logical, and verbal reasoning skills for your placements." 
        />
      )}
      
      {sessionConfig ? (
        <AptitudeSession config={sessionConfig} onExit={() => setSessionConfig(null)} />
      ) : (
        <AptitudeOverview onStartSession={setSessionConfig} />
      )}
    </PageContainer>
  )
}
