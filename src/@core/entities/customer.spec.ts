import { it, describe, expect } from 'vitest'
import { UniqueEntityID } from '../core/entities/unique-entity-id'
import { Customer } from './customer'

describe('Customer Entity', () => {
  it('Should be able to instatiate a customer', () => {
    const customer = Customer.create(
      {
        amountOfScheduling: 10,
        email: 'test@example.com',
        name: 'test',
        passwordHash: 'test',
        phoneNumber: '123',
        userId: new UniqueEntityID(),
      },
      new UniqueEntityID(),
    )
    expect(customer).toBeTruthy()
  })
})
