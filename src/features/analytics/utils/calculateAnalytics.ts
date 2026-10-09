import type { HistoricalResult, AnalyticsSummary, TopicPerformance } from "../types/analytics"

export function calculateAnalyticsSummary(results: HistoricalResult[]): AnalyticsSummary {
  if (!results || results.length === 0) {
    return {
      totalTestsCompleted: 0,
      averageAccuracy: 0,
      totalQuestionsAnswered: 0,
      totalPracticeHours: 0
    }
  }

  const mockTests = results.filter(r => r.type === "Mock Test")
  
  const totalQuestions = results.reduce((acc, curr) => acc + curr.correctCount + curr.incorrectCount, 0)
  
  const totalAccuracySum = results.reduce((acc, curr) => acc + curr.accuracy, 0)
  const averageAccuracy = Math.round(totalAccuracySum / results.length)
  
  const totalDurationMinutes = results.reduce((acc, curr) => acc + (curr.durationMinutes || 0), 0)
  const totalPracticeHours = Math.round((totalDurationMinutes / 60) * 10) / 10

  return {
    totalTestsCompleted: mockTests.length,
    averageAccuracy,
    totalQuestionsAnswered: totalQuestions,
    totalPracticeHours
  }
}

export function getTopicPerformances(results: HistoricalResult[]): TopicPerformance[] {
  // Aggregate by category
  const map: Record<string, { correct: number, totalAttempted: number }> = {}
  
  results.forEach(r => {
    if (!map[r.category]) {
      map[r.category] = { correct: 0, totalAttempted: 0 }
    }
    map[r.category].correct += r.correctCount
    map[r.category].totalAttempted += (r.correctCount + r.incorrectCount)
  })

  return Object.entries(map).map(([topic, stats]) => ({
    topic,
    questionsAttempted: stats.totalAttempted,
    accuracy: stats.totalAttempted > 0 ? Math.round((stats.correct / stats.totalAttempted) * 100) : 0
  })).sort((a, b) => b.accuracy - a.accuracy) // Sort by accuracy descending
}
