import type { InterviewCategory } from "../types/interview"

export const interviewCategories: InterviewCategory[] = [
  // Technical
  { id: "int_c_cpp", name: "C and C++", type: "Technical", description: "Memory management, pointers, and OOP basics.", totalQuestions: 15 },
  { id: "int_java", name: "Java", type: "Technical", description: "JVM, multithreading, and collections framework.", totalQuestions: 15 },
  { id: "int_dsa", name: "Data Structures & Algorithms", type: "Technical", description: "Complexity, trees, graphs, and optimization.", totalQuestions: 25 },
  { id: "int_dbms", name: "DBMS & SQL", type: "Technical", description: "Normalization, transactions, and complex queries.", totalQuestions: 20 },
  { id: "int_web", name: "Web Dev & React", type: "Technical", description: "HTTP, state management, and modern JS.", totalQuestions: 20 },

  // HR
  { id: "hr_intro", name: "Tell me about yourself", type: "HR", description: "The classic opener and variations.", totalQuestions: 5 },
  { id: "hr_strengths", name: "Strengths & Weaknesses", type: "HR", description: "Self-awareness and honesty.", totalQuestions: 5 },
  { id: "hr_goals", name: "Career Goals", type: "HR", description: "Short-term and long-term vision.", totalQuestions: 5 },
  { id: "hr_challenges", name: "Handling Challenges", type: "HR", description: "Conflict resolution and problem-solving.", totalQuestions: 10 },
  
  // Placement
  { id: "pl_resume", name: "Resume-based", type: "Placement", description: "Deep dives into your mentioned skills.", totalQuestions: 10 },
  { id: "pl_project", name: "Project Explanation", type: "Placement", description: "Architecture, challenges, and outcomes.", totalQuestions: 10 },
  { id: "pl_internship", name: "Internship Experience", type: "Placement", description: "Impact, learnings, and team dynamics.", totalQuestions: 5 },
]

export const getCategoriesByType = () => {
  const grouped = interviewCategories.reduce((acc, cat) => {
    if (!acc[cat.type]) acc[cat.type] = []
    acc[cat.type].push(cat)
    return acc
  }, {} as Record<string, InterviewCategory[]>)
  return grouped
}
