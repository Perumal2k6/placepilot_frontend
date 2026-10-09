import type { CodingProblem } from "../types/coding"

export const codingProblems: CodingProblem[] = [
  {
    id: "p_1",
    slug: "two-sum",
    title: "Two Sum",
    topic: "Arrays and Strings",
    difficulty: "Easy",
    statement: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
    inputFormat: "Line 1: An integer n (size of array)\nLine 2: n space-separated integers\nLine 3: An integer target",
    outputFormat: "Two space-separated integers representing the indices.",
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9"
    ],
    sampleTestCases: [
      {
        id: "tc_1",
        input: "4\n2 7 11 15\n9",
        expectedOutput: "0 1",
        isHidden: false
      },
      {
        id: "tc_2",
        input: "3\n3 2 4\n6",
        expectedOutput: "1 2",
        isHidden: false
      }
    ],
    starterCode: {
      "python": "def twoSum(nums, target):\n    # Write your code here\n    pass\n",
      "cpp": "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};",
      "java": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your code here\n    }\n}",
      "javascript": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(nums, target) {\n    // Write your code here\n};"
    }
  },
  {
    id: "p_2",
    slug: "valid-parentheses",
    title: "Valid Parentheses",
    topic: "Stacks and Queues",
    difficulty: "Easy",
    statement: "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    inputFormat: "A single string s.",
    outputFormat: "Return 'true' if valid, else 'false'.",
    constraints: [
      "1 <= s.length <= 10^4",
      "s consists of parentheses only '()[]{}'."
    ],
    sampleTestCases: [
      { id: "tc_1", input: "()", expectedOutput: "true", isHidden: false },
      { id: "tc_2", input: "()[]{}", expectedOutput: "true", isHidden: false },
      { id: "tc_3", input: "(]", expectedOutput: "false", isHidden: false }
    ],
    starterCode: {
      "python": "def isValid(s: str) -> bool:\n    # Write your code here\n    pass\n",
      "cpp": "class Solution {\npublic:\n    bool isValid(string s) {\n        // Write your code here\n    }\n};",
      "java": "class Solution {\n    public boolean isValid(String s) {\n        // Write your code here\n    }\n}",
      "javascript": "var isValid = function(s) {\n    // Write your code here\n};"
    }
  },
  {
    id: "p_3",
    slug: "maximum-subarray",
    title: "Maximum Subarray Sum",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    statement: "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.",
    inputFormat: "Line 1: Integer n\nLine 2: n space-separated integers",
    outputFormat: "A single integer representing the maximum sum.",
    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    sampleTestCases: [
      { id: "tc_1", input: "9\n-2 1 -3 4 -1 2 1 -5 4", expectedOutput: "6", isHidden: false },
      { id: "tc_2", input: "1\n1", expectedOutput: "1", isHidden: false }
    ],
    starterCode: {
      "python": "def maxSubArray(nums):\n    # Write your code here\n    pass\n",
      "cpp": "class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        // Write your code here\n    }\n};",
      "java": "class Solution {\n    public int maxSubArray(int[] nums) {\n        // Write your code here\n    }\n}",
      "javascript": "var maxSubArray = function(nums) {\n    // Write your code here\n};"
    }
  }
]
