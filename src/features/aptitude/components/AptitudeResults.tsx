import type { SessionResult, Question, AnswerState } from "../types/aptitude"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"

interface Props {
  result: SessionResult
  questions: Question[]
  answers: AnswerState
  onRetry: () => void
  onExit: () => void
}

export function AptitudeResults({ result, questions, answers, onRetry, onExit }: Props) {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Card>
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl">Session Results</CardTitle>
          <p className="text-gray-500 text-sm">Demo Session - Results are not saved permanently.</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-center">
              <p className="text-sm text-gray-500">Accuracy</p>
              <p className="text-3xl font-bold text-blue-600">{result.accuracy}%</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
              <p className="text-sm text-green-700 dark:text-green-400">Correct</p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-500">{result.correctCount}</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
              <p className="text-sm text-red-700 dark:text-red-400">Incorrect</p>
              <p className="text-3xl font-bold text-red-600 dark:text-red-500">{result.incorrectCount}</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-center">
              <p className="text-sm text-gray-500">Unanswered</p>
              <p className="text-3xl font-bold text-gray-700 dark:text-gray-300">{result.unansweredCount}</p>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <Button onClick={onRetry} variant="outline">Retry Configuration</Button>
            <Button onClick={onExit}>Return to Dashboard</Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-bold">Detailed Review</h3>
        {questions.map((q, i) => {
          const ans = answers[q.id]?.selectedOption
          const isCorrect = ans === q.correctAnswer
          const isUnanswered = ans === null || ans === undefined

          return (
            <Card key={q.id} className={isCorrect ? "border-green-200" : isUnanswered ? "border-gray-200" : "border-red-200"}>
              <CardContent className="p-6">
                <div className="flex gap-2 items-start">
                  {isCorrect ? <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" /> : 
                   isUnanswered ? <div className="h-5 w-5 shrink-0" /> :
                   <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />}
                  <div>
                    <p className="font-medium">Q{i + 1}. {q.text}</p>
                    <div className="mt-4 space-y-1 text-sm">
                      <p>
                        <span className="font-semibold text-gray-500">Your Answer:</span>{" "}
                        <span className={isCorrect ? "text-green-600" : isUnanswered ? "text-gray-400" : "text-red-600"}>
                          {isUnanswered ? "Not Attempted" : q.options[ans]}
                        </span>
                      </p>
                      {!isCorrect && (
                        <p>
                          <span className="font-semibold text-gray-500">Correct Answer:</span>{" "}
                          <span className="text-green-600">{q.options[q.correctAnswer]}</span>
                        </p>
                      )}
                    </div>
                    <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded text-sm">
                      <p className="font-semibold mb-1">Explanation:</p>
                      <p className="text-gray-700 dark:text-gray-300">{q.explanation}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
