import { useState } from "react"
import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"
import { StudentTable } from "@/features/faculty/components/StudentTable"
import { demoStudents } from "@/features/faculty/data/facultyDemoData"
import type { DemoStudent } from "@/features/faculty/types/faculty"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FacultyStudentsPage() {
  const [selectedStudent, setSelectedStudent] = useState<DemoStudent | null>(null)

  if (selectedStudent) {
    return (
      <PageContainer className="pb-12 bg-gray-50/30 dark:bg-gray-950/30">
        <Button variant="ghost" onClick={() => setSelectedStudent(null)} className="mb-4">
          <ChevronLeft className="h-4 w-4 mr-2" /> Back to Students
        </Button>
        <PageHeader title={`${selectedStudent.name}'s Profile`} description={`Student ID: ${selectedStudent.id}`} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Academic Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Department</p>
                <p className="font-medium">{selectedStudent.department}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Year</p>
                <p className="font-medium">{selectedStudent.year}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{selectedStudent.email}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <p className="text-sm text-gray-500">Avg Accuracy</p>
                  <p className="text-2xl font-bold">{selectedStudent.performance.averageAccuracy}%</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <p className="text-sm text-gray-500">Aptitude</p>
                  <p className="text-2xl font-bold">{selectedStudent.performance.aptitudeScore}%</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <p className="text-sm text-gray-500">Technical</p>
                  <p className="text-2xl font-bold">{selectedStudent.performance.technicalScore}%</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <p className="text-sm text-gray-500">Coding</p>
                  <p className="text-2xl font-bold">{selectedStudent.performance.codingScore}%</p>
                </div>
              </div>
              <div className="mt-8 text-center text-gray-500">
                Detailed test history requires backend integration.
              </div>
            </CardContent>
          </Card>
        </div>
      </PageContainer>
    )
  }

  return (
    <PageContainer className="pb-12 bg-gray-50/30 dark:bg-gray-950/30 min-h-screen">
      <PageHeader 
        title="Student Management" 
        description="View and analyze student performance across all practice modules and mock tests." 
      />

      <StudentTable students={demoStudents} onViewStudent={setSelectedStudent} />
    </PageContainer>
  )
}
