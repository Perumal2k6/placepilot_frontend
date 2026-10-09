import { Card, CardContent } from "@/components/ui/card"
import { Users, FileText, Target, AlertCircle } from "lucide-react"

export function FacultyOverviewCards({ studentsCount, mockTestsCount, questionsCount }: { studentsCount: number, mockTestsCount: number, questionsCount: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <Card>
        <CardContent className="p-6 flex items-center gap-4">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Students</p>
            <p className="text-2xl font-bold">{studentsCount}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex items-center gap-4">
          <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg text-purple-600 dark:text-purple-400">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Mock Tests Available</p>
            <p className="text-2xl font-bold">{mockTestsCount}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex items-center gap-4">
          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg text-green-600 dark:text-green-400">
            <Target className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Questions Bank</p>
            <p className="text-2xl font-bold">{questionsCount}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex items-center gap-4">
          <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg text-red-600 dark:text-red-400">
            <AlertCircle className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">At-Risk Students</p>
            <p className="text-2xl font-bold">2</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
