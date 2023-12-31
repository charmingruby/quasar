import { User, UserProps } from './user'
import { UniqueEntityID } from '../core/entities/unique-entity-id'
import { Optional } from '../types/optional'

export interface CustomerProps extends UserProps {
  amountOfScheduling: number
  userId: UniqueEntityID

  createdAt: Date
  updatedAt?: Date
}

export class Customer extends User<CustomerProps> {
  get amountOfScheduling(): number {
    return this.props.amountOfScheduling
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updateAt(): Date | undefined {
    return this.props.updatedAt
  }

  static create(
    props: Optional<CustomerProps, 'createdAt'>,
    id: UniqueEntityID,
  ) {
    const customer = new Customer(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    )
    return customer
  }
}
