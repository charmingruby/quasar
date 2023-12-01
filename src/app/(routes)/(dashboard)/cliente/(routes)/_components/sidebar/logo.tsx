import { Scissors } from 'lucide-react'

export function Logo() {
  return (
    <strong className="flex items-center gap-1">
      <div>
        <Scissors className="text-primary h-7 w-7" />
      </div>
      <span className="font-semibold font-alt text-2xl">Quasar</span>
    </strong>
  )
}
