'use client'

import { format } from 'date-fns'
import { ArrowRight, CalendarIcon, Clock } from 'lucide-react'
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
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useDateRules } from './use-date-rules'
import { useSchedulingTimeFormController } from './use-scheduling-time-form-controller'
import { workTimeHours, workTimeMinutes } from '@/data/work-time'

export function SchedulingTimeForm() {
  const { oneMonthInTheFutureDate, yesterdayDate } = useDateRules()
  const {
    form,
    handleFormSubmit,
    cutPeriod,
    barbers,
    timeValidation,
    handleTimeChoose,
    availabilityError,
    validSchedule,
    barberFilled,
  } = useSchedulingTimeFormController()

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(
          timeValidation ? handleTimeChoose : handleFormSubmit,
        )}
      >
        <div>
          <Multistep currentStep={2} size={3} />
        </div>

        <div className="mt-8">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="date"
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
              <div className="flex flex-col gap-3">
                <Label>Escolha o horário</Label>

                <div className="flex items-center gap-3">
                  <FormField
                    control={form.control}
                    name="hours"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-[64px]">
                              <SelectValue
                                placeholder="00"
                                className="text-muted-foreground"
                              />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent className="min-w-[64px]">
                            {workTimeHours.map(({ available, value }) =>
                              available ? (
                                <SelectItem key={value} value={value}>
                                  {value}
                                </SelectItem>
                              ) : (
                                <SelectItem
                                  key={value}
                                  value={value}
                                  disabled
                                  className="cursor-not-allowed text-muted-foreground bg-muted pr-8 text-center w-full focus:text-muted-foreground"
                                >
                                  {value}
                                </SelectItem>
                              ),
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <strong>:</strong>

                  <FormField
                    control={form.control}
                    name="minutes"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-[64px]">
                              <SelectValue
                                placeholder="00"
                                defaultValue="00"
                                className="text-muted-foreground"
                              />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent className="min-w-[64px] text-center">
                            {workTimeMinutes.map(({ value }) => (
                              <SelectItem
                                key={value}
                                value={value}
                                className="pr-8"
                              >
                                {value}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1 mt-8 text-muted-foreground">
                <Clock className="h-3 w-3" />
                <small>
                  Tempo médio do corte selecionado: {cutPeriod} min.
                </small>
              </div>
            </div>

            {validSchedule && (
              <FormField
                control={form.control}
                name="barber"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue
                            placeholder="Escolher barbeiro"
                            className="text-muted-foreground"
                          />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        {barbers.map(({ user: { fullName }, id }) => (
                          <SelectItem key={id} value={id}>
                            {fullName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>

          <div className="w-full mt-10 space-y-2">
            {validSchedule ? (
              <Button
                className="w-full"
                size="lg"
                type="submit"
                disabled={!barberFilled}
              >
                <span className="flex items-center gap-1">
                  Próximo passo <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            ) : (
              <Button className="w-full" size="lg" type="submit">
                <span>Verificar disponibilidade</span>
              </Button>
            )}

            {availabilityError && (
              <FormMessage>{availabilityError}</FormMessage>
            )}
          </div>
        </div>
      </form>
    </Form>
  )
}
