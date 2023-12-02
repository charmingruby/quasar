'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'

import { ArrowRight, CalendarIcon, Clock } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import ptBR from 'date-fns/locale/pt-BR'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Multistep } from '@/components/multistep'
import { useRouter } from 'next/navigation'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const FormSchema = z.object({
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
})

export function SchedulingTimeForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  const { push } = useRouter()

  function onSubmit(data: z.infer<typeof FormSchema>) {
    push('/agendamento/fidelidade')
  }

  const currentDate = new Date()
  const yesterdayDate = new Date(currentDate.setDate(currentDate.getDate() - 1))
  const oneMonthInTheFuture = new Date(
    currentDate.setMonth(currentDate.getMonth() + 1),
  )
  const oneMonthInTheFutureDate = new Date(
    oneMonthInTheFuture.setDate(currentDate.getDate() + 1),
  )

  const handleFormSubmit = () => push('/agendamento/fidelidade')

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <Multistep currentStep={2} size={3} />
        </div>

        <div className="mt-8">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal border-border hover:bg-transparent hover:text-foreground',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP', { locale: ptBR })
                          ) : (
                            <span>Escolher data</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="end">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > oneMonthInTheFutureDate || date < yesterdayDate
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <Label>Escolha o horário</Label>

              <div className="flex items-center gap-3">
                <Select>
                  <SelectTrigger className="w-[64px]">
                    <SelectValue
                      placeholder="00"
                      className="text-muted-foreground"
                    />
                  </SelectTrigger>

                  <SelectContent className="min-w-[64px]">
                    <SelectItem value="criança">8</SelectItem>
                    <SelectItem value="criança">9</SelectItem>
                    <SelectItem value="criança">10</SelectItem>
                    <SelectItem value="adulto">11</SelectItem>
                    <SelectItem
                      value="idoso"
                      disabled
                      className="cursor-not-allowed text-muted-foreground bg-muted pr-8 text-center w-full focus:text-muted-foreground"
                    >
                      12
                    </SelectItem>
                    <SelectItem
                      value="idoso"
                      disabled
                      className="cursor-not-allowed text-muted-foreground bg-muted pr-8 text-center w-full focus:text-muted-foreground"
                    >
                      13
                    </SelectItem>
                    <SelectItem value="idoso">14</SelectItem>
                    <SelectItem value="idoso">15</SelectItem>
                    <SelectItem value="idoso">16</SelectItem>
                    <SelectItem value="idoso">17</SelectItem>
                  </SelectContent>
                </Select>

                <strong>:</strong>

                <Select>
                  <SelectTrigger className="w-[64px]">
                    <SelectValue
                      placeholder="00"
                      className="text-muted-foreground"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="criança">00</SelectItem>
                    <SelectItem value="criança">15</SelectItem>
                    <SelectItem value="criança">30</SelectItem>
                    <SelectItem value="adulto">45</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-1 mt-8 text-muted-foreground">
                <Clock className="h-3 w-3" />
                <small>Tempo media pro corte selecionado: 15min.</small>
              </div>
            </div>

            {false && (
              <div className="space-y-2">
                <Label>Barbeiros</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue
                      placeholder="Escolher barbeiro"
                      className="text-muted-foreground"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="criança">Criança</SelectItem>
                    <SelectItem value="adulto">Adulto</SelectItem>
                    <SelectItem value="idoso">Idoso</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <div className="w-full mt-10">
            <Button className="w-full" size="lg" onClick={handleFormSubmit}>
              Próximo passo <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
