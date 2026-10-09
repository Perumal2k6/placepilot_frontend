import { useState } from "react"
import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"
import { demoMockTests } from "@/features/faculty/data/facultyDemoData"
import type { DemoMockTest } from "@/features/faculty/types/faculty"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2 } from "lucide-react"

export default function FacultyMockTestsPage() {
  const [tests, setTests] = useState<DemoMockTest[]>(demoMockTests)

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this test?")) {
      setTests(prev => prev.filter(t => t.id !== id))
    }
  }

  const handleCreate = () => {
    alert("Test Creator UI would open here. This allows selecting questions and configuring scoring.")
  }

  return (
    <PageContainer className="pb-12 bg-gray-50/30 dark:bg-gray-950/30 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
        <PageHeader title="Mock Tests Management" description="Create, edit, and publish mock tests for students." />
        <Button onClick={handleCreate} className="w-full md:w-auto"><Plus className="h-4 w-4 mr-2" /> Create Mock Test</Button>
      </div>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 border-b border-gray-200 dark:border-gray-800 uppercase text-xs">
            <tr>
              <th className="px-6 py-4 font-medium">Test Title</th>
              <th className="px-6 py-4 font-medium">Configuration</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {tests.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">No mock tests found.</td>
              </tr>
            ) : tests.map(t => (
              <tr key={t.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-900 dark:text-gray-100">{t.title}</div>
                  <div className="text-xs text-gray-500">{t.category}</div>
                </td>
                <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                  {t.questionCount} Questions | {t.durationMinutes} mins
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                    t.status === 'Published' ? 'bg-green-100 text-green-700' :
                    t.status === 'Draft' ? 'bg-gray-100 text-gray-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {t.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => alert("Edit test form")}><Edit2 className="h-4 w-4 text-blue-600" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(t.id)}><Trash2 className="h-4 w-4 text-red-600" /></Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageContainer>
  )
}
