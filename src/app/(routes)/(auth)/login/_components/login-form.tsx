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
import { useLoginFormController } from './use-login-form-controller'
import { Loader } from '@/components/loader'

export function LoginForm() {
  const {
    form,
    handleFormSubmit,
    allTheRequiredFieldsAreFilled,
    submitErrors,
  } = useLoginFormController()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Seu email"
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    placeholder="***********"
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
            type="submit"
            className="w-full"
            size="lg"
            disabled={
              !allTheRequiredFieldsAreFilled || form.formState.isSubmitting
            }
          >
            {form.formState.isSubmitting ? (
              <Loader />
            ) : (
              <span className="flex items-center gap-1">Entrar</span>
            )}
          </Button>

          <FormMessage>{submitErrors[0]}</FormMessage>
        </div>
      </form>
    </Form>
  )
}
