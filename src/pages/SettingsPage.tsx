import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"
import { SettingsForm } from "@/features/settings/components/SettingsForm"

export default function SettingsPage() {
  return (
    <PageContainer className="pb-12 bg-gray-50/30 dark:bg-gray-950/30 min-h-screen">
      <PageHeader 
        title="Settings" 
        description="Manage your platform preferences, notifications, and security." 
      />
      <SettingsForm />
    </PageContainer>
  )
}
