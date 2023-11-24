import { it, describe, expect } from 'vitest'
import { UniqueEntityID } from '../core/entities/unique-entity-id'
import { CutCategory } from './cut-category'

describe('Customer Entity', () => {
  it('Should be able to instatiate a customer', () => {
    const cutCategory = CutCategory.create(
      { description: 'Descrição', name: 'Corte especial' },
      new UniqueEntityID(),
    )
    expect(cutCategory.description).toBe('Descrição')
  })
})
