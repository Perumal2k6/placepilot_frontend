import { useState } from "react"
import { PageContainer } from "@/components/common/PageContainer"
import { PageHeader } from "@/components/common/PageHeader"
import { demoQuestions } from "@/features/faculty/data/facultyDemoData"
import type { DemoQuestion } from "@/features/faculty/types/faculty"
import { Button } from "@/components/ui/button"
import { Plus, Search, Edit2, Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function FacultyQuestionsPage() {
  const [questions, setQuestions] = useState<DemoQuestion[]>(demoQuestions)
  const [search, setSearch] = useState("")

  const filtered = questions.filter(q => q.text.toLowerCase().includes(search.toLowerCase()) || q.topic.toLowerCase().includes(search.toLowerCase()))

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this question?")) {
      setQuestions(prev => prev.filter(q => q.id !== id))
    }
  }

  const handleCreate = () => {
    alert("Question Editor UI would open here. This operation is strictly frontend-only for the demo.")
  }

  return (
    <PageContainer className="pb-12 bg-gray-50/30 dark:bg-gray-950/30 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
        <PageHeader title="Question Bank" description="Manage Aptitude, Technical, and Coding questions." />
        <Button onClick={handleCreate} className="w-full md:w-auto"><Plus className="h-4 w-4 mr-2" /> Add Question</Button>
      </div>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 mb-8 shadow-sm">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input 
            placeholder="Search questions or topics..." 
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 border-b border-gray-200 dark:border-gray-800 uppercase text-xs">
            <tr>
              <th className="px-6 py-4 font-medium">Question</th>
              <th className="px-6 py-4 font-medium">Module & Topic</th>
              <th className="px-6 py-4 font-medium">Difficulty</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">No questions found.</td>
              </tr>
            ) : filtered.map(q => (
              <tr key={q.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100 max-w-md truncate">
                  {q.text}
                </td>
                <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                  {q.module} - {q.topic}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                    q.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                    q.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {q.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => alert("Edit question form")}><Edit2 className="h-4 w-4 text-blue-600" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(q.id)}><Trash2 className="h-4 w-4 text-red-600" /></Button>
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
