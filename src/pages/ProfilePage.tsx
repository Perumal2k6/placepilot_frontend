import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"
import { ProfileDetailsForm } from "@/features/profile/components/ProfileDetailsForm"

export default function ProfilePage() {
  return (
    <PageContainer className="pb-12 bg-gray-50/30 dark:bg-gray-950/30 min-h-screen">
      <PageHeader 
        title="My Profile" 
        description="Manage your personal information, role-specific details, and account settings." 
      />
      <ProfileDetailsForm />
    </PageContainer>
  )
}
