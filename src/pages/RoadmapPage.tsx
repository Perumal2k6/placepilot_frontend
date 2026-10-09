import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"
import { useState, useMemo } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Roadmap imports
import { demoRoadmapActivities } from "@/features/roadmap/data/roadmapActivities"
import { RoadmapOverview } from "@/features/roadmap/components/RoadmapOverview"
import { WeeklyPlan } from "@/features/roadmap/components/WeeklyPlan"

// Achievement imports
import { calculateAchievements } from "@/features/achievements/utils/calculateAchievements"
import { AchievementGrid } from "@/features/achievements/components/AchievementGrid"
import { demoHistoricalResults } from "@/features/analytics/data/demoResults"

export default function RoadmapPage() {
  const [activities, setActivities] = useState(demoRoadmapActivities)

  const achievements = useMemo(() => {
    return calculateAchievements(demoHistoricalResults)
  }, [])

  const toggleStatus = (id: string) => {
    setActivities(prev => prev.map(a => 
      a.id === id ? { ...a, status: a.status === "Pending" ? "Completed" : "Pending" } : a
    ))
  }

  const progress = {
    totalActivities: activities.length,
    completedActivities: activities.filter(a => a.status === "Completed").length,
    completionPercentage: Math.round((activities.filter(a => a.status === "Completed").length / activities.length) * 100) || 0
  }

  return (
    <PageContainer className="pb-12 bg-gray-50/30 dark:bg-gray-950/30">
      <PageHeader 
        title="Learning Roadmap & Achievements" 
        description="Follow your personalized weekly plan and track your unlocked milestones." 
      />

      <Tabs defaultValue="roadmap" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="roadmap">Weekly Roadmap</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="roadmap" className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/50 p-4 rounded-lg text-sm text-blue-800 dark:text-blue-300 mb-6">
            <strong>Note:</strong> These recommendations are calculated locally based on your recent demo mock tests and practice sessions.
          </div>
          
          <RoadmapOverview progress={progress} />
          
          <div className="mt-8">
            <WeeklyPlan activities={activities} onToggleStatus={toggleStatus} />
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="animate-in fade-in duration-300 pt-4">
          <AchievementGrid achievements={achievements} />
        </TabsContent>
      </Tabs>
    </PageContainer>
  )
}
