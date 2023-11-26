import { it, describe, expect } from 'vitest'
import { UniqueEntityID } from '../core/entities/unique-entity-id'
import { Transaction } from './transaction'

describe('Customer Entity', () => {
  it('Should be able to instatiate a customer', () => {
    const transaction = Transaction.create(
      { amount: 10, schedulingId: new UniqueEntityID() },
      new UniqueEntityID(),
    )
    expect(transaction).toBeTruthy()
  })
})
