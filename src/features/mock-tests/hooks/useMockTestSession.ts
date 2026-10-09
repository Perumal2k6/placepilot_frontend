import { useState, useEffect, useCallback } from "react"
import type { MockTestConfig, ExamAnswerState, MockTestResult } from "../types/mockTest"

export function useMockTestSession(testConfig: MockTestConfig) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<ExamAnswerState>({})
  const [isFinished, setIsFinished] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(testConfig.durationMinutes * 60)
  const [timeTaken, setTimeTaken] = useState(0)

  // Timer logic
  useEffect(() => {
    if (isFinished) return

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleFinish()
          return 0
        }
        return prev - 1
      })
      setTimeTaken((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [isFinished])

  const selectOption = useCallback((questionId: string, optionIndex: number | null) => {
    if (isFinished) return
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        selectedOption: optionIndex,
        isMarkedForReview: prev[questionId]?.isMarkedForReview || false
      }
    }))
  }, [isFinished])

  const toggleMarkForReview = useCallback((questionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        selectedOption: prev[questionId]?.selectedOption ?? null,
        isMarkedForReview: !prev[questionId]?.isMarkedForReview
      }
    }))
  }, [])

  const handleFinish = useCallback(() => {
    setIsFinished(true)
  }, [])

  const calculateResults = useCallback((): MockTestResult => {
    let correct = 0
    let incorrect = 0
    let unanswered = 0

    testConfig.questions.forEach(q => {
      const ans = answers[q.id]
      if (!ans || ans.selectedOption === null || ans.selectedOption === undefined) {
        unanswered++
      } else if (ans.selectedOption === q.correctAnswer) {
        correct++
      } else {
        incorrect++
      }
    })

    const total = testConfig.questions.length
    const answered = total - unanswered
    const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0
    
    // Scoring logic
    const score = (correct * testConfig.marksPerQuestion) - (incorrect * testConfig.negativeMarking)
    const maxScore = total * testConfig.marksPerQuestion

    return {
      testId: testConfig.id,
      totalQuestions: total,
      answeredCount: answered,
      correctCount: correct,
      incorrectCount: incorrect,
      unansweredCount: unanswered,
      score: score > 0 ? score : 0, // Prevent negative total score if needed, or allow it based on rules. Keeping it exact:
      maxScore,
      accuracy,
      timeTaken
    }
  }, [testConfig, answers, timeTaken])

  return {
    currentIndex,
    setCurrentIndex,
    answers,
    selectOption,
    toggleMarkForReview,
    isFinished,
    handleFinish,
    timeRemaining,
    timeTaken,
    calculateResults
  }
}
