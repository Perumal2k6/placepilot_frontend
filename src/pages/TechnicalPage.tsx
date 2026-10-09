import { useState } from "react"
import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"
import { TechnicalOverview } from "@/features/technical/components/TechnicalOverview"
import { TechnicalSession } from "@/features/technical/components/TechnicalSession"
import type { SessionConfig } from "@/features/technical/types/technical"

export default function TechnicalPage() {
  const [sessionConfig, setSessionConfig] = useState<SessionConfig | null>(null)

  return (
    <PageContainer className="pb-12">
      {!sessionConfig && (
        <PageHeader 
          title="Technical Practice" 
          description="Master programming languages, core computer science concepts, and web technologies." 
        />
      )}
      
      {sessionConfig ? (
        <TechnicalSession config={sessionConfig} onExit={() => setSessionConfig(null)} />
      ) : (
        <TechnicalOverview onStartSession={setSessionConfig} />
      )}
    </PageContainer>
  )
}
