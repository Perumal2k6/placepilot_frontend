import { useState } from "react"
import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"
import { InterviewOverview } from "@/features/interview/components/InterviewOverview"
import { InterviewSession } from "@/features/interview/components/InterviewSession"
import { useInterviewSession } from "@/features/interview/hooks/useInterviewSession"

type PageState = 
  | { mode: "overview" }
  | { mode: "category"; categoryId: string }
  | { mode: "quickReview" }

export default function InterviewPage() {
  const [pageState, setPageState] = useState<PageState>({ mode: "overview" })
  const { bookmarks } = useInterviewSession()
  
  const bookmarkedCount = Object.values(bookmarks).filter(Boolean).length

  return (
    <PageContainer className="pb-12">
      {pageState.mode === "overview" && (
        <PageHeader 
          title="Interview Preparation" 
          description="Practice HR, Technical, and Placement interview questions with frameworks and tips." 
        />
      )}
      
      {pageState.mode === "overview" ? (
        <InterviewOverview 
          bookmarkedCount={bookmarkedCount}
          onStartCategory={(id) => setPageState({ mode: "category", categoryId: id })}
          onStartQuickReview={() => setPageState({ mode: "quickReview" })}
        />
      ) : (
        <InterviewSession 
          categoryId={pageState.mode === "category" ? pageState.categoryId : undefined}
          isQuickReview={pageState.mode === "quickReview"}
          onExit={() => setPageState({ mode: "overview" })}
        />
      )}
    </PageContainer>
  )
}
