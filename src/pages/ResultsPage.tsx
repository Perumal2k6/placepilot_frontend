import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"
import { demoHistoricalResults } from "@/features/analytics/data/demoResults"
import { calculateAnalyticsSummary, getTopicPerformances } from "@/features/analytics/utils/calculateAnalytics"
import { PerformanceOverview } from "@/features/analytics/components/PerformanceOverview"
import { PerformanceTrendChart } from "@/features/analytics/components/PerformanceTrendChart"
import { SubjectPerformanceChart } from "@/features/analytics/components/SubjectPerformanceChart"
import { ResultsTable } from "@/features/analytics/components/ResultsTable"

export default function ResultsPage() {
  const summary = calculateAnalyticsSummary(demoHistoricalResults)
  const topics = getTopicPerformances(demoHistoricalResults)

  return (
    <PageContainer className="pb-12 bg-gray-50/30 dark:bg-gray-950/30">
      <PageHeader 
        title="Results & Analytics" 
        description="Track your performance across mock tests and practice sessions." 
      />

      <PerformanceOverview summary={summary} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <PerformanceTrendChart results={demoHistoricalResults} />
        <SubjectPerformanceChart topics={topics} />
      </div>

      <ResultsTable results={demoHistoricalResults} />
    </PageContainer>
  )
}
