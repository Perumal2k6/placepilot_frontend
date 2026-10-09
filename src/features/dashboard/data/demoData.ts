export const studentInfo = {
  name: "Alex",
  subtitle: "Keep up the great work! You're making solid progress.",
  status: "Intermediate"
}

export const readinessScore = {
  overall: 68,
  breakdown: [
    { name: "Aptitude", score: 75 },
    { name: "Technical", score: 60 },
    { name: "Coding", score: 65 },
    { name: "Interview", score: 70 }
  ],
  note: "Calculated based on demo data performance."
}

export const statistics = [
  { label: "Questions Practiced", value: "342", trend: "+24 this week", icon: "Target" },
  { label: "Mock Tests", value: "8", trend: "2 pending review", icon: "FileText" },
  { label: "Avg. Accuracy", value: "76%", trend: "+2% from last month", icon: "CheckCircle" },
  { label: "Practice Time", value: "42h 15m", trend: "3.5h this week", icon: "Clock" }
]

export const performanceData = [
  { day: "Mon", score: 45 },
  { day: "Tue", score: 52 },
  { day: "Wed", score: 48 },
  { day: "Thu", score: 61 },
  { day: "Fri", score: 55 },
  { day: "Sat", score: 67 },
  { day: "Sun", score: 74 },
]

export const categories = [
  { id: "aptitude", title: "Quantitative Aptitude", description: "Math and calculation skills", progress: 65, completed: 42, total: 100, path: "/student/aptitude" },
  { id: "logical", title: "Logical Reasoning", description: "Pattern recognition and logic", progress: 80, completed: 80, total: 100, path: "/student/aptitude" },
  { id: "verbal", title: "Verbal Ability", description: "English comprehension", progress: 55, completed: 55, total: 100, path: "/student/aptitude" },
  { id: "technical", title: "Technical Core", description: "OS, DBMS, Networks", progress: 40, completed: 20, total: 50, path: "/student/technical" },
  { id: "coding", title: "Coding Practice", description: "DSA and Algorithms", progress: 50, completed: 25, total: 50, path: "/student/coding" },
  { id: "interview", title: "Interviews", description: "HR & Technical mocks", progress: 30, completed: 3, total: 10, path: "/student/interview" },
]

export const recentTopics = [
  { id: "1", title: "Dynamic Programming", category: "Coding", status: "In Progress", progress: 45, path: "/student/coding" },
  { id: "2", title: "Time and Work", category: "Quantitative Aptitude", status: "Completed", progress: 100, path: "/student/aptitude" },
  { id: "3", title: "Database Normalization", category: "Technical Core", status: "In Progress", progress: 80, path: "/student/technical" },
]

export const weeklyActivity = [
  { day: "M", completed: true },
  { day: "T", completed: true },
  { day: "W", completed: false },
  { day: "T", completed: true },
  { day: "F", completed: true },
  { day: "S", completed: false },
  { day: "S", completed: false },
]

export const upcomingGoals = [
  { id: "1", title: "Complete 10 DP problems", progress: 4, total: 10 },
  { id: "2", title: "Take full mock test", progress: 0, total: 1 },
  { id: "3", title: "Revise OOP concepts", progress: 1, total: 1 },
]
