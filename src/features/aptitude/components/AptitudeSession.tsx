import { useState, useMemo } from "react"
import type { SessionConfig, SessionResult } from "../types/aptitude"
import { getQuestionsByConfig } from "../data/aptitudeQuestions"
import { usePracticeSession } from "../hooks/usePracticeSession"
import { QuestionCard } from "./QuestionCard"
import { QuestionPalette } from "./QuestionPalette"
import { PracticeTimer } from "./PracticeTimer"
import { AptitudeResults } from "./AptitudeResults"
import { Button } from "@/components/ui/button"
import { Flag, ChevronLeft, ChevronRight } from "lucide-react"

interface Props {
  config: SessionConfig
  onExit: () => void
}

export function AptitudeSession({ config, onExit }: Props) {
  const [result, setResult] = useState<SessionResult | null>(null)

  // Initialize questions only once
  const questions = useMemo(() => {
    return getQuestionsByConfig(config.topicId, config.difficulty, config.questionCount)
  }, [config])

  const {
    currentIndex,
    setCurrentIndex,
    answers,
    selectOption,
    checkAnswer,
    toggleMarkForReview,
    resetCurrent,
    isFinished,
    handleFinish,
    timeRemaining,
    calculateResults
  } = usePracticeSession(questions, config)

  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-bold">No questions found</h2>
        <p className="text-gray-500 mt-2">Could not find enough questions for this configuration.</p>
        <Button onClick={onExit} className="mt-4">Go Back</Button>
      </div>
    )
  }

  const handleManualSubmit = () => {
    if (confirm("Are you sure you want to submit your test?")) {
      handleFinish()
      setResult(calculateResults())
    }
  }

  // Handle timeout auto submit
  if (isFinished && !result) {
    setResult(calculateResults())
  }

  if (result) {
    return <AptitudeResults result={result} questions={questions} answers={answers} onRetry={() => setResult(null)} onExit={onExit} />
  }

  const currentQ = questions[currentIndex]
  const state = answers[currentQ.id]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      <div className="lg:col-span-3 space-y-4">
        <div className="flex justify-between items-center mb-4">
          <PracticeTimer timeRemaining={timeRemaining} mode={config.mode} />
          
          <div className="flex gap-2 ml-auto">
            <Button onClick={() => toggleMarkForReview(currentQ.id)} variant="outline" className={state?.isMarkedForReview ? "bg-purple-50 text-purple-700 border-purple-200" : ""}>
              <Flag className="h-4 w-4 mr-2" />
              {state?.isMarkedForReview ? "Marked" : "Mark for Review"}
            </Button>
            <Button variant="destructive" onClick={handleManualSubmit}>Submit Test</Button>
          </div>
        </div>

        <QuestionCard 
          question={currentQ}
          index={currentIndex}
          total={questions.length}
          mode={config.mode}
          answerState={state}
          onSelectOption={(idx) => selectOption(currentQ.id, idx)}
          onCheckAnswer={() => checkAnswer(currentQ.id)}
          onReset={() => resetCurrent(currentQ.id)}
        />

        <div className="flex justify-between pt-4">
          <Button 
            variant="outline" 
            disabled={currentIndex === 0} 
            onClick={() => setCurrentIndex(p => p - 1)}
          >
            <ChevronLeft className="h-4 w-4 mr-2" /> Previous
          </Button>
          <Button 
            disabled={currentIndex === questions.length - 1} 
            onClick={() => setCurrentIndex(p => p + 1)}
          >
            Next <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
      
      <div className="lg:col-span-1">
        <QuestionPalette 
          questions={questions}
          answers={answers}
          currentIndex={currentIndex}
          onNavigate={setCurrentIndex}
        />
      </div>
    </div>
  )
}
