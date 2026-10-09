import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { readinessScore } from "../data/demoData"

export function ReadinessScoreCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Placement Readiness</CardTitle>
        <CardDescription>Overall assessment of your preparation</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-6">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-[12px] border-blue-100 dark:border-blue-900/50">
            <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">{readinessScore.overall}</span>
            <span className="absolute bottom-2 text-xs text-gray-500">/ 100</span>
          </div>
          <p className="mt-4 text-xs text-gray-500 text-center italic">
            * {readinessScore.note}
          </p>
        </div>
        <div className="space-y-4 mt-2">
          {readinessScore.breakdown.map((item) => (
            <div key={item.name} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
                <span className="text-gray-500">{item.score}%</span>
              </div>
              <Progress value={item.score} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
