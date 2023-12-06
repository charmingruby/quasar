import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ElementType } from 'react'

interface SmallCardProps {
  label: string
  value: string
  icon: ElementType
}

export function SmallCard({ icon: Icon, label, value }: SmallCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{label}</CardTitle>

        <Icon className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}
