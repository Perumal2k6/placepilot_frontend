import type { MockTestQuestion, ExamAnswerState } from "../types/mockTest"
import { cn } from "@/lib/utils"

interface Props {
  questions: MockTestQuestion[]
  answers: ExamAnswerState
  currentIndex: number
  onNavigate: (index: number) => void
}

export function QuestionPalette({ questions, answers, currentIndex, onNavigate }: Props) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 sticky top-4">
      <h3 className="text-sm font-bold mb-4">Question Palette</h3>
      <div className="grid grid-cols-5 gap-2">
        {questions.map((q, i) => {
          const state = answers[q.id]
          const isAnswered = state?.selectedOption !== null && state?.selectedOption !== undefined
          const isMarked = state?.isMarkedForReview
          const isActive = currentIndex === i

          return (
            <button
              key={q.id}
              onClick={() => onNavigate(i)}
              className={cn(
                "w-10 h-10 rounded flex items-center justify-center text-sm font-medium transition-colors border shadow-sm",
                isActive ? "ring-2 ring-blue-500 ring-offset-1" : "",
                isMarked ? "bg-purple-100 border-purple-300 text-purple-700 dark:bg-purple-900/40 dark:border-purple-700 dark:text-purple-300" :
                isAnswered ? "bg-green-500 border-green-600 text-white dark:bg-green-700 dark:border-green-800" :
                "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
              )}
            >
              {i + 1}
            </button>
          )
        })}
      </div>
      <div className="mt-6 space-y-3 text-xs text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-green-500 border border-green-600 rounded-sm shadow-sm"></div> Answered</div>
        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-purple-100 border border-purple-300 rounded-sm shadow-sm"></div> Marked for Review</div>
        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-50 border border-gray-200 rounded-sm shadow-sm"></div> Unanswered</div>
      </div>
    </div>
  )
}
