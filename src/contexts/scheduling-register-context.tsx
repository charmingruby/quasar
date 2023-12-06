'use client'

import { PropsWithChildren, createContext, useState } from 'react'

interface OptStepAssignType {
  age: string
  observation?: string
  name: string
}

export interface TimeStepAssignType {
  date: Date
  time: string
  endAt: string
  status: string
  price: number
  barberId: string
  timeInAQuarterOfAnHourQuantity: number
}

interface DataType {
  name: string
  age: string
  observation?: string
  date: Date
  time: string
  endAt: string
  status: string
  price: number
  barberId: string
  timeInAQuarterOfAnHourQuantity: number
}

interface SchedulingRegisterContextType {
  getData: () => DataType
  optAssignData: (data: OptStepAssignType) => void
  timeAssignData: (data: TimeStepAssignType) => void
}

export const SchedulingRegisterContext = createContext(
  {} as SchedulingRegisterContextType,
)

export function SchedulingRegisterProvider({ children }: PropsWithChildren) {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [observation, setObservation] = useState<string | undefined>(undefined)
  const [date, setDate] = useState<Date>(new Date())
  const [time, setTime] = useState<string>('')
  const [endAt, setEndAt] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [price, setPrice] = useState<number>(0)
  const [barberId, setBarberId] = useState<string>('')
  const [timeInAQuarterOfAnHourQuantity, setTimeInAQuarterOfAnHourQuantity] =
    useState<number>(0)

  function optAssignData({ age, observation, name }: OptStepAssignType) {
    setAge(age)
    setObservation(observation)
    setName(name)
  }

  function timeAssignData({
    date,
    endAt,
    price,
    status,
    time,
    timeInAQuarterOfAnHourQuantity,
    barberId,
  }: TimeStepAssignType) {
    setDate(date)
    setTime(time)
    setEndAt(endAt)
    setStatus(status)
    setPrice(price)
    setBarberId(barberId)
    setTimeInAQuarterOfAnHourQuantity(timeInAQuarterOfAnHourQuantity)
  }

  function getData() {
    return {
      name,
      age,
      observation,
      date,
      time,
      endAt,
      status,
      price,
      timeInAQuarterOfAnHourQuantity,
      barberId,
    }
  }

  return (
    <SchedulingRegisterContext.Provider
      value={{
        optAssignData,
        timeAssignData,
        getData,
      }}
    >
      {children}
    </SchedulingRegisterContext.Provider>
  )
}
