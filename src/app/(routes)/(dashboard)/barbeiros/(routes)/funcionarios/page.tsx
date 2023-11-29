import { Metadata } from 'next'
import { generateStaticSeo } from '@/components/seo/static'
import { BarbersManagement } from './_components/barbers-management'

export const metadata: Metadata = generateStaticSeo({
  rawTitle: 'Dashboard | Funcionários',
  description: 'Histórico de serviços dos funcionários.',
  hasPrefix: false,
})

export default function EmployeesPage() {
  return <BarbersManagement />
}
