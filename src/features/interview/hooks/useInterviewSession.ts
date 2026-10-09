import { useState, useEffect, useCallback } from "react"
import type { UserNotes, BookmarkState } from "../types/interview"

export function useInterviewSession() {
  const [bookmarks, setBookmarks] = useState<BookmarkState>({})
  const [notes, setNotes] = useState<UserNotes>({})

  // Load from local storage on mount
  useEffect(() => {
    try {
      const storedBookmarks = localStorage.getItem('demo_interview_bookmarks')
      if (storedBookmarks) setBookmarks(JSON.parse(storedBookmarks))
      
      const storedNotes = localStorage.getItem('demo_interview_notes')
      if (storedNotes) setNotes(JSON.parse(storedNotes))
    } catch (e) {
      console.warn("Could not load interview state from local storage", e)
    }
  }, [])

  // Save to local storage on change
  useEffect(() => {
    try {
      localStorage.setItem('demo_interview_bookmarks', JSON.stringify(bookmarks))
    } catch (e) {
      console.warn("Could not save bookmarks", e)
    }
  }, [bookmarks])

  useEffect(() => {
    try {
      localStorage.setItem('demo_interview_notes', JSON.stringify(notes))
    } catch (e) {
      console.warn("Could not save notes", e)
    }
  }, [notes])

  const toggleBookmark = useCallback((questionId: string) => {
    setBookmarks(prev => {
      const next = { ...prev }
      if (next[questionId]) {
        delete next[questionId]
      } else {
        next[questionId] = true
      }
      return next
    })
  }, [])

  const saveNote = useCallback((questionId: string, note: string) => {
    setNotes(prev => ({
      ...prev,
      [questionId]: note
    }))
  }, [])

  return {
    bookmarks,
    notes,
    toggleBookmark,
    saveNote
  }
}
