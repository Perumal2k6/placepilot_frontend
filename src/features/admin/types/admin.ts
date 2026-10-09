export type AdminRole = "Student" | "Faculty" | "Admin"

export interface DemoUser {
  id: string
  name: string
  email: string
  role: AdminRole
  department?: string
  status: "Active" | "Inactive"
  lastLogin?: string
}

export interface DemoDepartment {
  id: string
  name: string
  headOfDepartment: string
  studentCount: number
  facultyCount: number
  status: "Active" | "Inactive"
}
