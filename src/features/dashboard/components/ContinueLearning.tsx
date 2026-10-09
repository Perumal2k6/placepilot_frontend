import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { recentTopics } from "../data/demoData"
import { Link } from "react-router-dom"
import { PlayCircle } from "lucide-react"

export function ContinueLearning() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">Continue Learning</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTopics.length > 0 ? (
            recentTopics.map((topic) => (
              <div key={topic.id} className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0 last:pb-0">
                <div className="space-y-1">
                  <p className="font-medium text-sm text-gray-900 dark:text-gray-100">{topic.title}</p>
                  <p className="text-xs text-gray-500">{topic.category}</p>
                </div>
                <Link to={topic.path}>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/50">
                    <PlayCircle className="h-5 w-5" />
                    <span className="sr-only">Continue {topic.title}</span>
                  </Button>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 text-center py-4">No recent topics found.</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
