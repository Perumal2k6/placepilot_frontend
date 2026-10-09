import { PageContainer } from "@/components/common/PageContainer"
import { DashboardWelcome } from "@/features/dashboard/components/DashboardWelcome"
import { ReadinessScoreCard } from "@/features/dashboard/components/ReadinessScoreCard"
import { DashboardStats } from "@/features/dashboard/components/DashboardStats"
import { PerformanceChart } from "@/features/dashboard/components/PerformanceChart"
import { PracticeCategoryGrid } from "@/features/dashboard/components/PracticeCategoryGrid"
import { ContinueLearning } from "@/features/dashboard/components/ContinueLearning"
import { WeeklyActivity } from "@/features/dashboard/components/WeeklyActivity"
import { WeeklyGoals } from "@/features/dashboard/components/WeeklyGoals"

export default function DashboardPage() {
  return (
    <PageContainer className="space-y-6 pb-12">
      <DashboardWelcome />
      
      <DashboardStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col h-full">
          <PerformanceChart />
        </div>
        <div className="lg:col-span-1 h-full">
          <ReadinessScoreCard />
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Practice Modules</h3>
        <PracticeCategoryGrid />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        <div className="lg:col-span-1">
          <ContinueLearning />
        </div>
        <div className="lg:col-span-1 flex flex-col gap-6">
          <WeeklyActivity />
          <WeeklyGoals />
        </div>
      </div>
    </PageContainer>
  )
}
