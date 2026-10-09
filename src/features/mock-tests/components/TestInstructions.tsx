import type { MockTestConfig } from "../types/mockTest"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Clock, CheckCircle2, AlertTriangle, FileText } from "lucide-react"

interface Props {
  test: MockTestConfig
  onStart: () => void
  onCancel: () => void
}

export function TestInstructions({ test, onStart, onCancel }: Props) {
  const maxScore = test.questions.length * test.marksPerQuestion

  return (
    <div className="max-w-3xl mx-auto py-6">
      <Card>
        <CardHeader className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 pb-6">
          <CardTitle className="text-2xl">{test.title}</CardTitle>
          <p className="text-gray-500 mt-2">{test.description}</p>
        </CardHeader>
        
        <CardContent className="p-8 space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-700 dark:text-blue-400">
              <FileText className="h-6 w-6 mb-2" />
              <span className="text-sm font-medium">Questions</span>
              <span className="text-2xl font-bold">{test.questions.length}</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-700 dark:text-purple-400">
              <Clock className="h-6 w-6 mb-2" />
              <span className="text-sm font-medium">Duration</span>
              <span className="text-2xl font-bold">{test.durationMinutes}m</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-700 dark:text-green-400">
              <CheckCircle2 className="h-6 w-6 mb-2" />
              <span className="text-sm font-medium">Total Marks</span>
              <span className="text-2xl font-bold">{maxScore}</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-red-700 dark:text-red-400">
              <AlertTriangle className="h-6 w-6 mb-2" />
              <span className="text-sm font-medium">Negative Marking</span>
              <span className="text-2xl font-bold">-{test.negativeMarking}</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Important Instructions</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>You will have exactly <strong>{test.durationMinutes} minutes</strong> to complete the test.</li>
              <li>Each correct answer awards <strong>+{test.marksPerQuestion} marks</strong>.</li>
              <li>There is a penalty of <strong>-{test.negativeMarking} marks</strong> for each incorrect answer.</li>
              <li>Unanswered questions will receive <strong>0 marks</strong>.</li>
              <li>You can navigate between questions using the Question Palette.</li>
              <li>Do not refresh the page or navigate away during the test, or your progress may be lost.</li>
              <li>The test will automatically submit when the timer reaches zero.</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-6 flex justify-end gap-4">
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
          <Button onClick={onStart} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            I understand, Start Test
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
