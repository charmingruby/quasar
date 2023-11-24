import { Entity } from '../core/entities/base-entity'
import { UniqueEntityID } from '../core/entities/unique-entity-id'
import { Optional } from '../types/optional'

export interface UserProps {
  name: string
  phoneNumber: string
  email: string
  passwordHash: string

  createdAt: Date
  updatedAt?: Date
}

export class User<Props extends UserProps> extends Entity<Props> {
  get name(): string {
    return this.props.name
  }

  set name(value: string) {
    this.props.name = value
  }

  get phoneNumber(): string {
    return this.props.phoneNumber
  }

  set phoneNumber(value: string) {
    this.props.phoneNumber = value
  }

  get email(): string {
    return this.props.email
  }

  set email(value: string) {
    this.props.email = value
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updateAt(): Date | undefined {
    return this.props.updatedAt
  }

  static create(props: Optional<UserProps, 'createdAt'>, id: UniqueEntityID) {
    const user = new User(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    )
    return user
  }
}
