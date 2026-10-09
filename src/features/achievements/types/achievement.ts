export type AchievementCategory = "Milestone" | "Aptitude" | "Technical" | "Coding" | "MockTest"

export interface Achievement {
  id: string
  title: string
  description: string
  category: AchievementCategory
  icon: string // We will map this to a Lucide icon component name
  criteriaType: "TestCompleted" | "QuestionsAnswered" | "AccuracyThreshold" | "Streak"
  targetValue: number
  isUnlocked: boolean
  currentProgress?: number
}
