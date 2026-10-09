import { describe, it, expect } from 'vitest'
import { calculateAnalyticsSummary } from './calculateAnalytics'
import type { HistoricalResult } from '../types/analytics'

describe('calculateAnalyticsSummary', () => {
  it('returns zeroes for empty input', () => {
    const result = calculateAnalyticsSummary([])
    expect(result.totalTestsCompleted).toBe(0)
    expect(result.averageAccuracy).toBe(0)
    expect(result.totalQuestionsAnswered).toBe(0)
    expect(result.totalPracticeHours).toBe(0)
  })

  it('calculates totals and averages correctly', () => {
    const mockResults: HistoricalResult[] = [
      {
        id: "1", title: "Test", category: "Math", type: "Mock Test",
        timestamp: "2026-01-01", score: 10, maxScore: 20,
        accuracy: 50, correctCount: 5, incorrectCount: 5, unansweredCount: 0,
        durationMinutes: 30, isDemoData: true
      },
      {
        id: "2", title: "Test", category: "Math", type: "Mock Test",
        timestamp: "2026-01-01", score: 20, maxScore: 20,
        accuracy: 100, correctCount: 10, incorrectCount: 0, unansweredCount: 0,
        durationMinutes: 60, isDemoData: true
      }
    ]

    const result = calculateAnalyticsSummary(mockResults)
    
    expect(result.totalTestsCompleted).toBe(2)
    expect(result.averageAccuracy).toBe(75) // (50 + 100) / 2
    expect(result.totalQuestionsAnswered).toBe(20) // 5+5 + 10+0
    expect(result.totalPracticeHours).toBe(1.5) // (30 + 60) / 60
  })
})
