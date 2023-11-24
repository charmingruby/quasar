import { it, describe, expect } from 'vitest'
import { UniqueEntityID } from '../core/entities/unique-entity-id'
import { Scheduling } from './sheduling'

describe('Customer Entity', () => {
  it('Should be able to instatiate a customer', () => {
    const scheduling = Scheduling.create(
      {
        barberId: new UniqueEntityID(),
        customerId: new UniqueEntityID(),
        cutId: new UniqueEntityID(),
        payedAt: new Date(),
        promocodeId: new UniqueEntityID(),
        scheduledAt: new Date(),
      },
      new UniqueEntityID(),
    )
    expect(scheduling).toBeTruthy()
  })
})
