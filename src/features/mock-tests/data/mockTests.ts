import type { MockTestConfig } from "../types/mockTest"

export const mockTests: MockTestConfig[] = [
  {
    id: "mt_aptitude_1",
    title: "Aptitude Foundations",
    description: "A comprehensive test covering quantitative and logical reasoning.",
    category: "Aptitude Mock Test",
    difficulty: "Medium",
    durationMinutes: 10,
    marksPerQuestion: 2,
    negativeMarking: 0.5,
    questions: [
      {
        id: "q_mt_apt_1",
        category: "Quantitative",
        text: "If a train 120m long passes a telegraph pole in 6 seconds, what is its speed?",
        options: ["20 m/s", "72 km/hr", "both A and B", "None of the above"],
        correctAnswer: 2,
        explanation: "Speed = Distance / Time = 120 / 6 = 20 m/s. In km/hr: 20 * 18/5 = 72 km/hr."
      },
      {
        id: "q_mt_apt_2",
        category: "Logical",
        text: "Find the next number in the series: 2, 6, 12, 20, 30, ...",
        options: ["40", "42", "44", "48"],
        correctAnswer: 1,
        explanation: "The differences are 4, 6, 8, 10. Next difference is 12. So 30 + 12 = 42."
      }
    ]
  },
  {
    id: "mt_tech_1",
    title: "Programming Fundamentals",
    description: "Core concepts of Data Structures, OOP, and basics of programming.",
    category: "Technical Interview Test",
    difficulty: "Hard",
    durationMinutes: 15,
    marksPerQuestion: 4,
    negativeMarking: 1,
    questions: [
      {
        id: "q_mt_tech_1",
        category: "DSA",
        text: "Which of the following sorting algorithms has the best average-case time complexity?",
        options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
        correctAnswer: 2,
        explanation: "Merge sort guarantees O(n log n) in the average and worst cases."
      },
      {
        id: "q_mt_tech_2",
        category: "OOP",
        text: "Which concept allows a class to have multiple methods with the same name but different parameters?",
        options: ["Method Overriding", "Method Overloading", "Encapsulation", "Abstraction"],
        correctAnswer: 1,
        explanation: "Method Overloading (Compile-time polymorphism) allows methods with the same name but different signatures."
      },
      {
        id: "q_mt_tech_3",
        category: "OS",
        text: "Which of the following is NOT a state of a process?",
        options: ["Ready", "Running", "Blocked", "Compiled"],
        correctAnswer: 3,
        explanation: "Compiled is not a process state. States are typically New, Ready, Running, Blocked/Waiting, Terminated."
      }
    ]
  }
]
