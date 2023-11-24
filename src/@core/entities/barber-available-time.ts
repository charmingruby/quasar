import { Entity } from '../core/entities/base-entity'
import { UniqueEntityID } from '../core/entities/unique-entity-id'
import { Optional } from '../types/optional'

export interface BarberAvailableTimeProps {
  userId: UniqueEntityID
  startAt: string
  endAt: string

  createdAt: Date
  updatedAt?: Date
}

export class BarberAvailableTime extends Entity<BarberAvailableTimeProps> {
  get userId(): UniqueEntityID {
    return this.props.userId
  }

  get startAt(): string {
    return this.props.startAt
  }

  get endAt(): string | undefined {
    return this.props.endAt
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updateAt(): Date | undefined {
    return this.props.updatedAt
  }

  isAvailable(time: string): boolean {
    if (this.props.startAt < time && this.props.endAt > time) {
      return true
    }
    return false
  }

  static create(
    props: Optional<BarberAvailableTimeProps, 'createdAt'>,
    id: UniqueEntityID,
  ) {
    const barberavailableTime = new BarberAvailableTime(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    )
    return barberavailableTime
  }
}
