import type { TechnicalQuestion } from "../types/technical"

export const technicalQuestions: TechnicalQuestion[] = [
  // C Programming
  {
    id: "q_c_1",
    topicId: "tech_c",
    difficulty: "Medium",
    text: "What will be the output of the following C code?",
    codeSnippet: "int a = 5;\nint *p = &a;\nprintf(\"%d\", ++*p);",
    options: ["5", "6", "Address of a", "Compiler Error"],
    correctAnswer: 1,
    explanation: "*p accesses the value of a (5). ++*p pre-increments it to 6, then prints it."
  },
  
  // Python Programming
  {
    id: "q_py_1",
    topicId: "tech_python",
    difficulty: "Easy",
    text: "Which of the following data types is immutable in Python?",
    options: ["List", "Dictionary", "Tuple", "Set"],
    correctAnswer: 2,
    explanation: "Tuples are immutable sequences, meaning their contents cannot be changed after creation."
  },

  // JavaScript Fundamentals
  {
    id: "q_js_1",
    topicId: "tech_js",
    difficulty: "Medium",
    text: "What will this code log to the console?",
    codeSnippet: "console.log(typeof null);\nconsole.log(typeof undefined);",
    options: ["object, undefined", "null, undefined", "object, object", "undefined, undefined"],
    correctAnswer: 0,
    explanation: "In JavaScript, typeof null is a known legacy bug that returns 'object'. typeof undefined returns 'undefined'."
  },
  
  // React Fundamentals
  {
    id: "q_react_1",
    topicId: "web_react",
    difficulty: "Medium",
    text: "What is the primary purpose of the useEffect hook in React?",
    options: ["To manage state variables", "To handle form submissions", "To perform side effects in function components", "To context-bind class methods"],
    correctAnswer: 2,
    explanation: "useEffect is used to handle side effects like data fetching, subscriptions, or manually changing the DOM in functional components."
  },

  // DBMS
  {
    id: "q_dbms_1",
    topicId: "cs_dbms",
    difficulty: "Medium",
    text: "Which normal form requires that a table is in 2NF and has no transitive dependencies?",
    options: ["First Normal Form (1NF)", "Second Normal Form (2NF)", "Third Normal Form (3NF)", "Boyce-Codd Normal Form (BCNF)"],
    correctAnswer: 2,
    explanation: "3NF dictates that every non-prime attribute is non-transitively dependent on every candidate key of the table."
  },

  // OS
  {
    id: "q_os_1",
    topicId: "cs_os",
    difficulty: "Hard",
    text: "Which of the following conditions is NOT required for deadlock to occur?",
    options: ["Mutual Exclusion", "Hold and Wait", "No Preemption", "Context Switching"],
    correctAnswer: 3,
    explanation: "The 4 Coffman conditions for deadlock are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Context switching is a normal OS mechanism."
  },
  
  // DSA
  {
    id: "q_dsa_1",
    topicId: "cs_dsa",
    difficulty: "Easy",
    text: "What is the time complexity of searching an element in a balanced binary search tree?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: 2,
    explanation: "In a balanced BST, each comparison halves the remaining search space, resulting in O(log n) time."
  }
]

export const getQuestionsByConfig = (topicId: string, difficulty: string, count: number) => {
  let filtered = technicalQuestions.filter(q => q.topicId === topicId)
  if (difficulty !== "All") {
    filtered = filtered.filter(q => q.difficulty === difficulty)
  }
  
  // Shuffle randomly
  filtered.sort(() => 0.5 - Math.random())
  
  // Limit to count (or less if not enough questions exist)
  return filtered.slice(0, count)
}
