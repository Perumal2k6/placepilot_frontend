import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"

export default function AdminSettingsPage() {
  return (
    <PageContainer className="pb-12 bg-gray-50/30 dark:bg-gray-950/30 min-h-screen">
      <PageHeader title="System Settings" description="Global portal configuration and integrations." />
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8 shadow-sm text-center">
        <h3 className="text-xl font-bold mb-2">Global Settings (Demo)</h3>
        <p className="text-gray-500 mb-6">Database credentials, API keys, and global feature toggles are locked in the frontend demo environment.</p>
        <div className="text-sm bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 p-4 rounded inline-block">
          Coming Soon in Phase 12 (Backend Integration)
        </div>
      </div>
    </PageContainer>
  )
}
