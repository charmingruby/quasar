'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Loader } from '@/components/loader'
import { useRegisterBarberFormController } from './use-register-barber-form-controller'

export default function RegisterBarberForm() {
  const {
    form,
    handleFormSubmit,
    submitErrors,
    allTheRequiredFieldsAreFilled,
  } = useRegisterBarberFormController()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="john@example.com"
                    hasError={!!form.formState.errors.email}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full flex items-center mt-10 space-y-2">
          <FormMessage className="w-full">{submitErrors[0]}</FormMessage>

          <div className="flex w-full justify-end">
            <Button
              className="w-full sm:w-fit"
              size="lg"
              type="submit"
              disabled={
                !allTheRequiredFieldsAreFilled || form.formState.isSubmitting
              }
            >
              {form.formState.isSubmitting ? (
                <Loader />
              ) : (
                <span className="flex items-center gap-1">Criar </span>
              )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
