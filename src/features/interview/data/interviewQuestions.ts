import type { InterviewQuestion } from "../types/interview"

export const interviewQuestions: InterviewQuestion[] = [
  // Technical - OOP
  {
    id: "q_int_1",
    categoryId: "int_c_cpp",
    type: "Technical",
    difficulty: "Medium",
    question: "What is polymorphism and how is it achieved in C++?",
    modelAnswer: "Polymorphism means 'many forms'. In C++, it allows objects of different classes to be treated as objects of a common base class. It is primarily achieved through function overloading (compile-time) and virtual functions (run-time).",
    tips: [
      "Define compile-time vs run-time polymorphism.",
      "Mention virtual functions and the v-table.",
      "Give a quick real-world analogy (e.g., a Shape class with a draw() method)."
    ]
  },
  // Technical - Java
  {
    id: "q_int_2",
    categoryId: "int_java",
    type: "Technical",
    difficulty: "Hard",
    question: "Explain the internal working of a HashMap in Java.",
    modelAnswer: "A HashMap works on the principle of Hashing. It uses an array of Nodes (or Map.Entry) to store data. When put() is called, it calculates the hash of the key to find the bucket index. If multiple keys hash to the same bucket (collision), they are stored as a linked list (or balanced tree in Java 8+).",
    tips: [
      "Mention hashcode() and equals() methods.",
      "Explain the collision resolution mechanism.",
      "Mention the load factor (0.75) and resizing."
    ]
  },
  // HR - Intro
  {
    id: "q_hr_1",
    categoryId: "hr_intro",
    type: "HR",
    difficulty: "Easy",
    question: "Tell me about yourself.",
    framework: "The Present-Past-Future Framework:\n1. Present: Where you are right now (e.g., current degree/role).\n2. Past: Experience or key projects that led you here.\n3. Future: Why you are excited about this specific opportunity.",
    tips: [
      "Keep it under 2 minutes.",
      "Do not just recite your resume; highlight the 'why'.",
      "Tailor your response to the role you are applying for."
    ]
  },
  // HR - Weakness
  {
    id: "q_hr_2",
    categoryId: "hr_strengths",
    type: "HR",
    difficulty: "Medium",
    question: "What is your biggest weakness?",
    framework: "1. State a real, but non-fatal weakness (e.g., struggling to delegate, taking on too much).\n2. Immediately pivot to the concrete steps you are taking to improve it.\n3. Show a recent example of progress.",
    tips: [
      "Avoid cliché answers like 'I work too hard' or 'I am a perfectionist'.",
      "Do not choose a weakness that is a core requirement for the job.",
      "Focus 20% on the weakness and 80% on the improvement strategy."
    ]
  },
  // Placement - Project
  {
    id: "q_pl_1",
    categoryId: "pl_project",
    type: "Placement",
    difficulty: "Medium",
    question: "Explain the architecture of your most recent project.",
    framework: "STAR Method:\n- Situation: What was the goal of the project?\n- Task: What was your specific role or responsibility?\n- Action: What stack/architecture did you choose and WHY? (e.g., why MongoDB instead of SQL?)\n- Result: What was the outcome? Did you face scaling issues? How did you solve them?",
    tips: [
      "Be prepared to draw a block diagram if asked.",
      "Justify your tech stack choices; 'because it was easy' is a red flag.",
      "Be honest about the parts you didn't build yourself."
    ]
  }
]
