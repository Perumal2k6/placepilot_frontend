import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"

export default function AnalyticsPage() {
  return (
    <PageContainer>
      <PageHeader title="Analytics" description="Deep dive into your performance metrics and weak areas." />
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
        <p className="text-gray-500">Analytics coming soon.</p>
      </div>
    </PageContainer>
  )
}
