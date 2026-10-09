import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { upcomingGoals } from "../data/demoData"
import { CheckCircle2, Circle } from "lucide-react"

export function WeeklyGoals() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">Weekly Goals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingGoals.length > 0 ? (
            upcomingGoals.map((goal) => {
              const isCompleted = goal.progress >= goal.total
              return (
                <div key={goal.id} className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : (
                      <Circle className="h-5 w-5 text-gray-300 dark:text-gray-600" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className={`text-sm font-medium ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-900 dark:text-gray-100'}`}>
                      {goal.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {goal.progress} / {goal.total} completed
                    </p>
                  </div>
                </div>
              )
            })
          ) : (
            <p className="text-sm text-gray-500 text-center py-4">No goals set for this week.</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
