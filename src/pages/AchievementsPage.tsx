import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"

export default function AchievementsPage() {
  return (
    <PageContainer>
      <PageHeader title="Achievements" description="Badges, streaks, and milestones you've unlocked." />
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
        <p className="text-gray-500">Achievements coming soon.</p>
      </div>
    </PageContainer>
  )
}
