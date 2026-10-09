import { Timer } from "lucide-react"
import { cn } from "@/lib/utils"

interface Props {
  timeRemaining: number
  mode: "Practice" | "Timed"
}

export function TechnicalTimer({ timeRemaining, mode }: Props) {
  if (mode !== "Timed") return null

  const m = Math.floor(timeRemaining / 60)
  const s = timeRemaining % 60
  
  const isWarning = timeRemaining < 60 // Less than 1 minute

  return (
    <div className={cn(
      "flex items-center gap-2 px-4 py-2 rounded-lg border font-mono font-bold text-lg",
      isWarning 
        ? "bg-red-50 border-red-200 text-red-600 animate-pulse" 
        : "bg-white border-gray-200 text-gray-700 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300"
    )}>
      <Timer className="h-5 w-5" />
      {m.toString().padStart(2, '0')}:{s.toString().padStart(2, '0')}
    </div>
  )
}
