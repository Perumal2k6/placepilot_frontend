export type Difficulty = "Easy" | "Medium" | "Hard"

export interface MockTestQuestion {
  id: string
  text: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
}

export interface MockTestConfig {
  id: string
  title: string
  description: string
  category: string
  difficulty: Difficulty
  durationMinutes: number
  questions: MockTestQuestion[]
  marksPerQuestion: number
  negativeMarking: number
}

export interface ExamAnswerState {
  [questionId: string]: {
    selectedOption: number | null
    isMarkedForReview: boolean
  }
}

export interface MockTestResult {
  testId: string
  totalQuestions: number
  answeredCount: number
  correctCount: number
  incorrectCount: number
  unansweredCount: number
  score: number
  maxScore: number
  accuracy: number
  timeTaken: number
}
