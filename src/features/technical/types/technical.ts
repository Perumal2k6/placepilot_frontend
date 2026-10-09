export type Difficulty = "Easy" | "Medium" | "Hard"
export type PracticeMode = "Practice" | "Timed"

export interface TechnicalTopic {
  id: string
  name: string
  category: string
  description: string
  totalQuestions: number
}

export interface TechnicalQuestion {
  id: string
  topicId: string
  difficulty: Difficulty
  text: string
  codeSnippet?: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface SessionConfig {
  topicId: string
  difficulty: Difficulty | "All"
  questionCount: number
  mode: PracticeMode
}

export interface AnswerState {
  [questionId: string]: {
    selectedOption: number | null
    isMarkedForReview: boolean
    isChecked: boolean
  }
}

export interface SessionResult {
  totalQuestions: number
  answeredCount: number
  correctCount: number
  incorrectCount: number
  unansweredCount: number
  accuracy: number
  timeTaken: number
}
