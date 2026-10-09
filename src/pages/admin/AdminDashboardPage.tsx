import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"
import { AdminOverviewCards } from "@/features/admin/components/AdminOverviewCards"
import { demoUsers, demoDepartments } from "@/features/admin/data/adminDemoData"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function AdminDashboardPage() {
  const totalStudents = demoUsers.filter(u => u.role === "Student").length
  const totalFaculty = demoUsers.filter(u => u.role === "Faculty").length

  return (
    <PageContainer className="pb-12 bg-gray-50/30 dark:bg-gray-950/30 min-h-screen">
      <PageHeader 
        title="Admin Dashboard" 
        description="Global overview of users, departments, and system health." 
      />

      <AdminOverviewCards 
        totalUsers={demoUsers.length}
        totalStudents={totalStudents}
        totalFaculty={totalFaculty}
        totalDepartments={demoDepartments.length}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card>
          <CardHeader className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
            <CardTitle className="text-lg">System Quick Links</CardTitle>
          </CardHeader>
          <CardContent className="p-6 grid grid-cols-2 gap-4">
            <Link to="/admin/users">
              <Button variant="outline" className="w-full h-24 flex flex-col gap-2">Manage All Users</Button>
            </Link>
            <Link to="/admin/departments">
              <Button variant="outline" className="w-full h-24 flex flex-col gap-2">Manage Departments</Button>
            </Link>
            <Link to="/admin/questions">
              <Button variant="outline" className="w-full h-24 flex flex-col gap-2">Question Bank</Button>
            </Link>
            <Link to="/admin/reports">
              <Button variant="outline" className="w-full h-24 flex flex-col gap-2">System Reports</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
            <CardTitle className="text-lg">Recent Administrative Activity</CardTitle>
          </CardHeader>
          <CardContent className="p-6 text-sm text-gray-500">
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                <span>System Admin updated Dept "Mechanical Engineering"</span>
                <span>2 hrs ago</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                <span>Created new Faculty account "Dr. Grace Hopper"</span>
                <span>Yesterday</span>
              </div>
              <div className="flex justify-between">
                <span>Archived Mock Test "Full Placement Assessment"</span>
                <span>3 days ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}
