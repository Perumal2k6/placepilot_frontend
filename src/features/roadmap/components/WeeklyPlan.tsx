import type { RoadmapActivity } from "../types/roadmap"
import { RoadmapActivityCard } from "./RoadmapActivityCard"

interface Props {
  activities: RoadmapActivity[]
  onToggleStatus: (id: string) => void
}

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export function WeeklyPlan({ activities, onToggleStatus }: Props) {
  
  // Group activities by day
  const grouped = activities.reduce((acc, curr) => {
    if (!acc[curr.dayOfWeek]) acc[curr.dayOfWeek] = []
    acc[curr.dayOfWeek].push(curr)
    return acc
  }, {} as Record<string, RoadmapActivity[]>)

  return (
    <div className="space-y-8">
      {DAYS.map(day => {
        const dayActivities = grouped[day]
        if (!dayActivities || dayActivities.length === 0) return null
        
        return (
          <div key={day} className="space-y-4">
            <h3 className="text-lg font-bold border-b pb-2 text-gray-800 dark:text-gray-200">{day}</h3>
            <div className="grid grid-cols-1 gap-4">
              {dayActivities.map(act => (
                <RoadmapActivityCard key={act.id} activity={act} onToggleStatus={onToggleStatus} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
