import { Entity } from '../core/entities/base-entity'
import { UniqueEntityID } from '../core/entities/unique-entity-id'
import { Optional } from '../types/optional'

export interface SchedulingProps {
  cutId: UniqueEntityID
  barberId: UniqueEntityID
  customerId: UniqueEntityID
  promocodeId: UniqueEntityID
  payedAt: Date
  scheduledAt: Date

  createdAt: Date
  updatedAt?: Date
}

export class Scheduling extends Entity<SchedulingProps> {
  get cutId(): UniqueEntityID {
    return this.props.cutId
  }

  set cutId(value: UniqueEntityID) {
    this.props.cutId = value
  }

  get customerId(): UniqueEntityID {
    return this.props.customerId
  }

  set customerId(value: UniqueEntityID) {
    this.props.customerId = value
  }

  get barberId(): UniqueEntityID {
    return this.props.barberId
  }

  set barberId(value: UniqueEntityID) {
    this.props.barberId = value
  }

  get promocodeId(): UniqueEntityID {
    return this.props.promocodeId
  }

  set promocodeId(value: UniqueEntityID) {
    this.props.promocodeId = value
  }

  get payedAt(): Date {
    return this.props.payedAt
  }

  set payedAt(value: Date) {
    this.props.payedAt = value
  }

  get scheduledAt(): Date {
    return this.props.payedAt
  }

  set scheduledAt(value: Date) {
    this.props.payedAt = value
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updateAt(): Date | undefined {
    return this.props.updatedAt
  }

  private validateSchedule(scheduleDate: Date) {
    // if(scheduleDate > )
  }

  static create(
    props: Optional<SchedulingProps, 'createdAt'>,
    id: UniqueEntityID,
  ) {
    const scheduling = new Scheduling(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    )
    return scheduling
  }
}
