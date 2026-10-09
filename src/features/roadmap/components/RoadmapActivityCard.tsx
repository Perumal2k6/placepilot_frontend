import { Link } from "react-router-dom"
import type { RoadmapActivity } from "../types/roadmap"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Circle, Clock, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Props {
  activity: RoadmapActivity
  onToggleStatus: (id: string) => void
}

export function RoadmapActivityCard({ activity, onToggleStatus }: Props) {
  const isCompleted = activity.status === "Completed"

  return (
    <Card className={cn(
      "border-l-4 transition-colors",
      isCompleted ? "border-l-green-500 bg-gray-50 dark:bg-gray-900/50 opacity-70" : 
      activity.priority === "High" ? "border-l-red-500" :
      activity.priority === "Medium" ? "border-l-yellow-500" : "border-l-blue-500"
    )}>
      <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex gap-4 items-start w-full">
          <button onClick={() => onToggleStatus(activity.id)} className="mt-1 shrink-0">
            {isCompleted 
              ? <CheckCircle2 className="h-6 w-6 text-green-500" />
              : <Circle className="h-6 w-6 text-gray-300 hover:text-gray-400 dark:text-gray-600 dark:hover:text-gray-500" />
            }
          </button>
          
          <div className="w-full">
            <div className="flex flex-wrap gap-2 mb-1 items-center">
              <span className={cn(
                "text-xs font-semibold px-2 py-0.5 rounded",
                activity.priority === "High" ? "bg-red-100 text-red-700" :
                activity.priority === "Medium" ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700"
              )}>
                {activity.priority} Priority
              </span>
              <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                {activity.category}
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1 ml-auto sm:ml-0">
                <Clock className="h-3 w-3" /> {activity.estimatedMinutes}m
              </span>
            </div>
            
            <h4 className={cn("text-lg font-bold", isCompleted && "line-through text-gray-500")}>
              {activity.title}
            </h4>
            <p className="text-sm text-gray-500">{activity.topic}</p>
          </div>
        </div>

        <div className="w-full sm:w-auto shrink-0 flex justify-end">
          <Link to={activity.link}>
            <Button variant={isCompleted ? "outline" : "default"} size="sm" className="w-full sm:w-auto">
              {isCompleted ? "Review" : "Practice Now"} <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
