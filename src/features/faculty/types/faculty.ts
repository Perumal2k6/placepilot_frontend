export interface DemoStudent {
  id: string
  name: string
  email: string
  department: string
  year: string
  status: "Active" | "Inactive"
  enrollmentDate: string
  performance: {
    aptitudeScore: number
    technicalScore: number
    codingScore: number
    testsCompleted: number
    averageAccuracy: number
  }
}

export interface DemoQuestion {
  id: string
  module: "Aptitude" | "Technical" | "Coding" | "Interview"
  topic: string
  difficulty: "Easy" | "Medium" | "Hard"
  text: string
}

export interface DemoMockTest {
  id: string
  title: string
  category: string
  durationMinutes: number
  questionCount: number
  status: "Published" | "Draft" | "Archived"
  createdAt: string
}
