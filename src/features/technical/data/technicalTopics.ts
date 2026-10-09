import type { TechnicalTopic } from "../types/technical"

export const technicalTopics: TechnicalTopic[] = [
  // Programming Languages
  { id: "tech_c", name: "C Programming", category: "Programming Languages", description: "Pointers, memory management, and syntax.", totalQuestions: 15 },
  { id: "tech_cpp", name: "C++ Programming", category: "Programming Languages", description: "OOP in C++, STL, and memory.", totalQuestions: 15 },
  { id: "tech_java", name: "Java Programming", category: "Programming Languages", description: "JVM, Collections, and Multithreading.", totalQuestions: 20 },
  { id: "tech_python", name: "Python Programming", category: "Programming Languages", description: "Data structures, decorators, and generators.", totalQuestions: 15 },
  { id: "tech_js", name: "JavaScript Fundamentals", category: "Programming Languages", description: "Closures, promises, and the event loop.", totalQuestions: 20 },
  { id: "tech_ts", name: "TypeScript Fundamentals", category: "Programming Languages", description: "Interfaces, generics, and strict types.", totalQuestions: 10 },
  
  // CS Fundamentals
  { id: "cs_dsa", name: "Data Structures and Algorithms", category: "Computer Science Fundamentals", description: "Trees, graphs, dynamic programming.", totalQuestions: 25 },
  { id: "cs_oop", name: "Object-Oriented Programming", category: "Computer Science Fundamentals", description: "Inheritance, polymorphism, abstraction.", totalQuestions: 15 },
  { id: "cs_dbms", name: "Database Management Systems", category: "Computer Science Fundamentals", description: "ACID, normalization, and indexing.", totalQuestions: 20 },
  { id: "cs_sql", name: "SQL Fundamentals", category: "Computer Science Fundamentals", description: "Joins, subqueries, and aggregates.", totalQuestions: 15 },
  { id: "cs_os", name: "Operating Systems", category: "Computer Science Fundamentals", description: "Processes, threads, and scheduling.", totalQuestions: 15 },
  { id: "cs_networks", name: "Computer Networks", category: "Computer Science Fundamentals", description: "OSI model, TCP/IP, and routing.", totalQuestions: 15 },
  { id: "cs_se", name: "Software Engineering", category: "Computer Science Fundamentals", description: "SDLC, Agile, and design patterns.", totalQuestions: 10 },
  { id: "cs_arch", name: "Computer Architecture", category: "Computer Science Fundamentals", description: "CPU design, caching, and pipelines.", totalQuestions: 10 },

  // Web Development
  { id: "web_html_css", name: "HTML and CSS", category: "Web Development", description: "Semantic markup, flexbox, grid.", totalQuestions: 15 },
  { id: "web_react", name: "React Fundamentals", category: "Web Development", description: "Hooks, state, and lifecycle.", totalQuestions: 20 },
  { id: "web_api", name: "HTTP and REST API", category: "Web Development", description: "Status codes, methods, and principles.", totalQuestions: 15 },
]

export const getTopicsByCategory = () => {
  const grouped = technicalTopics.reduce((acc, topic) => {
    if (!acc[topic.category]) acc[topic.category] = []
    acc[topic.category].push(topic)
    return acc
  }, {} as Record<string, TechnicalTopic[]>)
  return grouped
}
