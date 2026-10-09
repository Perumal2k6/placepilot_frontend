export type Difficulty = "Easy" | "Medium" | "Hard"
export type QuestionType = "Technical" | "HR" | "Placement"

export interface InterviewCategory {
  id: string
  name: string
  type: QuestionType
  description: string
  totalQuestions: number
}

export interface InterviewQuestion {
  id: string
  categoryId: string
  type: QuestionType
  difficulty: Difficulty
  question: string
  modelAnswer?: string
  framework?: string
  tips: string[]
}

export interface UserNotes {
  [questionId: string]: string
}

export interface BookmarkState {
  [questionId: string]: boolean
}

export type PracticeMode = "Browse" | "Practice" | "QuickReview" | "Topic"
