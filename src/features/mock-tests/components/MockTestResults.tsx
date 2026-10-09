import type { MockTestResult, MockTestConfig, ExamAnswerState } from "../types/mockTest"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface Props {
  result: MockTestResult
  testConfig: MockTestConfig
  answers: ExamAnswerState
  onReturn: () => void
  onRetry: () => void
}

export function MockTestResults({ result, testConfig, answers, onReturn, onRetry }: Props) {
  return (
    <div className="space-y-6 max-w-5xl mx-auto py-6">
      <Card className="border-t-4 border-t-blue-600 shadow-md">
        <CardHeader className="text-center pb-2 bg-gray-50 dark:bg-gray-900 rounded-t-lg">
          <CardTitle className="text-3xl font-bold">{testConfig.title} - Results</CardTitle>
          <p className="text-gray-500 mt-2">Demo Session - Results are not saved permanently.</p>
        </CardHeader>
        <CardContent className="p-8">
          
          <div className="flex flex-col items-center justify-center mb-10">
            <div className="text-6xl font-bold text-blue-600 mb-2">
              {result.score} <span className="text-3xl text-gray-400">/ {result.maxScore}</span>
            </div>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">Total Score</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-center border border-gray-100 dark:border-gray-800">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Accuracy</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{result.accuracy}%</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center border border-green-100 dark:border-green-900/30">
              <p className="text-sm font-semibold text-green-700 dark:text-green-400 uppercase tracking-wider mb-2">Correct</p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-500">{result.correctCount}</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-center border border-red-100 dark:border-red-900/30">
              <p className="text-sm font-semibold text-red-700 dark:text-red-400 uppercase tracking-wider mb-2">Incorrect</p>
              <p className="text-3xl font-bold text-red-600 dark:text-red-500">{result.incorrectCount}</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-center border border-gray-100 dark:border-gray-800">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Unanswered</p>
              <p className="text-3xl font-bold text-gray-700 dark:text-gray-300">{result.unansweredCount}</p>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-4">
            <Button onClick={onRetry} variant="outline" size="lg">Retry Test</Button>
            <Button onClick={onReturn} size="lg">Return to Test List</Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6 mt-8">
        <h3 className="text-2xl font-bold px-2">Detailed Review</h3>
        {testConfig.questions.map((q, i) => {
          const ans = answers[q.id]?.selectedOption
          const isCorrect = ans === q.correctAnswer
          const isUnanswered = ans === null || ans === undefined

          return (
            <Card key={q.id} className={cn(
              "border-l-4 shadow-sm",
              isCorrect ? "border-l-green-500 border-green-100" : 
              isUnanswered ? "border-l-gray-300 border-gray-200" : "border-l-red-500 border-red-100"
            )}>
              <CardContent className="p-6 md:p-8">
                <div className="flex gap-4 items-start">
                  {isCorrect ? <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" /> : 
                   isUnanswered ? <div className="h-6 w-6 shrink-0 bg-gray-100 rounded-full border border-gray-300 mt-0.5" /> :
                   <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />}
                  <div className="w-full">
                    <div className="flex justify-between items-start mb-4">
                      <p className="font-semibold text-lg text-gray-900 dark:text-gray-100">Q{i + 1}. {q.text}</p>
                      <span className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded shrink-0 ml-4 text-gray-500">{q.category}</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Your Answer</span>
                        <span className={cn(
                          "font-medium",
                          isCorrect ? "text-green-700 dark:text-green-400" : 
                          isUnanswered ? "text-gray-400 italic" : "text-red-700 dark:text-red-400"
                        )}>
                          {isUnanswered ? "Not Attempted" : q.options[ans]}
                        </span>
                      </div>
                      
                      {!isCorrect && (
                        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/30">
                          <span className="text-xs font-bold text-green-800 dark:text-green-500 uppercase tracking-wider block mb-2">Correct Answer</span>
                          <span className="font-medium text-green-700 dark:text-green-400">{q.options[q.correctAnswer]}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/30">
                      <p className="text-xs font-bold text-blue-800 dark:text-blue-500 uppercase tracking-wider mb-2">Explanation</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{q.explanation}</p>
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
