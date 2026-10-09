export type Priority = "High" | "Medium" | "Low"
export type ActivityStatus = "Pending" | "Completed"

export interface RoadmapActivity {
  id: string
  title: string
  topic: string
  category: "Aptitude" | "Technical" | "Coding" | "Interview"
  priority: Priority
  estimatedMinutes: number
  status: ActivityStatus
  dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"
  link: string // The route to navigate to
}

export interface RoadmapProgress {
  totalActivities: number
  completedActivities: number
  completionPercentage: number
}
