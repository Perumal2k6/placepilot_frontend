import type { Achievement } from "../types/achievement"
import type { HistoricalResult } from "@/features/analytics/types/analytics"

export const baseAchievements: Achievement[] = [
  {
    id: "ach_1",
    title: "First Step",
    description: "Complete your first practice session or mock test.",
    category: "Milestone",
    icon: "Footprints",
    criteriaType: "TestCompleted",
    targetValue: 1,
    isUnlocked: false
  },
  {
    id: "ach_2",
    title: "Tenacious Learner",
    description: "Complete 10 practice sessions or mock tests.",
    category: "Milestone",
    icon: "Target",
    criteriaType: "TestCompleted",
    targetValue: 10,
    isUnlocked: false
  },
  {
    id: "ach_3",
    title: "Aptitude Apprentice",
    description: "Answer 20 Aptitude questions correctly.",
    category: "Aptitude",
    icon: "Brain",
    criteriaType: "QuestionsAnswered",
    targetValue: 20,
    isUnlocked: false
  },
  {
    id: "ach_4",
    title: "Mock Test Master",
    description: "Complete 5 Mock Tests.",
    category: "MockTest",
    icon: "Trophy",
    criteriaType: "TestCompleted",
    targetValue: 5,
    isUnlocked: false
  },
  {
    id: "ach_5",
    title: "Perfectionist",
    description: "Achieve 100% accuracy in any session.",
    category: "Milestone",
    icon: "Star",
    criteriaType: "AccuracyThreshold",
    targetValue: 100,
    isUnlocked: false
  }
]

export function calculateAchievements(results: HistoricalResult[]): Achievement[] {
  const achievements = [...baseAchievements.map(a => ({ ...a }))]

  const totalSessions = results.length
  const mockTestsCount = results.filter(r => r.type === "Mock Test").length
  const aptitudeCorrectCount = results
    .filter(r => r.type === "Aptitude Practice")
    .reduce((sum, r) => sum + r.correctCount, 0)
  
  const hasPerfectAccuracy = results.some(r => r.accuracy === 100 && r.correctCount > 0)

  return achievements.map(ach => {
    let progress = 0
    let unlocked = false

    if (ach.id === "ach_1") {
      progress = totalSessions
      unlocked = totalSessions >= ach.targetValue
    } else if (ach.id === "ach_2") {
      progress = totalSessions
      unlocked = totalSessions >= ach.targetValue
    } else if (ach.id === "ach_3") {
      progress = aptitudeCorrectCount
      unlocked = aptitudeCorrectCount >= ach.targetValue
    } else if (ach.id === "ach_4") {
      progress = mockTestsCount
      unlocked = mockTestsCount >= ach.targetValue
    } else if (ach.id === "ach_5") {
      progress = hasPerfectAccuracy ? 100 : 0
      unlocked = hasPerfectAccuracy
    }

    return {
      ...ach,
      isUnlocked: unlocked,
      currentProgress: Math.min(progress, ach.targetValue)
    }
  })
}
