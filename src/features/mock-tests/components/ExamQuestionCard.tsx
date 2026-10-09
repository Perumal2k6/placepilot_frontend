import type { MockTestQuestion, ExamAnswerState } from "../types/mockTest"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Props {
  question: MockTestQuestion
  index: number
  total: number
  answerState?: ExamAnswerState[string]
  onSelectOption: (index: number | null) => void
}

export function ExamQuestionCard({ question, index, total, answerState, onSelectOption }: Props) {
  const selected = answerState?.selectedOption ?? null

  return (
    <Card className="border-2 border-gray-200 dark:border-gray-800 shadow-sm">
      <CardContent className="p-6 md:p-8">
        <div className="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          <span className="text-lg font-bold text-gray-800 dark:text-gray-200">Question {index + 1} <span className="text-gray-400 text-sm font-normal">of {total}</span></span>
          <span className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-500">{question.category}</span>
        </div>
        
        <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-8 leading-relaxed">
          {question.text}
        </p>

        <div className="space-y-3">
          {question.options.map((opt, i) => {
            const isSelected = selected === i
            return (
              <button
                key={i}
                onClick={() => onSelectOption(i)}
                className={cn(
                  "w-full text-left p-4 rounded-lg border-2 transition-all flex items-center gap-3",
                  isSelected 
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100" 
                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 dark:border-gray-700 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                )}
              >
                <div className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0",
                  isSelected ? "border-blue-500" : "border-gray-300 dark:border-gray-600"
                )}>
                  {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />}
                </div>
                <span className="text-base">{opt}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-8 flex justify-end">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onSelectOption(null)}
            disabled={selected === null}
            className="text-gray-500"
          >
            Clear Selection
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
