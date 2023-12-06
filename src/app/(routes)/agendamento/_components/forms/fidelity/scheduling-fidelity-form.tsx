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
import { CheckCircle, Circle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useSchedulingFidelityFormController } from './use-scheduling-fidelity-form-controller'
import { Loader } from '@/components/loader'

export function SchedulingFidelityForm() {
  const { handleFormSubmit, form, submitErrors } =
    useSchedulingFidelityFormController()

  const amountOfSchedulings = 18
  const amountDone = amountOfSchedulings % 5
  const amountLeft = 5 - amountDone

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <div>
          <Multistep currentStep={3} size={3} />
        </div>

        <div className="mt-8">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="promoCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Código promocional</FormLabel>
                  <FormControl>
                    <Input placeholder="Código" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col">
              <FormLabel>Fidelidade</FormLabel>
              <div className="flex items-center gap-2 mt-4">
                {Array.from({ length: amountDone }, (_, i) => i + 1).map(
                  (idx) => (
                    <CheckCircle
                      key={idx}
                      className="text-emerald-500 h-5 w-5"
                    />
                  ),
                )}

                {Array.from({ length: amountLeft }, (_, i) => i + 1).map(
                  (idx) => (
                    <Circle
                      key={idx}
                      className="text-muted-foreground h-5 w-5"
                    />
                  ),
                )}
              </div>
              <small className="text-muted-foreground mt-2">
                A cada 5 agendamentos, o próximo será gratuito.
              </small>
            </div>
          </div>

          <div className="w-full mt-10 space-y-2">
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <Loader />
              ) : (
                <span>Finalizar</span>
              )}
            </Button>

            {submitErrors && <FormMessage>{submitErrors}</FormMessage>}
          </div>
        </div>
      </form>
    </Form>
  )
}
