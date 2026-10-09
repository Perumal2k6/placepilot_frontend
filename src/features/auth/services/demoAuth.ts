import type { User, Role } from "../types/auth"

export const DEMO_USERS: Record<Role, User> = {
  student: { id: "s1", name: "Alex Student", email: "student@demo.com", role: "student" },
  faculty: { id: "f1", name: "Dr. Smith", email: "faculty@demo.com", role: "faculty" },
  admin: { id: "a1", name: "Admin User", email: "admin@demo.com", role: "admin" }
}

export const authenticateDemo = async (email: string, role: Role): Promise<User> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800))
  
  const user = DEMO_USERS[role]
  
  if (email === user.email) {
    return user
  }
  
  throw new Error(`Invalid demo credentials. Use ${user.email} for ${role} role.`)
}
