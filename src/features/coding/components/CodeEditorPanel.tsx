import Editor from "@monaco-editor/react"
import type { ProgrammingLanguage } from "../types/coding"

interface Props {
  language: ProgrammingLanguage
  code: string
  onChange: (value: string | undefined) => void
}

export function CodeEditorPanel({ language, code, onChange }: Props) {
  
  const mapLangToMonaco = (l: ProgrammingLanguage) => {
    if (l === "python") return "python"
    if (l === "java") return "java"
    if (l === "cpp") return "cpp"
    if (l === "javascript") return "javascript"
    return "javascript"
  }

  return (
    <div className="w-full h-full border-t border-gray-200 dark:border-gray-800 overflow-hidden">
      <Editor
        height="100%"
        language={mapLangToMonaco(language)}
        theme="vs-dark"
        value={code}
        onChange={onChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          fontFamily: "'Fira Code', 'JetBrains Mono', 'Menlo', 'Monaco', monospace",
          lineHeight: 24,
          padding: { top: 16 },
          scrollBeyondLastLine: false,
          smoothScrolling: true,
          cursorBlinking: "smooth",
          wordWrap: "on"
        }}
      />
    </div>
  )
}
