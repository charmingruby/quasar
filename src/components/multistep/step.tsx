interface StepProps {
  active: boolean
}

export function Step({ active }: StepProps) {
  return (
    <>
      {active ? (
        <div className="h-1 bg-primary w-full rounded-md" />
      ) : (
        <div className="h-1 bg-muted w-full rounded-md" />
      )}
    </>
  )
}
