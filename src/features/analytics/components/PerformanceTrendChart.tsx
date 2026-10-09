import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import type { HistoricalResult } from "../types/analytics"

export function PerformanceTrendChart({ results }: { results: HistoricalResult[] }) {
  // Sort by date ascending to show trend over time
  const sorted = [...results].sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
  
  const data = sorted.map((r, i) => ({
    name: `Test ${i + 1}`,
    accuracy: r.accuracy,
    title: r.title,
    date: new Date(r.timestamp).toLocaleDateString()
  }))

  return (
    <Card className="h-full border-gray-200 dark:border-gray-800">
      <CardHeader>
        <CardTitle className="text-lg">Accuracy Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} tickFormatter={(val) => `${val}%`} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                labelStyle={{ fontWeight: 'bold', color: '#374151' }}
                formatter={(value: any) => [`${value}%`, 'Accuracy']}
                labelFormatter={(label, payload) => payload?.[0]?.payload?.date || label}
              />
              <Line type="monotone" dataKey="accuracy" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6, fill: "#3b82f6" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
