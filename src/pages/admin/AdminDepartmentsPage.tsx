import { useState } from "react"
import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"
import { DepartmentTable } from "@/features/admin/components/DepartmentTable"
import { demoDepartments } from "@/features/admin/data/adminDemoData"
import type { DemoDepartment } from "@/features/admin/types/admin"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function AdminDepartmentsPage() {
  const [departments, setDepartments] = useState<DemoDepartment[]>(demoDepartments)

  const handleDelete = (id: string) => {
    const dept = departments.find(d => d.id === id)
    if (dept && (dept.studentCount > 0 || dept.facultyCount > 0)) {
      alert(`Cannot delete department "${dept.name}" because it still has associated students or faculty.`)
      return
    }
    
    if (confirm("Are you sure you want to delete this department?")) {
      setDepartments(prev => prev.filter(d => d.id !== id))
    }
  }

  const handleAddDept = () => {
    alert("Add Department Form Modal would open here.")
  }

  return (
    <PageContainer className="pb-12 bg-gray-50/30 dark:bg-gray-950/30 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
        <PageHeader title="Department Management" description="Manage academic departments and organizational structures." />
        <Button onClick={handleAddDept} className="w-full md:w-auto"><Plus className="h-4 w-4 mr-2" /> Add Department</Button>
      </div>

      <DepartmentTable departments={departments} onDelete={handleDelete} />
    </PageContainer>
  )
}
