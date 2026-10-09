import { Button } from "@/components/ui/button"
import { Play, Send, RotateCcw, AlertTriangle } from "lucide-react"

interface Props {
  onRun: () => void
  onSubmit: () => void
  onReset: () => void
  isRunning: boolean
  isSubmitting: boolean
  output: string | null
}

export function ExecutionPanel({ onRun, onSubmit, onReset, isRunning, isSubmitting, output }: Props) {
  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-800">
        <Button variant="ghost" size="sm" onClick={onReset} className="text-gray-500">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset Code
        </Button>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" onClick={onRun} disabled={isRunning || isSubmitting}>
            {isRunning ? "Running..." : <><Play className="h-4 w-4 mr-2" /> Run Code</>}
          </Button>
          <Button size="sm" onClick={onSubmit} disabled={isRunning || isSubmitting} className="bg-green-600 hover:bg-green-700 text-white">
            {isSubmitting ? "Submitting..." : <><Send className="h-4 w-4 mr-2" /> Submit</>}
          </Button>
        </div>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex items-start gap-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-500 rounded-md border border-yellow-200 dark:border-yellow-800/50 mb-4">
          <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold mb-1">Execution not configured yet</p>
            <p>Connect a secure code runner (like Judge0 or an isolated Docker container backend) to run this program. Frontend code execution is disabled for security.</p>
          </div>
        </div>

        {output && (
          <div className="mt-4">
            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Console Output</h4>
            <pre className="bg-[#1e1e1e] text-gray-300 p-4 rounded-md text-sm font-mono whitespace-pre-wrap">
              {output}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
