import { Button } from "@/components/ui/button"
import { studentInfo } from "../data/demoData"
import { Link } from "react-router-dom"

export function DashboardWelcome() {
  return (
    <div className="bg-blue-600 dark:bg-blue-800 rounded-xl p-6 md:p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center shadow-sm">
      <div className="mb-6 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, {studentInfo.name}! 👋</h2>
        <p className="text-blue-100 max-w-lg mb-4">{studentInfo.subtitle}</p>
        <div className="inline-flex items-center rounded-full border border-blue-400 bg-blue-700/50 px-3 py-1 text-sm font-medium">
          Current Level: {studentInfo.status}
        </div>
      </div>
      <div>
        <Link to="/student/coding">
          <Button variant="secondary" size="lg" className="font-semibold">
            Continue Learning
          </Button>
        </Link>
      </div>
    </div>
  )
}
