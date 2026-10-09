import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { useAuth } from "@/features/auth/hooks/useAuth"
import { 
  LayoutDashboard, 
  BrainCircuit, 
  Code, 
  TerminalSquare,
  Users, 
  FileText, 
  Trophy, 
  Map, 
  BarChart, 
  Settings, 
  User,
  GraduationCap
} from "lucide-react"
import type { Role } from "@/features/auth/types/auth"

type NavItem = {
  name: string
  href: string
  icon: any
}

const NAV_CONFIG: Record<Role, { main: NavItem[], secondary: NavItem[] }> = {
  student: {
    main: [
      { name: "Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
      { name: "Aptitude", href: "/student/aptitude", icon: BrainCircuit },
      { name: "Technical", href: "/student/technical", icon: TerminalSquare },
      { name: "Coding", href: "/student/coding", icon: Code },
      { name: "Interview", href: "/student/interview", icon: Users },
      { name: "Mock Tests", href: "/student/mock-tests", icon: FileText },
      { name: "Results", href: "/student/results", icon: Trophy },
      { name: "Analytics", href: "/student/analytics", icon: BarChart },
      { name: "Roadmap", href: "/student/roadmap", icon: Map },
    ],
    secondary: [
      { name: "Achievements", href: "/student/achievements", icon: Trophy },
      { name: "Profile", href: "/student/profile", icon: User },
      { name: "Settings", href: "/student/settings", icon: Settings },
    ]
  },
  faculty: {
    main: [
      { name: "Dashboard", href: "/faculty/dashboard", icon: LayoutDashboard },
      { name: "Students", href: "/faculty/students", icon: GraduationCap },
      { name: "Questions", href: "/faculty/questions", icon: FileText },
      { name: "Mock Tests", href: "/faculty/mock-tests", icon: TerminalSquare },
      { name: "Reports", href: "/faculty/reports", icon: BarChart },
    ],
    secondary: [
      { name: "Profile", href: "/faculty/profile", icon: User },
    ]
  },
  admin: {
    main: [
      { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
      { name: "Users", href: "/admin/users", icon: Users },
      { name: "Students", href: "/admin/students", icon: GraduationCap },
      { name: "Faculty", href: "/admin/faculty", icon: User },
      { name: "Questions", href: "/admin/questions", icon: FileText },
      { name: "Reports", href: "/admin/reports", icon: BarChart },
    ],
    secondary: [
      { name: "Settings", href: "/admin/settings", icon: Settings },
    ]
  }
}

export function AppSidebar() {
  const location = useLocation()
  const { user } = useAuth()
  
  // Default to student if not logged in (though they shouldn't see this)
  const role = user?.role || "student"
  const nav = NAV_CONFIG[role]

  const NavItemRender = ({ item }: { item: NavItem }) => {
    const isActive = location.pathname === item.href || (location.pathname === '/' && item.href.endsWith('/dashboard'))
    const Icon = item.icon
    return (
      <Link
        to={item.href}
        className={cn(
          "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
          isActive 
            ? "bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-100" 
            : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        )}
      >
        <Icon className={cn("h-4 w-4", isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400")} />
        {item.name}
      </Link>
    )
  }

  return (
    <div className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col h-full overflow-y-auto">
      <div className="h-14 flex items-center px-4 border-b border-gray-200 dark:border-gray-800 font-bold text-lg tracking-tight text-blue-600 dark:text-blue-400">
        PlacePilot
      </div>
      <div className="flex-1 flex flex-col gap-1 p-3">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-2 px-3">Main</div>
        {nav.main.map((item) => (
          <NavItemRender key={item.name} item={item} />
        ))}
        
        {nav.secondary.length > 0 && (
          <>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-6 px-3">Personal</div>
            {nav.secondary.map((item) => (
              <NavItemRender key={item.name} item={item} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}
