import type { Topic } from "../types/aptitude"

export const aptitudeTopics: Topic[] = [
  { id: "quant_percentages", name: "Percentages", category: "Quantitative Aptitude", description: "Fractions, decimals, and percentage changes.", totalQuestions: 15 },
  { id: "quant_profit_loss", name: "Profit and Loss", category: "Quantitative Aptitude", description: "Cost price, selling price, and margins.", totalQuestions: 15 },
  { id: "quant_time_work", name: "Time and Work", category: "Quantitative Aptitude", description: "Efficiency and man-days concepts.", totalQuestions: 20 },
  { id: "quant_time_speed", name: "Time, Speed and Distance", category: "Quantitative Aptitude", description: "Relative speed and trains.", totalQuestions: 15 },
  { id: "quant_prob", name: "Probability", category: "Quantitative Aptitude", description: "Events and probability basics.", totalQuestions: 10 },
  { id: "logical_series", name: "Number Series", category: "Logical Reasoning", description: "Identify missing numbers in a sequence.", totalQuestions: 20 },
  { id: "logical_blood", name: "Blood Relations", category: "Logical Reasoning", description: "Family tree and relationship puzzles.", totalQuestions: 10 },
  { id: "logical_syllogism", name: "Syllogisms", category: "Logical Reasoning", description: "Venn diagrams and logical deductions.", totalQuestions: 15 },
  { id: "logical_seating", name: "Seating Arrangements", category: "Logical Reasoning", description: "Linear and circular seating puzzles.", totalQuestions: 10 },
  { id: "verbal_rc", name: "Reading Comprehension", category: "Verbal Ability", description: "Passage-based questions.", totalQuestions: 10 },
  { id: "verbal_grammar", name: "Grammar and Vocabulary", category: "Verbal Ability", description: "Error spotting and synonyms.", totalQuestions: 20 },
]

export const getTopicsByCategory = () => {
  const grouped = aptitudeTopics.reduce((acc, topic) => {
    if (!acc[topic.category]) acc[topic.category] = []
    acc[topic.category].push(topic)
    return acc
  }, {} as Record<string, Topic[]>)
  return grouped
}
