import { useState, useMemo } from "react"
import { interviewQuestions } from "../data/interviewQuestions"
import { useInterviewSession } from "../hooks/useInterviewSession"
import { InterviewQuestionCard } from "./InterviewQuestionCard"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Props {
  categoryId?: string
  isQuickReview?: boolean
  onExit: () => void
}

export function InterviewSession({ categoryId, isQuickReview, onExit }: Props) {
  const { bookmarks, notes, toggleBookmark, saveNote } = useInterviewSession()
  const [currentIndex, setCurrentIndex] = useState(0)

  const activeQuestions = useMemo(() => {
    let q = interviewQuestions
    if (categoryId) {
      q = q.filter(x => x.categoryId === categoryId)
    }
    if (isQuickReview) {
      q = q.filter(x => bookmarks[x.id])
    }
    return q
  }, [categoryId, isQuickReview, bookmarks])

  if (activeQuestions.length === 0) {
    return (
      <div className="text-center py-16 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-2">No Questions Found</h2>
        <p className="text-gray-500 mb-6">
          {isQuickReview 
            ? "You haven't bookmarked any questions yet. Browse categories and click the bookmark icon to save questions for later review." 
            : "No questions are available for this category yet."}
        </p>
        <Button onClick={onExit}>Return to Overview</Button>
      </div>
    )
  }

  const currentQ = activeQuestions[currentIndex]
  // Safety check if current index gets out of bounds (e.g. unbookmarking the last item in Quick Review)
  if (!currentQ) {
    setCurrentIndex(0)
    return null
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <Button variant="ghost" onClick={onExit} className="text-gray-500">
          <ChevronLeft className="h-4 w-4 mr-2" /> Back to Categories
        </Button>
        <div className="text-sm font-medium text-gray-500">
          {isQuickReview ? "Quick Review (Bookmarks)" : "Category Practice"}
        </div>
      </div>

      <InterviewQuestionCard 
        question={currentQ}
        index={currentIndex}
        total={activeQuestions.length}
        isBookmarked={!!bookmarks[currentQ.id]}
        onToggleBookmark={() => toggleBookmark(currentQ.id)}
        savedNote={notes[currentQ.id] || ""}
        onSaveNote={(note) => saveNote(currentQ.id, note)}
      />

      <div className="flex justify-between items-center mt-6">
        <Button 
          variant="outline" 
          disabled={currentIndex === 0} 
          onClick={() => setCurrentIndex(p => p - 1)}
        >
          <ChevronLeft className="h-4 w-4 mr-2" /> Previous
        </Button>
        
        <div className="flex gap-1 overflow-x-auto max-w-[200px] sm:max-w-md mx-2">
          {/* Quick jump palette (optional for interview, but good for context) */}
          {activeQuestions.map((q, i) => (
            <button
              key={q.id}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full flex-shrink-0 transition-all ${
                i === currentIndex ? "bg-blue-600 w-4" : "bg-gray-300 dark:bg-gray-700"
              }`}
              aria-label={`Go to question ${i + 1}`}
            />
          ))}
        </div>

        <Button 
          disabled={currentIndex === activeQuestions.length - 1} 
          onClick={() => setCurrentIndex(p => p + 1)}
        >
          Next <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
