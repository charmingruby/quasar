import { it, describe, expect } from 'vitest'
import { UniqueEntityID } from '../core/entities/unique-entity-id'
import { BarberAvailableTime } from './barber-available-time'

describe('Customer Entity', () => {
  it('Should be able to instatiate a customer', () => {
    const barberAvailableTime = BarberAvailableTime.create(
      { userId: new UniqueEntityID(), startAt: '08:00', endAt: '16:00' },
      new UniqueEntityID(),
    )
    expect(barberAvailableTime.isAvailable('10:00')).toBe(true)
    expect(barberAvailableTime.isAvailable('01:00')).toBe(false)
    expect(barberAvailableTime.isAvailable('17:00')).toBe(false)
    expect(barberAvailableTime.isAvailable('00:00')).toBe(false)
  })
})
