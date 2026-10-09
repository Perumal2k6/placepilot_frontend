import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200 dark:text-gray-800">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-4 tracking-tight">Page not found</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="mt-8">
          <Link to="/">
            <Button size="lg">Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
