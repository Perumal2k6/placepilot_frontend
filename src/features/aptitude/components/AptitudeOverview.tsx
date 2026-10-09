import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { getTopicsByCategory } from "../data/aptitudeTopics"
import { PracticeSetupDialog } from "./PracticeSetupDialog"
import type { SessionConfig } from "../types/aptitude"

interface Props {
  onStartSession: (config: SessionConfig) => void
}

export function AptitudeOverview({ onStartSession }: Props) {
  const grouped = getTopicsByCategory()

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-500">Total Questions Practiced</p>
            <h3 className="text-3xl font-bold mt-2">1,245</h3>
            <p className="text-xs text-green-600 mt-2 font-medium">+150 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-500">Average Accuracy</p>
            <h3 className="text-3xl font-bold mt-2">78%</h3>
            <p className="text-xs text-green-600 mt-2 font-medium">+2% overall</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-500">Sessions Completed</p>
            <h3 className="text-3xl font-bold mt-2">42</h3>
            <p className="text-xs text-gray-500 mt-2 font-medium">Keep it up!</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        {Object.entries(grouped).map(([category, topics]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-xl font-bold border-b pb-2">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topics.map(topic => (
                <Card key={topic.id} className="flex flex-col">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{topic.name}</CardTitle>
                    <CardDescription className="line-clamp-2 min-h-8">{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3 flex-1">
                    <p className="text-xs text-gray-500 font-medium">
                      {topic.totalQuestions} questions available
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <PracticeSetupDialog topicId={topic.id} topicName={topic.name} onStart={onStartSession} />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
