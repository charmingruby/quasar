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
import { ArrowRight } from 'lucide-react'
import { useRegisterFormController } from './use-register-form-controller'
import { Loader } from '@/components/loader'
import InputMask from 'react-input-mask'
import { cn } from '@/lib/utils'

export default function RegisterForm() {
  const {
    form,
    handleFormSubmit,
    submitErrors,
    allTheRequiredFieldsAreFilled,
  } = useRegisterFormController()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome completo</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    hasError={!!form.formState.errors.name}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="john@doe.com"
                    hasError={!!form.formState.errors.email}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cpf"
            render={({ field }) => {
              const hasError = !!form.formState.errors.cpf

              return (
                <FormItem className="flex flex-col">
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <InputMask
                      className={cn(
                        `${
                          hasError
                            ? 'border border-destructive placeholder:text-destructive focus-visible:ring-destructive'
                            : 'border border-input placeholder:text-muted-foreground focus-visible:ring-ring'
                        } flex h-10 w-full shadow-sm rounded-md bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
                      )}
                      mask="999.999.999-99"
                      maskChar={null}
                      placeholder="000.000.000-00"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      onBlur={field.onBlur}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => {
              const hasError = !!form.formState.errors.phoneNumber

              return (
                <FormItem className="flex flex-col">
                  <FormLabel>Número de Telefone</FormLabel>
                  <FormControl>
                    <InputMask
                      className={cn(
                        `${
                          hasError
                            ? 'border border-destructive placeholder:text-destructive focus-visible:ring-destructive'
                            : 'border border-input placeholder:text-muted-foreground focus-visible:ring-ring'
                        } flex h-10 w-full shadow-sm rounded-md bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
                      )}
                      mask="(99) 99999-9999"
                      maskChar={null}
                      placeholder="(00) 00000-0000"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      onBlur={field.onBlur}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    placeholder="********"
                    type="password"
                    hasError={!!form.formState.errors.password}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full mt-10 space-y-2">
          <Button
            className="w-full"
            size="lg"
            type="submit"
            disabled={
              !allTheRequiredFieldsAreFilled || form.formState.isSubmitting
            }
          >
            {form.formState.isSubmitting ? (
              <Loader />
            ) : (
              <span className="flex items-center gap-1">
                Próximo passo <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </Button>

          <FormMessage>{submitErrors[0]}</FormMessage>
        </div>
      </form>
    </Form>
  )
}
