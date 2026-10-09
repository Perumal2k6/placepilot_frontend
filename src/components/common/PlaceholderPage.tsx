import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <PageContainer>
      <PageHeader title={title} description={`${title} functionality is under development.`} />
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
        <p className="text-gray-500">{title} coming soon.</p>
      </div>
    </PageContainer>
  )
}
