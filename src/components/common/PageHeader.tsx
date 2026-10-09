interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-1 border-b pb-4 mb-6">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">{title}</h1>
      {description && <p className="text-lg text-gray-500 dark:text-gray-400">{description}</p>}
    </div>
  )
}
