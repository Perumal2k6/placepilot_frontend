import type { AnalyticsSummary } from "../types/analytics"
import { Card, CardContent } from "@/components/ui/card"
import { Target, CheckCircle2, FileText, Clock } from "lucide-react"

export function PerformanceOverview({ summary }: { summary: AnalyticsSummary }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <Card>
        <CardContent className="p-6 flex items-center gap-4">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Tests Completed</p>
            <p className="text-2xl font-bold">{summary.totalTestsCompleted}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex items-center gap-4">
          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg text-green-600 dark:text-green-400">
            <Target className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Avg. Accuracy</p>
            <p className="text-2xl font-bold">{summary.averageAccuracy}%</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex items-center gap-4">
          <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg text-purple-600 dark:text-purple-400">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Questions Answered</p>
            <p className="text-2xl font-bold">{summary.totalQuestionsAnswered}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex items-center gap-4">
          <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg text-orange-600 dark:text-orange-400">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Practice Time</p>
            <p className="text-2xl font-bold">{summary.totalPracticeHours} hrs</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
