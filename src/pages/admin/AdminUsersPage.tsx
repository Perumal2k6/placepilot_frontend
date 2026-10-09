import { useState } from "react"
import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"
import { UserManagementTable } from "@/features/admin/components/UserManagementTable"
import { demoUsers } from "@/features/admin/data/adminDemoData"
import type { DemoUser } from "@/features/admin/types/admin"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function AdminUsersPage() {
  const [users, setUsers] = useState<DemoUser[]>(demoUsers)

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to permanently delete this user? This cannot be undone.")) {
      setUsers(prev => prev.filter(u => u.id !== id))
    }
  }

  const handleAddUser = () => {
    alert("Add User Form Modal would open here.")
  }

  return (
    <PageContainer className="pb-12 bg-gray-50/30 dark:bg-gray-950/30 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
        <PageHeader title="User Management" description="Create, update, or remove users and manage their roles across the platform." />
        <Button onClick={handleAddUser} className="w-full md:w-auto"><Plus className="h-4 w-4 mr-2" /> Add New User</Button>
      </div>

      <UserManagementTable users={users} onDelete={handleDelete} />
    </PageContainer>
  )
}
