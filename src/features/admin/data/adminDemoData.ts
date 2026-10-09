import type { DemoUser, DemoDepartment } from "../types/admin"

export const demoDepartments: DemoDepartment[] = [
  {
    id: "dept_cs",
    name: "Computer Science",
    headOfDepartment: "Dr. Alan Turing",
    studentCount: 245,
    facultyCount: 15,
    status: "Active"
  },
  {
    id: "dept_it",
    name: "Information Technology",
    headOfDepartment: "Dr. Grace Hopper",
    studentCount: 180,
    facultyCount: 12,
    status: "Active"
  },
  {
    id: "dept_ec",
    name: "Electronics & Communication",
    headOfDepartment: "Dr. Claude Shannon",
    studentCount: 150,
    facultyCount: 10,
    status: "Active"
  },
  {
    id: "dept_me",
    name: "Mechanical Engineering",
    headOfDepartment: "Dr. Nikola Tesla",
    studentCount: 120,
    facultyCount: 8,
    status: "Inactive"
  }
]

export const demoUsers: DemoUser[] = [
  { id: "usr_1", name: "System Admin", email: "admin@placepilot.com", role: "Admin", status: "Active", lastLogin: "2026-10-09T08:00:00Z" },
  { id: "usr_2", name: "Dr. Alan Turing", email: "alan@placepilot.com", role: "Faculty", department: "Computer Science", status: "Active", lastLogin: "2026-10-08T14:30:00Z" },
  { id: "usr_3", name: "Dr. Grace Hopper", email: "grace@placepilot.com", role: "Faculty", department: "Information Technology", status: "Active" },
  { id: "usr_4", name: "Alex Student", email: "student@demo.com", role: "Student", department: "Computer Science", status: "Active", lastLogin: "2026-10-09T09:15:00Z" },
  { id: "usr_5", name: "Priya Sharma", email: "priya@demo.com", role: "Student", department: "Information Technology", status: "Active", lastLogin: "2026-10-07T11:00:00Z" },
  { id: "usr_6", name: "Inactive User", email: "old@demo.com", role: "Student", department: "Electronics & Communication", status: "Inactive" }
]
