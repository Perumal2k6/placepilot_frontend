import type { RoadmapProgress } from "../types/roadmap"
import { Card, CardContent } from "@/components/ui/card"
import { Target, ListTodo, Flame } from "lucide-react"

export function RoadmapOverview({ progress }: { progress: RoadmapProgress }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <Card>
        <CardContent className="p-6 flex items-center gap-4">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400">
            <ListTodo className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Weekly Activities</p>
            <p className="text-2xl font-bold">{progress.totalActivities}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex items-center gap-4">
          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg text-green-600 dark:text-green-400">
            <Target className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Completed</p>
            <p className="text-2xl font-bold">{progress.completedActivities}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex items-center gap-4">
          <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg text-orange-600 dark:text-orange-400">
            <Flame className="h-6 w-6" />
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium text-gray-500">Progress</p>
              <span className="text-sm font-bold">{progress.completionPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-orange-500 h-2 rounded-full transition-all" 
                style={{ width: `${progress.completionPercentage}%` }} 
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
