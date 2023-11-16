import { Scissors } from 'lucide-react'

export function Logo() {
  return (
    <strong className="flex items-center gap-1">
      <div>
        <Scissors className="text-primary" />
      </div>
      <span className="font-semibold font-alt text-xl">Quasar</span>
    </strong>
  )
}
