import type { Achievement } from "../types/achievement"
import { Card, CardContent } from "@/components/ui/card"
import { Lock, Footprints, Target, Brain, Trophy, Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function AchievementCard({ achievement }: { achievement: Achievement }) {
  
  const Icon = () => {
    switch (achievement.icon) {
      case "Footprints": return <Footprints className="h-8 w-8" />
      case "Target": return <Target className="h-8 w-8" />
      case "Brain": return <Brain className="h-8 w-8" />
      case "Trophy": return <Trophy className="h-8 w-8" />
      case "Star": return <Star className="h-8 w-8" />
      default: return <Star className="h-8 w-8" />
    }
  }

  const isUnlocked = achievement.isUnlocked
  const progressPercent = achievement.currentProgress !== undefined 
    ? Math.min(100, Math.round((achievement.currentProgress / achievement.targetValue) * 100))
    : 0

  return (
    <Card className={cn(
      "border-2 transition-all relative overflow-hidden h-full flex flex-col",
      isUnlocked ? "border-yellow-400 dark:border-yellow-600 bg-yellow-50/50 dark:bg-yellow-900/10" : "border-gray-200 dark:border-gray-800"
    )}>
      {isUnlocked && (
        <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">
          UNLOCKED
        </div>
      )}
      <CardContent className="p-6 flex flex-col items-center text-center gap-4 flex-1">
        <div className={cn(
          "p-4 rounded-full",
          isUnlocked ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400" : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500"
        )}>
          {isUnlocked ? <Icon /> : <Lock className="h-8 w-8" />}
        </div>
        
        <div>
          <h4 className={cn("font-bold text-lg mb-1", !isUnlocked && "text-gray-500")}>{achievement.title}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{achievement.description}</p>
        </div>

        {!isUnlocked && achievement.currentProgress !== undefined && (
          <div className="w-full mt-auto pt-4">
            <div className="flex justify-between text-xs font-semibold text-gray-500 mb-1">
              <span>Progress</span>
              <span>{achievement.currentProgress} / {achievement.targetValue}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5">
              <div 
                className="bg-blue-500 h-1.5 rounded-full transition-all" 
                style={{ width: `${progressPercent}%` }} 
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
