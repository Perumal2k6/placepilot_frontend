import type { Question, PracticeMode } from "../types/aptitude"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckCircle2, XCircle } from "lucide-react"

interface Props {
  question: Question
  index: number
  total: number
  mode: PracticeMode
  answerState?: {
    selectedOption: number | null
    isMarkedForReview: boolean
    isChecked: boolean
  }
  onSelectOption: (index: number) => void
  onCheckAnswer: () => void
  onReset: () => void
}

export function QuestionCard({ question, index, total, mode, answerState, onSelectOption, onCheckAnswer, onReset }: Props) {
  const selected = answerState?.selectedOption ?? null
  const isChecked = answerState?.isChecked ?? false

  return (
    <Card className="border-2">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-bold text-gray-500">Question {index + 1} of {total}</span>
          <span className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">{question.difficulty}</span>
        </div>
        
        <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-6 leading-relaxed">
          {question.text}
        </p>

        <div className="space-y-3">
          {question.options.map((opt, i) => {
            const isSelected = selected === i
            let stateClass = "border-gray-200 hover:border-blue-300 hover:bg-blue-50 dark:border-gray-700 dark:hover:bg-blue-900/20"
            
            if (isSelected) {
              stateClass = "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
            }
            
            if (isChecked && mode === "Practice") {
              if (i === question.correctAnswer) {
                stateClass = "border-green-500 bg-green-50 dark:bg-green-900/30"
              } else if (isSelected) {
                stateClass = "border-red-500 bg-red-50 dark:bg-red-900/30"
              } else {
                stateClass = "border-gray-200 opacity-60"
              }
            }

            return (
              <button
                key={i}
                disabled={isChecked}
                onClick={() => onSelectOption(i)}
                className={cn(
                  "w-full text-left p-4 rounded-lg border-2 transition-all flex justify-between items-center",
                  stateClass
                )}
              >
                <span>{opt}</span>
                {isChecked && i === question.correctAnswer && <CheckCircle2 className="text-green-500 h-5 w-5" />}
                {isChecked && isSelected && i !== question.correctAnswer && <XCircle className="text-red-500 h-5 w-5" />}
              </button>
            )
          })}
        </div>

        {isChecked && (
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border">
            <h4 className="font-bold text-sm mb-1">Explanation:</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">{question.explanation}</p>
          </div>
        )}

        <div className="mt-6 flex gap-3">
          {mode === "Practice" && !isChecked && (
            <Button disabled={selected === null} onClick={onCheckAnswer} variant="secondary">
              Check Answer
            </Button>
          )}
          <Button disabled={isChecked} onClick={onReset} variant="outline" size="sm">
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
