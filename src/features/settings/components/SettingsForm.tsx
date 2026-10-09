import { useState, useEffect } from "react"
import { useAuth } from "@/features/auth/hooks/useAuth"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LogOut, Moon, Sun, Monitor, Bell, Shield, Laptop } from "lucide-react"

export function SettingsForm() {
  const { user, logout } = useAuth()
  
  // Theme logic mock (assuming tailwind dark class on document)
  const [theme, setTheme] = useState("system")
  const [emailNotifs, setEmailNotifs] = useState(true)
  const [pushNotifs, setPushNotifs] = useState(false)

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark")
    } else {
      // System
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }, [theme])

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* Appearance Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Monitor className="h-5 w-5 text-gray-500" /> Appearance</CardTitle>
          <CardDescription>Customize how the portal looks on your device.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>Theme Preference</Label>
            <div className="flex gap-4">
              <Button variant={theme === "light" ? "default" : "outline"} onClick={() => setTheme("light")} className="w-full">
                <Sun className="mr-2 h-4 w-4" /> Light
              </Button>
              <Button variant={theme === "dark" ? "default" : "outline"} onClick={() => setTheme("dark")} className="w-full">
                <Moon className="mr-2 h-4 w-4" /> Dark
              </Button>
              <Button variant={theme === "system" ? "default" : "outline"} onClick={() => setTheme("system")} className="w-full">
                <Monitor className="mr-2 h-4 w-4" /> System
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preferences Settings (Role Specific) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Laptop className="h-5 w-5 text-gray-500" /> General Preferences</CardTitle>
          <CardDescription>Set your default views and workflow preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3 max-w-sm">
            <Label>Default Landing Page</Label>
            <Select defaultValue="dashboard">
              <SelectTrigger>
                <SelectValue placeholder="Select landing page" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dashboard">Dashboard</SelectItem>
                {user?.role === "student" && <SelectItem value="roadmap">Weekly Roadmap</SelectItem>}
                {user?.role === "student" && <SelectItem value="mock-tests">Mock Tests</SelectItem>}
                {user?.role === "faculty" && <SelectItem value="students">Student Roster</SelectItem>}
                {user?.role === "admin" && <SelectItem value="users">User Management</SelectItem>}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Notifications Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Bell className="h-5 w-5 text-gray-500" /> Notifications</CardTitle>
          <CardDescription>Manage how you receive alerts and updates.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Email Notifications</Label>
              <p className="text-sm text-gray-500">Receive weekly summaries and important alerts via email.</p>
            </div>
            <Switch checked={emailNotifs} onCheckedChange={setEmailNotifs} />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">In-App Push Notifications</Label>
              <p className="text-sm text-gray-500">Get instant alerts while using the portal.</p>
            </div>
            <Switch checked={pushNotifs} onCheckedChange={setPushNotifs} />
          </div>
          <p className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
            Note: Notification delivery requires backend integration. Preferences are saved locally for this demo.
          </p>
        </CardContent>
      </Card>

      {/* Account Settings & Security */}
      <Card className="border-red-100 dark:border-red-900/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400"><Shield className="h-5 w-5" /> Account & Security</CardTitle>
          <CardDescription>Manage your authentication and security settings.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 max-w-sm border p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
            <h4 className="font-medium text-sm">Change Password (Demo)</h4>
            <div className="space-y-2">
              <Label className="text-xs">New Password</Label>
              <Input type="password" placeholder="••••••••" disabled />
            </div>
            <Button variant="secondary" size="sm" disabled className="w-full">Update Password</Button>
            <p className="text-xs text-gray-400 text-center">Disabled in demo mode.</p>
          </div>
        </CardContent>
        <CardFooter className="bg-red-50 dark:bg-red-900/10 border-t border-red-100 dark:border-red-900/30 p-6 flex justify-between items-center">
          <div className="text-sm text-red-800 dark:text-red-300 font-medium">
            End your current session across all devices.
          </div>
          <Button variant="destructive" onClick={logout}>
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </CardFooter>
      </Card>
      
    </div>
  )
}
