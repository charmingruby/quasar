import { it, describe, expect } from 'vitest'
import { UniqueEntityID } from '../core/entities/unique-entity-id'
import { Cut } from './cut'

describe('Customer Entity', () => {
  it('Should be able to instatiate a customer', () => {
    const cut = Cut.create(
      {
        categoryId: new UniqueEntityID(),
        cutId: new UniqueEntityID(),
        name: 'corte',
        description: 'Descrição',
        durationInMinutes: 30,
        imageUrl: 'teste',
        price: 15,
      },
      new UniqueEntityID(),
    )
    expect(cut).toBeTruthy()
  })
})
