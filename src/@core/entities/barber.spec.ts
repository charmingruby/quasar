import { it, describe, expect } from 'vitest'
import { Barber } from './barber'
import { UniqueEntityID } from '../core/entities/unique-entity-id'

describe('Customer Entity', () => {
  it('Should be able to instatiate a customer', () => {
    const barber = Barber.create(
      {
        amountOfCounts: 10,
        email: 'foo@barber.com',
        name: 'barber',
        passwordHash: 'password',
        phoneNumber: '123',
        userId: new UniqueEntityID(),
      },
      new UniqueEntityID(),
    )
    expect(barber).toBeTruthy()
  })
})
