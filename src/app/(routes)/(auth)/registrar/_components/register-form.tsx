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
            render={({ field }) => (
              <FormItem>
                <FormLabel>CPF</FormLabel>
                <FormControl>
                  <Input
                    placeholder="000.000.000-00"
                    hasError={!!form.formState.errors.cpf}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="(32) 9 9999-9999"
                    maxLength={15}
                    type="tel"
                    hasError={!!form.formState.errors.phoneNumber}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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
