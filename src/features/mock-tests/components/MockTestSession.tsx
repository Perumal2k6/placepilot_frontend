import { useState } from "react"
import type { MockTestConfig, MockTestResult } from "../types/mockTest"
import { useMockTestSession } from "../hooks/useMockTestSession"
import { ExamQuestionCard } from "./ExamQuestionCard"
import { QuestionPalette } from "./QuestionPalette"
import { ExamTimer } from "./ExamTimer"
import { MockTestResults } from "./MockTestResults"
import { Button } from "@/components/ui/button"
import { Flag, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react"

interface Props {
  config: MockTestConfig
  onExit: () => void
}

export function MockTestSession({ config, onExit }: Props) {
  const [result, setResult] = useState<MockTestResult | null>(null)

  const {
    currentIndex,
    setCurrentIndex,
    answers,
    selectOption,
    toggleMarkForReview,
    isFinished,
    handleFinish,
    timeRemaining,
    calculateResults
  } = useMockTestSession(config)

  const handleManualSubmit = () => {
    // Check for unanswered questions to warn user
    const answeredCount = Object.values(answers).filter(a => a.selectedOption !== null).length
    const unanswered = config.questions.length - answeredCount
    
    let msg = "Are you sure you want to submit your test?"
    if (unanswered > 0) {
      msg = `You have ${unanswered} unanswered question(s). Are you sure you want to submit?`
    }
    
    if (confirm(msg)) {
      handleFinish()
      setResult(calculateResults())
    }
  }

  // Handle timeout auto submit
  if (isFinished && !result) {
    setResult(calculateResults())
  }

  if (result) {
    return (
      <MockTestResults 
        result={result} 
        testConfig={config} 
        answers={answers} 
        onReturn={onExit} 
        onRetry={() => setResult(null)} 
      />
    )
  }

  const currentQ = config.questions[currentIndex]
  const state = answers[currentQ.id]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto py-4">
      <div className="lg:col-span-3 space-y-6">
        
        {/* Exam Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{config.title}</h2>
            <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
              <span className="flex items-center text-red-600 font-medium">
                <AlertCircle className="w-3 h-3 mr-1" /> Negative marking: -{config.negativeMarking}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <ExamTimer timeRemaining={timeRemaining} />
            <Button variant="destructive" onClick={handleManualSubmit} className="shadow-sm">Submit Test</Button>
          </div>
        </div>

        {/* Question Area */}
        <ExamQuestionCard 
          question={currentQ}
          index={currentIndex}
          total={config.questions.length}
          answerState={state}
          onSelectOption={(idx) => selectOption(currentQ.id, idx)}
        />

        {/* Exam Navigation Footer */}
        <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm">
          <Button 
            variant="outline" 
            disabled={currentIndex === 0} 
            onClick={() => setCurrentIndex(p => p - 1)}
          >
            <ChevronLeft className="h-4 w-4 mr-2" /> Previous
          </Button>
          
          <Button 
            onClick={() => toggleMarkForReview(currentQ.id)} 
            variant="outline" 
            className={state?.isMarkedForReview ? "bg-purple-50 text-purple-700 border-purple-300 hover:bg-purple-100" : ""}
          >
            <Flag className="h-4 w-4 mr-2" />
            {state?.isMarkedForReview ? "Marked for Review" : "Mark for Review"}
          </Button>

          <Button 
            disabled={currentIndex === config.questions.length - 1} 
            onClick={() => setCurrentIndex(p => p + 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Next <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

      </div>
      
      {/* Right Sidebar */}
      <div className="lg:col-span-1">
        <QuestionPalette 
          questions={config.questions}
          answers={answers}
          currentIndex={currentIndex}
          onNavigate={setCurrentIndex}
        />
      </div>
    </div>
  )
}
