import type { MockTestConfig } from "../types/mockTest"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, FileText } from "lucide-react"

interface Props {
  tests: MockTestConfig[]
  onSelectTest: (test: MockTestConfig) => void
}

export function MockTestOverview({ tests, onSelectTest }: Props) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests.map(test => (
          <Card key={test.id} className="flex flex-col border border-gray-200 dark:border-gray-800">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start mb-2">
                <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                  test.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                  test.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {test.difficulty}
                </span>
                <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                  {test.category}
                </span>
              </div>
              <CardTitle className="text-lg">{test.title}</CardTitle>
              <CardDescription className="line-clamp-2 min-h-[2.5rem]">
                {test.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-4 flex-1">
              <div className="flex flex-col gap-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>{test.questions.length} Questions ({test.marksPerQuestion * test.questions.length} Marks)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{test.durationMinutes} Minutes</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button onClick={() => onSelectTest(test)} className="w-full">
                View Instructions
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
