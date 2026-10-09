import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { codingProblems } from "../data/codingProblems"
import type { ProgrammingLanguage } from "../types/coding"
import { ProblemDescription } from "./ProblemDescription"
import { CodeEditorPanel } from "./CodeEditorPanel"
import { ExecutionPanel } from "./ExecutionPanel"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft } from "lucide-react"

export function CodingProblemPage() {
  const { problemId } = useParams()
  const problem = codingProblems.find(p => p.slug === problemId)
  
  const [language, setLanguage] = useState<ProgrammingLanguage>("python")
  const [code, setCode] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [output, setOutput] = useState<string | null>(null)

  useEffect(() => {
    if (problem) {
      setCode(problem.starterCode[language] || "")
      setOutput(null)
    }
  }, [problem, language])

  if (!problem) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Problem Not Found</h2>
          <Link to="/student/coding" className="text-blue-600 hover:underline">Return to problem list</Link>
        </div>
      </div>
    )
  }

  const handleRun = () => {
    setIsRunning(true)
    setOutput(null)
    // Simulate compilation/run delay
    setTimeout(() => {
      setIsRunning(false)
      setOutput("> Execution failed.\nError: Backend execution service is not configured.\nCode cannot be safely executed in the browser.")
    }, 1500)
  }

  const handleSubmit = () => {
    setIsSubmitting(true)
    setOutput(null)
    setTimeout(() => {
      setIsSubmitting(false)
      setOutput("> Submission failed.\nError: Submission endpoint unreachable.\nPlease configure a backend grading server.")
    }, 2000)
  }

  const handleReset = () => {
    if (confirm("Are you sure you want to reset your code to the initial state?")) {
      setCode(problem.starterCode[language] || "")
      setOutput(null)
    }
  }

  return (
    <div className="h-[calc(100vh-3.5rem)] flex flex-col md:flex-row overflow-hidden bg-gray-100 dark:bg-gray-900">
      
      {/* Left Pane - Problem Description */}
      <div className="w-full md:w-5/12 h-1/2 md:h-full border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 flex flex-col bg-white dark:bg-gray-950">
        <div className="h-12 border-b border-gray-200 dark:border-gray-800 flex items-center px-4 bg-gray-50 dark:bg-gray-900 shrink-0">
          <Link to="/student/coding" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Problem List
          </Link>
        </div>
        <div className="flex-1 overflow-hidden">
          <ProblemDescription problem={problem} />
        </div>
      </div>

      {/* Right Pane - Editor and Execution */}
      <div className="w-full md:w-7/12 h-1/2 md:h-full flex flex-col">
        {/* Editor Toolbar */}
        <div className="h-12 border-b border-gray-200 dark:border-gray-800 flex items-center px-4 bg-gray-50 dark:bg-gray-900 shrink-0">
          <div className="w-[150px]">
            <Select value={language} onValueChange={(v) => setLanguage(v as ProgrammingLanguage)}>
              <SelectTrigger className="h-8 text-xs bg-white dark:bg-gray-950">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="python">Python 3</SelectItem>
                <SelectItem value="cpp">C++</SelectItem>
                <SelectItem value="java">Java</SelectItem>
                <SelectItem value="javascript">JavaScript</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 min-h-0">
          <CodeEditorPanel 
            language={language}
            code={code}
            onChange={(v) => setCode(v || "")}
          />
        </div>

        {/* Execution Panel (bottom section) */}
        <div className="h-64 shrink-0">
          <ExecutionPanel 
            onRun={handleRun}
            onSubmit={handleSubmit}
            onReset={handleReset}
            isRunning={isRunning}
            isSubmitting={isSubmitting}
            output={output}
          />
        </div>
      </div>
    </div>
  )
}
