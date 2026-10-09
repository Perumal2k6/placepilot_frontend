export type Difficulty = "Easy" | "Medium" | "Hard"
export type PracticeMode = "Practice" | "Timed"

export interface Topic {
  id: string
  name: string
  category: string
  description: string
  totalQuestions: number
}

export interface Question {
  id: string
  topicId: string
  difficulty: Difficulty
  text: string
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
    isChecked: boolean // Only for Practice mode
  }
}

export interface SessionResult {
  totalQuestions: number
  answeredCount: number
  correctCount: number
  incorrectCount: number
  unansweredCount: number
  accuracy: number
  timeTaken: number // in seconds
}
