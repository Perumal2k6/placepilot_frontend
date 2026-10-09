import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import type { User, Role } from '../types/auth'
import { authenticateDemo } from '../services/demoAuth'

interface AuthContextType {
  user: User | null
  login: (email: string, role: Role) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for saved session
    try {
      const storedUser = localStorage.getItem('demo_session_user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    } catch (e) {
      console.error("Failed to parse or access stored user", e)
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, role: Role) => {
    const loggedInUser = await authenticateDemo(email, role)
    setUser(loggedInUser)
    try {
      localStorage.setItem('demo_session_user', JSON.stringify(loggedInUser))
    } catch (e) {
      console.warn("Could not save session to localStorage", e)
    }
  }

  const logout = () => {
    setUser(null)
    try {
      localStorage.removeItem('demo_session_user')
    } catch (e) {
      console.warn("Could not remove session from localStorage", e)
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
