import { ReactNode } from 'react'

interface FormScenarioHeadingProps {
  title: string
  content: ReactNode
}

export function FormScenarioHeading({
  content,
  title,
}: FormScenarioHeadingProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <small className="text-base text-muted-foreground">{content}</small>
    </div>
  )
}
