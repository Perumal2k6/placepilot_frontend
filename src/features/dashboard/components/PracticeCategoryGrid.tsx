import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { categories } from "../data/demoData"
import { Link } from "react-router-dom"
import { BrainCircuit, Lightbulb, BookA, TerminalSquare, Code, Users } from "lucide-react"

const iconMap: Record<string, any> = {
  aptitude: BrainCircuit,
  logical: Lightbulb,
  verbal: BookA,
  technical: TerminalSquare,
  coding: Code,
  interview: Users
}

export function PracticeCategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category) => {
        const Icon = iconMap[category.id] || BrainCircuit
        return (
          <Card key={category.id} className="flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
                  <Icon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                </div>
                <CardTitle className="text-base">{category.title}</CardTitle>
              </div>
              <CardDescription className="text-xs line-clamp-1">{category.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-3 flex-1">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium text-gray-500">
                  <span>Progress</span>
                  <span>{category.progress}%</span>
                </div>
                <Progress value={category.progress} className="h-1.5" />
                <p className="text-xs text-gray-500 mt-2">
                  {category.completed} / {category.total} activities completed
                </p>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Link to={category.path} className="w-full">
                <Button variant="outline" className="w-full text-xs" size="sm">
                  Practice Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
