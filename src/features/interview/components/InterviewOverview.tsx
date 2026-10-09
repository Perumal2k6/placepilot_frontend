import { getCategoriesByType } from "../data/interviewCategories"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Props {
  onStartCategory: (categoryId: string) => void
  onStartQuickReview: () => void
  bookmarkedCount: number
}

export function InterviewOverview({ onStartCategory, onStartQuickReview, bookmarkedCount }: Props) {
  const grouped = getCategoriesByType()

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-500">Total Categories</p>
            <h3 className="text-3xl font-bold mt-2">12</h3>
            <p className="text-xs text-blue-600 mt-2 font-medium">Spanning Tech, HR & Placement</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-500">Questions Bookmarked</p>
            <h3 className="text-3xl font-bold mt-2">{bookmarkedCount}</h3>
            <div className="mt-2">
              <Button 
                variant="link" 
                className="h-auto p-0 text-xs text-blue-600 font-medium"
                onClick={onStartQuickReview}
                disabled={bookmarkedCount === 0}
              >
                Quick Review →
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-500">Preparation Progress</p>
            <h3 className="text-3xl font-bold mt-2">24%</h3>
            <p className="text-xs text-gray-500 mt-2 font-medium">Local demo data</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        {Object.entries(grouped).map(([type, categories]) => (
          <div key={type} className="space-y-4">
            <h3 className="text-xl font-bold border-b pb-2">{type} Interviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map(cat => (
                <Card key={cat.id} className="flex flex-col border border-gray-200 dark:border-gray-800">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{cat.name}</CardTitle>
                    <CardDescription className="line-clamp-2 min-h-8">{cat.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3 flex-1">
                    <p className="text-xs text-gray-500 font-medium">
                      {cat.totalQuestions} standard questions
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button 
                      variant="outline" 
                      className="w-full text-xs" 
                      size="sm"
                      onClick={() => onStartCategory(cat.id)}
                    >
                      Browse & Practice
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
