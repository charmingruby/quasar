'use client'

import { Multistep } from '@/components/multistep'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { ArrowRight } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { cuts } from '@/data/cuts'
import { ages } from '@/data/ages'
import { useSchedulingOptsFormController } from './use-scheduling-opts-form-controller'
import { Loader } from '@/components/loader'

export function SchedulingOptsForm() {
  const { form, allTheRequiredFieldsAreFilled, handleFormSubmit, isLoading } =
    useSchedulingOptsFormController()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <div>
          <Multistep currentStep={1} size={3} />
        </div>

        <div className="mt-8">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de corte</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue
                          placeholder="Escolher opção"
                          className="text-muted-foreground"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {cuts.map(({ name, price, value }) => (
                        <SelectItem key={name} value={value}>{`${name} - R$${(
                          price / 100
                        ).toFixed(2)}`}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="age"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Faixa etária</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue
                          placeholder="Escolher opção"
                          className="text-muted-foreground"
                        />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      {ages.map(({ name, value }) => (
                        <SelectItem
                          key={name}
                          value={value}
                        >{`${name}`}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="observation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alguma observação?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Mensagem..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full mt-10">
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={
                !allTheRequiredFieldsAreFilled ||
                form.formState.isSubmitting ||
                isLoading
              }
            >
              {isLoading ? (
                <Loader />
              ) : (
                <span className="flex items-center gap-1">
                  Próximo passo <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
