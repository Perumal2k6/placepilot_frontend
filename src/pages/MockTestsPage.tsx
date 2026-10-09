import { useState } from "react"
import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"
import { mockTests } from "@/features/mock-tests/data/mockTests"
import { MockTestOverview } from "@/features/mock-tests/components/MockTestOverview"
import { TestInstructions } from "@/features/mock-tests/components/TestInstructions"
import { MockTestSession } from "@/features/mock-tests/components/MockTestSession"
import type { MockTestConfig } from "@/features/mock-tests/types/mockTest"

type PageState = 
  | { mode: "overview" }
  | { mode: "instructions"; test: MockTestConfig }
  | { mode: "exam"; test: MockTestConfig }

export default function MockTestsPage() {
  const [pageState, setPageState] = useState<PageState>({ mode: "overview" })

  return (
    <PageContainer className="pb-12 bg-gray-50/50 dark:bg-gray-950/50 min-h-screen">
      {pageState.mode === "overview" && (
        <PageHeader 
          title="Mock Tests" 
          description="Simulate real placement exams with timed tests, negative marking, and detailed analytics." 
        />
      )}
      
      {pageState.mode === "overview" && (
        <MockTestOverview 
          tests={mockTests} 
          onSelectTest={(test) => setPageState({ mode: "instructions", test })} 
        />
      )}

      {pageState.mode === "instructions" && (
        <TestInstructions 
          test={pageState.test} 
          onStart={() => setPageState({ mode: "exam", test: pageState.test })} 
          onCancel={() => setPageState({ mode: "overview" })} 
        />
      )}

      {pageState.mode === "exam" && (
        <div className="-mx-4 sm:mx-0">
          <MockTestSession 
            config={pageState.test} 
            onExit={() => setPageState({ mode: "overview" })} 
          />
        </div>
      )}
    </PageContainer>
  )
}
