import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"
import { CodingOverview } from "@/features/coding/components/CodingOverview"

export default function CodingPage() {
  return (
    <PageContainer>
      <PageHeader 
        title="Coding Practice" 
        description="Solve data structures and algorithms problems to prepare for technical interviews." 
      />
      <CodingOverview />
    </PageContainer>
  )
}
