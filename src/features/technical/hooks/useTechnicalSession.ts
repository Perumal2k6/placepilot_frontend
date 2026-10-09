import { useState, useEffect, useCallback } from "react"
import type { TechnicalQuestion, SessionConfig, AnswerState, SessionResult } from "../types/technical"

export function useTechnicalSession(questions: TechnicalQuestion[], config: SessionConfig) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<AnswerState>({})
  const [isFinished, setIsFinished] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(config.questionCount * 60) // 1 min per question
  const [timeTaken, setTimeTaken] = useState(0)

  // Timer logic for Timed mode
  useEffect(() => {
    if (config.mode !== "Timed" || isFinished) return

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
  }, [config.mode, isFinished])

  // Track time in Practice mode too
  useEffect(() => {
    if (config.mode !== "Practice" || isFinished) return
    const timer = setInterval(() => setTimeTaken((prev) => prev + 1), 1000)
    return () => clearInterval(timer)
  }, [config.mode, isFinished])

  const selectOption = useCallback((questionId: string, optionIndex: number) => {
    if (isFinished) return
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        selectedOption: optionIndex
      }
    }))
  }, [isFinished])

  const checkAnswer = useCallback((questionId: string) => {
    if (isFinished || config.mode === "Timed") return
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        isChecked: true
      }
    }))
  }, [isFinished, config.mode])

  const toggleMarkForReview = useCallback((questionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        isMarkedForReview: !prev[questionId]?.isMarkedForReview
      }
    }))
  }, [])

  const resetCurrent = useCallback((questionId: string) => {
    if (isFinished) return
    setAnswers(prev => {
      const next = { ...prev }
      if (next[questionId]) {
        next[questionId].selectedOption = null
        next[questionId].isChecked = false
      }
      return next
    })
  }, [isFinished])

  const handleFinish = useCallback(() => {
    setIsFinished(true)
  }, [])

  const calculateResults = useCallback((): SessionResult => {
    let correct = 0
    let incorrect = 0
    let unanswered = 0

    questions.forEach(q => {
      const ans = answers[q.id]
      if (!ans || ans.selectedOption === null || ans.selectedOption === undefined) {
        unanswered++
      } else if (ans.selectedOption === q.correctAnswer) {
        correct++
      } else {
        incorrect++
      }
    })

    const total = questions.length
    const answered = total - unanswered
    const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0

    return {
      totalQuestions: total,
      answeredCount: answered,
      correctCount: correct,
      incorrectCount: incorrect,
      unansweredCount: unanswered,
      accuracy,
      timeTaken
    }
  }, [questions, answers, timeTaken])

  return {
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
    timeTaken,
    calculateResults
  }
}
