import type { CodingProblem } from "../types/coding"

export function ProblemDescription({ problem }: { problem: CodingProblem }) {
  return (
    <div className="p-6 space-y-8 h-full overflow-y-auto bg-white dark:bg-gray-950">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-2">{problem.title}</h2>
        <div className="flex items-center gap-3 text-sm">
          <span className={`px-2.5 py-0.5 rounded-full font-semibold ${
            problem.difficulty === 'Easy' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
            problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
            'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
          }`}>
            {problem.difficulty}
          </span>
          <span className="text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-md">{problem.topic}</span>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
        <p className="whitespace-pre-wrap">{problem.statement}</p>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-3">Examples</h3>
        <div className="space-y-4">
          {problem.sampleTestCases.map((tc, i) => (
            <div key={tc.id} className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 font-mono text-sm">
              <p className="font-bold text-gray-500 mb-2 font-sans">Example {i + 1}:</p>
              <div className="mb-3">
                <span className="font-semibold text-gray-900 dark:text-gray-100">Input: </span>
                <span className="text-gray-700 dark:text-gray-300">{tc.input.replace(/\n/g, ' ')}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-gray-100">Output: </span>
                <span className="text-gray-700 dark:text-gray-300">{tc.expectedOutput}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">Input Format</h3>
          <p className="text-sm whitespace-pre-wrap text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-3 rounded-md border">{problem.inputFormat}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">Output Format</h3>
          <p className="text-sm whitespace-pre-wrap text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-3 rounded-md border">{problem.outputFormat}</p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">Constraints</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm font-mono text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-3 rounded-md border">
          {problem.constraints.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      </div>
    </div>
  )
}
