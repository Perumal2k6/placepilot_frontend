import { useState } from "react"
import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"
import { UserManagementTable } from "@/features/admin/components/UserManagementTable"
import { demoUsers } from "@/features/admin/data/adminDemoData"
import type { DemoUser } from "@/features/admin/types/admin"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function AdminFacultyPage() {
  const [faculty, setFaculty] = useState<DemoUser[]>(demoUsers.filter(u => u.role === "Faculty"))

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to permanently delete this faculty member?")) {
      setFaculty(prev => prev.filter(u => u.id !== id))
    }
  }

  const handleAddUser = () => {
    alert("Add Faculty Form Modal would open here.")
  }

  return (
    <PageContainer className="pb-12 bg-gray-50/30 dark:bg-gray-950/30 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
        <PageHeader title="Faculty Management" description="Manage faculty profiles and department assignments." />
        <Button onClick={handleAddUser} className="w-full md:w-auto"><Plus className="h-4 w-4 mr-2" /> Add Faculty</Button>
      </div>

      <UserManagementTable users={faculty} onDelete={handleDelete} />
    </PageContainer>
  )
}
