import { it, describe, expect } from 'vitest'
import { User } from './user'
import { UniqueEntityID } from '../core/entities/unique-entity-id'

describe('Customer Entity', () => {
  it('Should be able to instatiate a customer', () => {
    const user = User.create(
      {
        name: 'Felipe',
        email: 'felipe@gmail.com',
        passwordHash: '123',
        phoneNumber: '123456789',
      },
      new UniqueEntityID('user-id'),
    )
    expect(user.id.toString()).toEqual('user-id')
  })
})
