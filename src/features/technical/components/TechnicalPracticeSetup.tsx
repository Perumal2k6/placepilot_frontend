import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import type { SessionConfig, Difficulty, PracticeMode } from "../types/technical"

interface Props {
  topicId: string
  topicName: string
  onStart: (config: SessionConfig) => void
}

export function TechnicalPracticeSetup({ topicId, topicName, onStart }: Props) {
  const [open, setOpen] = useState(false)
  const [difficulty, setDifficulty] = useState<Difficulty | "All">("All")
  const [count, setCount] = useState("10")
  const [mode, setMode] = useState<PracticeMode>("Practice")

  const handleStart = () => {
    onStart({
      topicId,
      difficulty,
      questionCount: parseInt(count, 10),
      mode
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="outline" className="w-full text-xs" size="sm">Configure & Start</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Start Technical Practice</DialogTitle>
          <DialogDescription>
            Configure your session for <strong>{topicName}</strong>.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="difficulty">Difficulty</Label>
            <Select value={difficulty} onValueChange={(v: any) => setDifficulty(v)}>
              <SelectTrigger id="difficulty">
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">Mixed (All Levels)</SelectItem>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="count">Number of Questions</Label>
            <Select value={count} onValueChange={(v) => setCount(v || "10")}>
              <SelectTrigger id="count">
                <SelectValue placeholder="Select count" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 Questions</SelectItem>
                <SelectItem value="10">10 Questions</SelectItem>
                <SelectItem value="20">20 Questions</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label>Practice Mode</Label>
            <RadioGroup value={mode} onValueChange={(v: any) => setMode(v)} className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Practice" id="mode-practice" />
                <Label htmlFor="mode-practice" className="font-normal">Practice (View answers immediately)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Timed" id="mode-timed" />
                <Label htmlFor="mode-timed" className="font-normal">Timed Test (Time limit, hidden answers)</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleStart}>Start Session</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
