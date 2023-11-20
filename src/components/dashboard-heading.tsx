interface DashboardHeadingProps {
  heading: string
  description: string
}

export function DashboardHeading({
  heading,
  description,
}: DashboardHeadingProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <h1 className="text-3xl font-bold my-0">{heading}</h1>
      <small className="text-sm text-muted-foreground">{description}</small>
    </div>
  )
}
