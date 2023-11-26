import { it, describe, expect } from 'vitest'
import { UniqueEntityID } from '../core/entities/unique-entity-id'
import { PromoCode } from './promo-code'

describe('Customer Entity', () => {
  it('Should be able to instatiate a customer', () => {
    const promoCode = PromoCode.create(
      {
        code: new UniqueEntityID('code-123'),
        generatedBy: new UniqueEntityID(),
      },
      new UniqueEntityID(),
    )
    expect(promoCode).toBeTruthy()
    expect(promoCode.isAvailable()).toBe(true)
    expect(promoCode.code.toString()).toBe('code-123')

    const promoCode2 = PromoCode.create(
      {
        code: new UniqueEntityID('code-123456'),
        generatedBy: new UniqueEntityID(),
        usedAt: new Date(),
      },
      new UniqueEntityID(),
    )
    expect(promoCode2).toBeTruthy()
    expect(promoCode2.isAvailable()).toBe(false)
    expect(promoCode2.code.toString()).toBe('code-123456')
  })
})
