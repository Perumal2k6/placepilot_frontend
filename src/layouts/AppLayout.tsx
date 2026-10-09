import { Outlet } from "react-router-dom"
import { AppSidebar } from "./AppSidebar"
import { AppHeader } from "./AppHeader"

export function AppLayout() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <AppHeader />
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
