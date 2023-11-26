import { it, describe, expect } from 'vitest'
import { UniqueEntityID } from '../core/entities/unique-entity-id'
import { BarberAvailableTime } from './barber-available-time'

describe('Customer Entity', () => {
  it('Should be able to instatiate a customer', () => {
    const barberAvailableTime = BarberAvailableTime.create(
      {
        userId: new UniqueEntityID(),
        startAt: new Date('2023-11-23T08:00:00.000Z'),
        endAt: new Date('2023-11-23T18:00:00.000Z'),
      },
      new UniqueEntityID(),
    )
    expect(
      barberAvailableTime.isAvailable(new Date('2023-11-23T10:00:00.000Z')),
    ).toBe(true)
    expect(
      barberAvailableTime.isAvailable(new Date('2023-11-23T01:00:00.000Z')),
    ).toBe(false)
    expect(
      barberAvailableTime.isAvailable(new Date('2023-11-23T17:00:00.000Z')),
    ).toBe(true)
    expect(
      barberAvailableTime.isAvailable(new Date('2023-11-23T00:00:00.000Z')),
    ).toBe(false)
  })
})
