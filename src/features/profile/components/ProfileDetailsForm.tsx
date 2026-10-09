import { useState } from "react"
import { useAuth } from "@/features/auth/hooks/useAuth"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { CheckCircle2, UserCircle2 } from "lucide-react"

export function ProfileDetailsForm() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [success, setSuccess] = useState(false)
  
  // Local state for the form
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    department: "Computer Science", // Mock demo data for existing user model lacking it
    academicYear: "Final Year",
    skills: "React, TypeScript, Node.js"
  })

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      setIsEditing(false)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    }, 1000)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      department: "Computer Science",
      academicYear: "Final Year",
      skills: "React, TypeScript, Node.js"
    })
  }

  return (
    <Card className="max-w-3xl mx-auto shadow-sm">
      <CardHeader className="flex flex-row items-center gap-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/20 pb-6">
        <UserCircle2 className="h-16 w-16 text-blue-600 dark:text-blue-500" />
        <div>
          <CardTitle className="text-2xl">{user?.name}</CardTitle>
          <p className="text-gray-500 font-medium capitalize mt-1">{user?.role} Account</p>
        </div>
      </CardHeader>
      <CardContent className="p-6 md:p-8 space-y-6">
        
        {success && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 text-green-700 dark:text-green-400 p-4 rounded-lg flex items-center gap-2 mb-6">
            <CheckCircle2 className="h-5 w-5" />
            Profile updated successfully (Demo).
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})} 
              disabled={!isEditing} 
            />
          </div>
          <div className="space-y-2">
            <Label>Email Address</Label>
            <Input 
              type="email"
              value={formData.email} 
              onChange={e => setFormData({...formData, email: e.target.value})} 
              disabled={!isEditing} 
            />
          </div>

          {(user?.role === "student" || user?.role === "faculty") && (
            <div className="space-y-2">
              <Label>Department</Label>
              <Input 
                value={formData.department} 
                onChange={e => setFormData({...formData, department: e.target.value})} 
                disabled={!isEditing} 
              />
            </div>
          )}

          {user?.role === "student" && (
            <>
              <div className="space-y-2">
                <Label>Academic Year</Label>
                <Input 
                  value={formData.academicYear} 
                  onChange={e => setFormData({...formData, academicYear: e.target.value})} 
                  disabled={!isEditing} 
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>Skills & Interests</Label>
                <Input 
                  value={formData.skills} 
                  onChange={e => setFormData({...formData, skills: e.target.value})} 
                  disabled={!isEditing} 
                />
              </div>
            </>
          )}

          {user?.role === "faculty" && (
            <div className="space-y-2">
              <Label>Designation</Label>
              <Input value="Associate Professor" disabled={!isEditing} />
            </div>
          )}

          {user?.role === "admin" && (
            <div className="space-y-2">
              <Label>Administrative Role</Label>
              <Input value="System Administrator" disabled />
            </div>
          )}
        </div>

      </CardContent>
      <CardFooter className="p-6 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-4">
        {isEditing ? (
          <>
            <Button variant="outline" onClick={handleCancel} disabled={isSaving}>Cancel</Button>
            <Button onClick={handleSave} disabled={isSaving} className="bg-blue-600 hover:bg-blue-700">
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </>
        ) : (
          <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
        )}
      </CardFooter>
    </Card>
  )
}
