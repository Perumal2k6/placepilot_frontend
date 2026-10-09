export type Difficulty = "Easy" | "Medium" | "Hard"
export type ProgrammingLanguage = "python" | "cpp" | "java" | "javascript"

export interface TestCase {
  id: string
  input: string
  expectedOutput: string
  isHidden: boolean
}

export interface StarterCode {
  [key: string]: string // map of ProgrammingLanguage to code
}

export interface CodingProblem {
  id: string
  slug: string
  title: string
  topic: string
  difficulty: Difficulty
  statement: string
  inputFormat: string
  outputFormat: string
  constraints: string[]
  sampleTestCases: TestCase[]
  starterCode: StarterCode
}

export interface SubmissionHistoryRecord {
  id: string
  problemId: string
  language: ProgrammingLanguage
  timestamp: string
  status: "Accepted" | "Wrong Answer" | "Time Limit Exceeded" | "Runtime Error" | "Compilation Error"
  runtime?: string
  memory?: string
}
