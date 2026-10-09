import type { RoadmapActivity } from "../types/roadmap"

export const demoRoadmapActivities: RoadmapActivity[] = [
  {
    id: "ra_1",
    title: "Master Two Sum",
    topic: "Arrays and Strings",
    category: "Coding",
    priority: "High",
    estimatedMinutes: 30,
    status: "Pending",
    dayOfWeek: "Monday",
    link: "/student/coding/two-sum"
  },
  {
    id: "ra_2",
    title: "Quantitative Aptitude Basics",
    topic: "Math",
    category: "Aptitude",
    priority: "Medium",
    estimatedMinutes: 45,
    status: "Completed",
    dayOfWeek: "Monday",
    link: "/student/aptitude"
  },
  {
    id: "ra_3",
    title: "Review Data Structures",
    topic: "CS Fundamentals",
    category: "Technical",
    priority: "High",
    estimatedMinutes: 60,
    status: "Pending",
    dayOfWeek: "Tuesday",
    link: "/student/technical"
  },
  {
    id: "ra_4",
    title: "Practice HR Intro",
    topic: "Tell me about yourself",
    category: "Interview",
    priority: "Low",
    estimatedMinutes: 20,
    status: "Pending",
    dayOfWeek: "Wednesday",
    link: "/student/interview"
  },
  {
    id: "ra_5",
    title: "Solve Valid Parentheses",
    topic: "Stacks and Queues",
    category: "Coding",
    priority: "High",
    estimatedMinutes: 40,
    status: "Pending",
    dayOfWeek: "Thursday",
    link: "/student/coding/valid-parentheses"
  }
]
