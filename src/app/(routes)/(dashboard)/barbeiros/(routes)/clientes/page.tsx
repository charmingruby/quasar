import { Metadata } from 'next'
import { generateStaticSeo } from '@/components/seo/static'
import { CustomersManagement } from './_components/customers-management'

export const metadata: Metadata = generateStaticSeo({
  rawTitle: 'Dashboard | Clientes',
  description: 'Veja seus clientes.',
  hasPrefix: false,
})

export default function Customers() {
  return <CustomersManagement />
}
