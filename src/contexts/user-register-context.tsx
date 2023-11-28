'use client'

import { PropsWithChildren, createContext } from 'react'

interface FirstStepAssignFields {
  name: string
  email: string
  cpf: string
  phoneNumber: string
}

interface SecondStepAssignFields {
  password: string
}

interface UserRegisterContextType {
  handleFirstStepAssign: (data: FirstStepAssignFields) => void
  handleSecondStepAssign: (data: SecondStepAssignFields) => void
}

const handleFirstStepAssign = () => {
  console.log('oi')
}

const handleSecondStepAssign = () => {
  console.log('oi')
}
export const UserRegisterContext = createContext({} as UserRegisterContextType)

export function UserRegisterContextProvider({ children }: PropsWithChildren) {
  return (
    <UserRegisterContext.Provider
      value={{ handleFirstStepAssign, handleSecondStepAssign }}
    >
      {children}
    </UserRegisterContext.Provider>
  )
}
