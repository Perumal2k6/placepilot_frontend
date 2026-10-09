export type SessionType = "Mock Test" | "Aptitude Practice" | "Technical Practice" | "Coding Practice"

export interface HistoricalResult {
  id: string
  title: string
  category: string
  type: SessionType
  timestamp: string // ISO date string
  score: number
  maxScore: number
  accuracy: number
  correctCount: number
  incorrectCount: number
  unansweredCount: number
  durationMinutes?: number
  isDemoData: boolean
}

export interface TopicPerformance {
  topic: string
  accuracy: number
  questionsAttempted: number
}

export interface AnalyticsSummary {
  totalTestsCompleted: number
  averageAccuracy: number
  totalQuestionsAnswered: number
  totalPracticeHours: number
}
