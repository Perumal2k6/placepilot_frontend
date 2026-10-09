import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { weeklyActivity } from "../data/demoData"
import { cn } from "@/lib/utils"

export function WeeklyActivity() {
  const hasActivity = weeklyActivity.some(day => day.completed)

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Consistency</CardTitle>
        <CardDescription>7-day activity streak</CardDescription>
      </CardHeader>
      <CardContent>
        {hasActivity ? (
          <div className="flex justify-between items-center px-2">
            {weeklyActivity.map((day, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div 
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all",
                    day.completed 
                      ? "bg-green-100 text-green-700 border border-green-300 shadow-sm dark:bg-green-900/30 dark:text-green-400 dark:border-green-800" 
                      : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500"
                  )}
                >
                  {day.completed ? "✓" : ""}
                </div>
                <span className="text-xs text-gray-500 font-medium">{day.day}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 text-center py-4">No activity recorded this week yet. Start practicing!</p>
        )}
      </CardContent>
    </Card>
  )
}
