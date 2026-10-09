import type { Question } from "../types/aptitude"

// Generating a robust demo dataset
export const aptitudeQuestions: Question[] = [
  // Percentages
  {
    id: "q_pct_1",
    topicId: "quant_percentages",
    difficulty: "Easy",
    text: "If 20% of a = b, then b% of 20 is the same as:",
    options: ["4% of a", "5% of a", "20% of a", "None of these"],
    correctAnswer: 0,
    explanation: "20% of a = a/5 = b. So b% of 20 = (a/5)/100 * 20 = a/25 = 4/100 * a = 4% of a."
  },
  {
    id: "q_pct_2",
    topicId: "quant_percentages",
    difficulty: "Medium",
    text: "The price of a commodity increases by 25%. By what percentage must a consumer reduce their consumption so that the expenditure remains the same?",
    options: ["15%", "20%", "25%", "30%"],
    correctAnswer: 1,
    explanation: "Let original price = 100, consumption = 100. New price = 125. To keep expenditure 10000, new consumption = 10000/125 = 80. Reduction = 20%."
  },
  {
    id: "q_pct_3",
    topicId: "quant_percentages",
    difficulty: "Hard",
    text: "In an election between two candidates, one got 55% of the total valid votes, 20% of the votes were invalid. If the total number of votes was 7500, the number of valid votes that the other candidate got, was:",
    options: ["2700", "2900", "3000", "3100"],
    correctAnswer: 0,
    explanation: "Total valid votes = 80% of 7500 = 6000. 1st candidate got 55% of 6000. 2nd got 45% of 6000 = 2700."
  },
  // Time and Work
  {
    id: "q_tw_1",
    topicId: "quant_time_work",
    difficulty: "Medium",
    text: "A can do a piece of work in 10 days, and B can do the same work in 15 days. How long will they take if both work together?",
    options: ["5 days", "6 days", "8 days", "9 days"],
    correctAnswer: 1,
    explanation: "Work done by A in 1 day = 1/10. By B = 1/15. Together = 1/10 + 1/15 = 5/30 = 1/6. Total time = 6 days."
  },
  {
    id: "q_tw_2",
    topicId: "quant_time_work",
    difficulty: "Hard",
    text: "A takes twice as much time as B or thrice as much time as C to finish a piece of work. Working together, they can finish the work in 2 days. B can do the work alone in:",
    options: ["4 days", "6 days", "8 days", "12 days"],
    correctAnswer: 1,
    explanation: "Let A's time = x. B's = x/2. C's = x/3. 1/x + 2/x + 3/x = 1/2 => 6/x = 1/2 => x = 12. B takes x/2 = 6 days."
  },
  // Number Series
  {
    id: "q_ns_1",
    topicId: "logical_series",
    difficulty: "Easy",
    text: "Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?",
    options: ["(1/3)", "(1/8)", "(2/8)", "(1/16)"],
    correctAnswer: 1,
    explanation: "This is an alternating division series: Each number is divided by 2 to get the next number."
  },
  {
    id: "q_ns_2",
    topicId: "logical_series",
    difficulty: "Medium",
    text: "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
    options: ["7", "10", "12", "13"],
    correctAnswer: 1,
    explanation: "This is a simple alternating addition and subtraction series. In the first pattern, 3 is added; in the second, 2 is subtracted."
  },
  // More padding to simulate a real DB
  {
    id: "q_rc_1",
    topicId: "verbal_rc",
    difficulty: "Medium",
    text: "Which of the following is an antonym for 'Ephemeral'?",
    options: ["Short-lived", "Permanent", "Transient", "Illusory"],
    correctAnswer: 1,
    explanation: "Ephemeral means lasting for a very short time. Permanent is the exact opposite."
  }
]

export const getQuestionsByConfig = (topicId: string, difficulty: string, count: number) => {
  let filtered = aptitudeQuestions.filter(q => q.topicId === topicId)
  if (difficulty !== "All") {
    filtered = filtered.filter(q => q.difficulty === difficulty)
  }
  // Shuffle randomly
  filtered.sort(() => 0.5 - Math.random())
  return filtered.slice(0, count)
}
