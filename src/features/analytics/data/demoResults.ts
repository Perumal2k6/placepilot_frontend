import type { HistoricalResult } from "../types/analytics"

// Generate a realistic chronological history
const now = new Date()
const daysAgo = (days: number) => {
  const d = new Date(now)
  d.setDate(d.getDate() - days)
  return d.toISOString()
}

export const demoHistoricalResults: HistoricalResult[] = [
  {
    id: "res_1",
    title: "Aptitude Foundations",
    category: "Quantitative",
    type: "Aptitude Practice",
    timestamp: daysAgo(14),
    score: 12,
    maxScore: 20,
    accuracy: 60,
    correctCount: 6,
    incorrectCount: 3,
    unansweredCount: 1,
    durationMinutes: 15,
    isDemoData: true
  },
  {
    id: "res_2",
    title: "Data Structures & Algorithms",
    category: "Technical Interview Test",
    type: "Mock Test",
    timestamp: daysAgo(10),
    score: 45,
    maxScore: 100,
    accuracy: 45,
    correctCount: 11,
    incorrectCount: 10,
    unansweredCount: 4,
    durationMinutes: 60,
    isDemoData: true
  },
  {
    id: "res_3",
    title: "Java Core Concepts",
    category: "Programming Languages",
    type: "Technical Practice",
    timestamp: daysAgo(7),
    score: 18,
    maxScore: 20,
    accuracy: 90,
    correctCount: 9,
    incorrectCount: 1,
    unansweredCount: 0,
    durationMinutes: 12,
    isDemoData: true
  },
  {
    id: "res_4",
    title: "Full Placement Assessment",
    category: "Mixed",
    type: "Mock Test",
    timestamp: daysAgo(3),
    score: 72,
    maxScore: 100,
    accuracy: 72,
    correctCount: 36,
    incorrectCount: 8,
    unansweredCount: 6,
    durationMinutes: 120,
    isDemoData: true
  },
  {
    id: "res_5",
    title: "Logical Reasoning",
    category: "Aptitude",
    type: "Aptitude Practice",
    timestamp: daysAgo(1),
    score: 16,
    maxScore: 20,
    accuracy: 80,
    correctCount: 8,
    incorrectCount: 2,
    unansweredCount: 0,
    durationMinutes: 10,
    isDemoData: true
  }
]
