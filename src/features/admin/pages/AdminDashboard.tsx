import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"

export default function AdminDashboard() {
  return (
    <PageContainer>
      <PageHeader title="Admin Dashboard" description="System overview and administration." />
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
        <p className="text-gray-500">Admin dashboard coming soon.</p>
      </div>
    </PageContainer>
  )
}
