import { User, UserProps } from './user'
import { UniqueEntityID } from '../core/entities/unique-entity-id'
import { Optional } from '../types/optional'

export interface BarberProps extends UserProps {
  amountOfCounts: number
  userId: UniqueEntityID

  createdAt: Date
  updatedAt?: Date
}

export class Barber extends User<BarberProps> {
  get amountOfCounts(): number {
    return this.props.amountOfCounts
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updateAt(): Date | undefined {
    return this.props.updatedAt
  }

  static create(props: Optional<BarberProps, 'createdAt'>, id: UniqueEntityID) {
    const barber = new Barber(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    )
    return barber
  }
}
