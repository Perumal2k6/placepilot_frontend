import { Card, CardContent } from "@/components/ui/card"
import { statistics } from "../data/demoData"
import { Target, FileText, CheckCircle, Clock } from "lucide-react"

const icons: Record<string, any> = {
  Target,
  FileText,
  CheckCircle,
  Clock
}

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statistics.map((stat, i) => {
        const Icon = icons[stat.icon]
        return (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
                  <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-gray-100">{stat.value}</h3>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                  {Icon && <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4 font-medium">{stat.trend}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
