import { Step } from './step'

interface MultistepProps {
  size: number
  currentStep: number
}

export function Multistep({ currentStep, size }: MultistepProps) {
  return (
    <div className="w-full">
      <div className="text-sm text-muted-foreground  font-medium mb-2">
        Passo {currentStep} de {size}
      </div>
      <div className="w-full flex gap-2">
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={step <= currentStep} />
        ))}
      </div>
    </div>
  )
}
