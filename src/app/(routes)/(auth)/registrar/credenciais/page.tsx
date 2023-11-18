import CredentialsForm from './_components/credentials-form'
import { FormScenarioHeading } from '../../_components/form-scenario-heading'

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
