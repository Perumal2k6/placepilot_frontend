import { useState, useEffect } from "react"
import type { InterviewQuestion } from "../types/interview"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Bookmark, BookmarkCheck, CheckCircle2, Lightbulb } from "lucide-react"

interface Props {
  question: InterviewQuestion
  index: number
  total: number
  isBookmarked: boolean
  onToggleBookmark: () => void
  savedNote: string
  onSaveNote: (note: string) => void
}

export function InterviewQuestionCard({ 
  question, 
  index, 
  total, 
  isBookmarked, 
  onToggleBookmark, 
  savedNote,
  onSaveNote 
}: Props) {
  const [showAnswer, setShowAnswer] = useState(false)
  const [noteText, setNoteText] = useState(savedNote || "")

  // Reset local state when question changes
  useEffect(() => {
    setShowAnswer(false)
    setNoteText(savedNote || "")
  }, [question.id, savedNote])

  const handleSaveNote = () => {
    onSaveNote(noteText)
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-gray-200 dark:border-gray-800">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-sm font-bold text-gray-500">Question {index + 1} of {total}</span>
              <div className="flex gap-2 mt-2">
                <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                  question.difficulty === 'Easy' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                  question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                  'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                }`}>
                  {question.difficulty}
                </span>
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  {question.type}
                </span>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onToggleBookmark} className={isBookmarked ? "text-blue-600" : "text-gray-400"}>
              {isBookmarked ? <BookmarkCheck className="h-6 w-6" /> : <Bookmark className="h-6 w-6" />}
            </Button>
          </div>
          
          <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 leading-relaxed mb-6">
            {question.question}
          </h2>

          {!showAnswer ? (
            <Button onClick={() => setShowAnswer(true)} variant="outline" className="w-full sm:w-auto">
              Show Model Answer / Framework
            </Button>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
              {question.modelAnswer && (
                <div className="p-4 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2 text-green-800 dark:text-green-500 font-bold text-sm">
                    <CheckCircle2 className="h-4 w-4" /> Model Answer
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">{question.modelAnswer}</p>
                </div>
              )}
              
              {question.framework && (
                <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2 text-blue-800 dark:text-blue-500 font-bold text-sm">
                    <Lightbulb className="h-4 w-4" /> Framework / Approach
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed whitespace-pre-wrap">{question.framework}</p>
                </div>
              )}

              {question.tips && question.tips.length > 0 && (
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-lg">
                  <h4 className="font-bold text-sm text-gray-700 dark:text-gray-300 mb-2">Pro Tips:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {question.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                  </ul>
                </div>
              )}

              <Button onClick={() => setShowAnswer(false)} variant="ghost" size="sm" className="text-gray-500">
                Hide Answer
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-sm font-bold mb-2">Your Personal Notes</h3>
          <p className="text-xs text-gray-500 mb-4">
            Draft your own answer. Notes are stored locally in your browser for this demo session.
          </p>
          <Textarea 
            placeholder="Type your answer draft or bullet points here..."
            className="min-h-[120px] mb-3"
            value={noteText}
            onChange={(e: any) => setNoteText(e.target.value)}
          />
          <div className="flex justify-end">
            <Button size="sm" onClick={handleSaveNote} disabled={noteText === savedNote}>
              {noteText === savedNote ? "Saved" : "Save Note"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
