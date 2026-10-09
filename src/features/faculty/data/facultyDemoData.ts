import type { DemoStudent, DemoQuestion, DemoMockTest } from "../types/faculty"

export const demoStudents: DemoStudent[] = [
  {
    id: "stu_001",
    name: "Alex Student",
    email: "student@demo.com",
    department: "Computer Science",
    year: "Final Year",
    status: "Active",
    enrollmentDate: "2023-08-15",
    performance: {
      aptitudeScore: 85,
      technicalScore: 78,
      codingScore: 92,
      testsCompleted: 14,
      averageAccuracy: 82
    }
  },
  {
    id: "stu_002",
    name: "Priya Sharma",
    email: "priya@demo.com",
    department: "Information Technology",
    year: "Third Year",
    status: "Active",
    enrollmentDate: "2024-01-10",
    performance: {
      aptitudeScore: 90,
      technicalScore: 88,
      codingScore: 85,
      testsCompleted: 12,
      averageAccuracy: 88
    }
  },
  {
    id: "stu_003",
    name: "Rahul Verma",
    email: "rahul@demo.com",
    department: "Computer Science",
    year: "Final Year",
    status: "Active",
    enrollmentDate: "2023-09-01",
    performance: {
      aptitudeScore: 65,
      technicalScore: 70,
      codingScore: 60,
      testsCompleted: 8,
      averageAccuracy: 64
    }
  },
  {
    id: "stu_004",
    name: "Anita Desai",
    email: "anita@demo.com",
    department: "Electronics",
    year: "Final Year",
    status: "Inactive",
    enrollmentDate: "2023-08-20",
    performance: {
      aptitudeScore: 40,
      technicalScore: 50,
      codingScore: 30,
      testsCompleted: 2,
      averageAccuracy: 40
    }
  },
  {
    id: "stu_005",
    name: "John Doe",
    email: "john@demo.com",
    department: "Information Technology",
    year: "Second Year",
    status: "Active",
    enrollmentDate: "2025-01-15",
    performance: {
      aptitudeScore: 75,
      technicalScore: 80,
      codingScore: 70,
      testsCompleted: 5,
      averageAccuracy: 75
    }
  }
]

export const demoQuestions: DemoQuestion[] = [
  { id: "q_1", module: "Aptitude", topic: "Quantitative", difficulty: "Medium", text: "If a train 120m long passes a pole in 6s, what is its speed?" },
  { id: "q_2", module: "Technical", topic: "OOP", difficulty: "Easy", text: "What is polymorphism?" },
  { id: "q_3", module: "Coding", topic: "Arrays", difficulty: "Medium", text: "Two Sum" },
  { id: "q_4", module: "Interview", topic: "HR", difficulty: "Medium", text: "Tell me about yourself." },
  { id: "q_5", module: "Technical", topic: "DBMS", difficulty: "Hard", text: "Explain BCNF." }
]

export const demoMockTests: DemoMockTest[] = [
  { id: "mt_1", title: "Aptitude Foundations", category: "Aptitude Mock Test", durationMinutes: 60, questionCount: 50, status: "Published", createdAt: "2026-09-10" },
  { id: "mt_2", title: "Technical Core Assessment", category: "Technical Interview Test", durationMinutes: 90, questionCount: 60, status: "Published", createdAt: "2026-09-15" },
  { id: "mt_3", title: "Coding Basics Test", category: "Programming Fundamentals", durationMinutes: 120, questionCount: 3, status: "Draft", createdAt: "2026-10-01" },
  { id: "mt_4", title: "Full Placement Assessment", category: "Full Assessment", durationMinutes: 180, questionCount: 100, status: "Archived", createdAt: "2025-12-01" }
]
