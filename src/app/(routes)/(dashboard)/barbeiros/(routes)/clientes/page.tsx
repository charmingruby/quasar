import { DashboardHeading } from '@/components/dashboard-heading'
import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'
import { generateStaticSeo } from '@/components/seo/static'

export const metadata: Metadata = generateStaticSeo({
  rawTitle: 'Dashboard | Clientes',
  description: 'Veja seus clientes.',
  hasPrefix: false,
})

export default function Customers() {
  return (
    <div>
      <DashboardHeading
        heading="Clientes"
        description="Gerencie os clientes."
      />

      <Separator className="my-6" />
    </div>
  )
}
