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
        scheduledAt: new Date('2023-11-23T19:00:00.000Z'),
      },
      new UniqueEntityID(),
    )

    const startAt = new Date('2023-11-23T08:00:00.000Z')
    const endAt = new Date('2023-11-23T18:00:00.000Z')

    // teste de horario após o expediente
    expect(
      scheduling.validateSchedule(
        new Date('2023-11-23T19:00:00.000Z'),
        startAt,
        endAt,
      ),
    ).toBe(false)

    // teste de horario antes do expediente
    expect(
      scheduling.validateSchedule(
        new Date('2023-11-23T06:00:00.000Z'),
        startAt,
        endAt,
      ),
    ).toBe(false)

    // teste de horario durante o expediente e antes do almoço
    expect(
      scheduling.validateSchedule(
        new Date('2023-11-23T10:00:00.000Z'),
        startAt,
        endAt,
      ),
    ).toBe(true)

    // teste de horario durante o expediente e depois do almoço
    expect(
      scheduling.validateSchedule(
        new Date('2023-11-23T14:00:00.000Z'),
        startAt,
        endAt,
      ),
    ).toBe(true)

    // teste de horario durante o almoço
    expect(
      scheduling.validateSchedule(
        new Date('2023-11-23T12:30:00.000Z'),
        startAt,
        endAt,
      ),
    ).toBe(false)
  })
})
