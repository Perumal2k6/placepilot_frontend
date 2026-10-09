import type { Achievement } from "../types/achievement"
import { AchievementCard } from "./AchievementCard"

export function AchievementGrid({ achievements }: { achievements: Achievement[] }) {
  
  const unlockedCount = achievements.filter(a => a.isUnlocked).length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Your Badges</h3>
        <span className="text-sm font-semibold bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-300">
          {unlockedCount} / {achievements.length} Unlocked
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {achievements.map(ach => (
          <AchievementCard key={ach.id} achievement={ach} />
        ))}
      </div>
    </div>
  )
}
