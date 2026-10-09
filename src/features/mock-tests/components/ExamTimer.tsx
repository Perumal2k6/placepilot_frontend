import { Timer } from "lucide-react"
import { cn } from "@/lib/utils"

export function ExamTimer({ timeRemaining }: { timeRemaining: number }) {
  const m = Math.floor(timeRemaining / 60)
  const s = timeRemaining % 60
  const isWarning = timeRemaining < 120 // Less than 2 minutes

  return (
    <div className={cn(
      "flex items-center gap-2 px-4 py-2 rounded-lg border font-mono font-bold text-lg shadow-sm transition-colors",
      isWarning 
        ? "bg-red-50 border-red-300 text-red-600 animate-pulse" 
        : "bg-white border-gray-200 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
    )}>
      <Timer className="h-5 w-5" />
      {m.toString().padStart(2, '0')}:{s.toString().padStart(2, '0')}
    </div>
  )
}
