import { DashboardHeading } from '@/components/dashboard-heading'
import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'
import { generateStaticSeo } from '@/components/seo/static'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = generateStaticSeo({
  rawTitle: 'Dashboard | Agenda',
  description: 'Veja seus próximos agendamentos.',
  hasPrefix: false,
})

export default function Customers() {
  return (
    <div>
      <DashboardHeading
        heading="Agendamentos"
        description="Gerencie os agendamentos."
      />

      <Separator className="my-6" />

      <div className=" grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>header</CardTitle>
            <CardDescription>description</CardDescription>
          </CardHeader>

          <CardContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            nisi porro hic totam maxime omnis expedita quas maiores incidunt
            vero pariatur dolores numquam enim quaerat nostrum minima sint,
            magnam doloribus.
          </CardContent>
          <CardFooter className="flex gap-2 justify-end">
            <Button>ooo</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>header</CardTitle>
            <CardDescription>description</CardDescription>
          </CardHeader>

          <CardContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            nisi porro hic totam maxime omnis expedita quas maiores incidunt
            vero pariatur dolores numquam enim quaerat nostrum minima sint,
            magnam doloribus.
          </CardContent>
          <CardFooter className="flex gap-2 justify-end">
            <Button>ooo</Button>
          </CardFooter>
        </Card>{' '}
        <Card>
          <CardHeader>
            <CardTitle>header</CardTitle>
            <CardDescription>description</CardDescription>
          </CardHeader>

          <CardContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            nisi porro hic totam maxime omnis expedita quas maiores incidunt
            vero pariatur dolores numquam enim quaerat nostrum minima sint,
            magnam doloribus.
          </CardContent>
          <CardFooter className="flex gap-2 justify-end">
            <Button>ooo</Button>
          </CardFooter>
        </Card>{' '}
        <Card>
          <CardHeader>
            <CardTitle>header</CardTitle>
            <CardDescription>description</CardDescription>
          </CardHeader>

          <CardContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            nisi porro hic totam maxime omnis expedita quas maiores incidunt
            vero pariatur dolores numquam enim quaerat nostrum minima sint,
            magnam doloribus.
          </CardContent>
          <CardFooter className="flex gap-2 justify-end">
            <Button>ooo</Button>
          </CardFooter>
        </Card>{' '}
        <Card>
          <CardHeader>
            <CardTitle>header</CardTitle>
            <CardDescription>description</CardDescription>
          </CardHeader>

          <CardContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            nisi porro hic totam maxime omnis expedita quas maiores incidunt
            vero pariatur dolores numquam enim quaerat nostrum minima sint,
            magnam doloribus.
          </CardContent>
          <CardFooter className="flex gap-2 justify-end">
            <Button>ooo</Button>
          </CardFooter>
        </Card>{' '}
        <Card>
          <CardHeader>
            <CardTitle>header</CardTitle>
            <CardDescription>description</CardDescription>
          </CardHeader>

          <CardContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            nisi porro hic totam maxime omnis expedita quas maiores incidunt
            vero pariatur dolores numquam enim quaerat nostrum minima sint,
            magnam doloribus.
          </CardContent>
          <CardFooter className="flex gap-2 justify-end">
            <Button>ooo</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
