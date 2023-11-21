import { FormScenarioHeading } from '@/components/form-scenario-heading'
import CredentialsForm from './_components/credentials-form'

export default function RegisterCredentials() {
  return (
    <div className="space-y-6">
      <FormScenarioHeading
        title="Senha"
        content={<>Crie credenciais fortes.</>}
      />

      <CredentialsForm />
    </div>
  )
}
