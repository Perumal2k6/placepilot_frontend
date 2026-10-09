import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BellIcon, SearchIcon, MenuIcon, LogOut } from "lucide-react"
import { useAuth } from "@/features/auth/hooks/useAuth"

export function AppHeader() {
  const { user, logout } = useAuth()

  return (
    <header className="h-14 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center flex-1">
        <Button variant="ghost" size="icon" className="md:hidden mr-2">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
        <div className="w-full max-w-md flex items-center relative hidden md:flex">
          <SearchIcon className="h-4 w-4 absolute left-2.5 text-gray-500" />
          <Input 
            type="search" 
            placeholder="Search resources, topics, etc..." 
            className="w-full pl-9 bg-gray-50 border-gray-200 focus-visible:ring-blue-500" 
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative text-gray-500 hover:text-gray-700">
          <BellIcon className="h-5 w-5" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          <span className="sr-only">Notifications</span>
        </Button>
        
        {user ? (
          <div className="flex items-center gap-3 border-l pl-4 dark:border-gray-800">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs text-gray-500 mt-1 capitalize">{user.role}</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
              <span className="text-sm font-medium text-blue-700">{user.name.charAt(0)}</span>
            </div>
            <Button variant="ghost" size="icon" onClick={logout} title="Sign Out">
              <LogOut className="h-4 w-4 text-gray-500" />
            </Button>
          </div>
        ) : null}
      </div>
    </header>
  )
}
