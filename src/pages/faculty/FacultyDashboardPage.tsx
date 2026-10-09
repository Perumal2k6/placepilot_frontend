import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"
import { FacultyOverviewCards } from "@/features/faculty/components/FacultyOverviewCards"
import { demoStudents, demoMockTests, demoQuestions } from "@/features/faculty/data/facultyDemoData"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function FacultyDashboardPage() {
  const atRiskStudents = demoStudents.filter(s => s.performance.averageAccuracy < 50)

  return (
    <PageContainer className="pb-12 bg-gray-50/30 dark:bg-gray-950/30 min-h-screen">
      <PageHeader 
        title="Faculty Dashboard" 
        description="Monitor student progress, manage mock tests, and review performance analytics." 
      />

      <FacultyOverviewCards 
        studentsCount={demoStudents.length}
        mockTestsCount={demoMockTests.length}
        questionsCount={demoQuestions.length}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card className="border-red-200 dark:border-red-900/50">
          <CardHeader className="bg-red-50/50 dark:bg-red-900/10 border-b border-red-100 dark:border-red-900/30">
            <CardTitle className="text-red-800 dark:text-red-400 text-lg">Students Needing Attention</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {atRiskStudents.length === 0 ? (
                <div className="p-6 text-center text-gray-500">No students are currently at risk.</div>
              ) : atRiskStudents.map(s => (
                <div key={s.id} className="p-4 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{s.name}</p>
                    <p className="text-xs text-gray-500">{s.department}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-red-600 font-bold">{s.performance.averageAccuracy}% Avg</p>
                    <Link to="/faculty/students">
                      <Button variant="link" size="sm" className="text-blue-600 p-0 h-auto">View Details →</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="p-6 grid grid-cols-2 gap-4">
            <Link to="/faculty/mock-tests">
              <Button variant="outline" className="w-full h-24 flex flex-col gap-2">
                Create Mock Test
              </Button>
            </Link>
            <Link to="/faculty/questions">
              <Button variant="outline" className="w-full h-24 flex flex-col gap-2">
                Manage Questions
              </Button>
            </Link>
            <Link to="/faculty/students">
              <Button variant="outline" className="w-full h-24 flex flex-col gap-2">
                View All Students
              </Button>
            </Link>
            <Link to="/faculty/reports">
              <Button variant="outline" className="w-full h-24 flex flex-col gap-2">
                Generate Reports
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}
