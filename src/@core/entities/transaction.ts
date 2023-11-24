import { Entity } from '../core/entities/base-entity'
import { UniqueEntityID } from '../core/entities/unique-entity-id'
import { Optional } from '../types/optional'

interface TransactionProps {
  schedulingId: UniqueEntityID
  amount: number
  createdAt: Date
  updatedAt: Date
}

export class Transaction extends Entity<TransactionProps> {
  get schedulingId(): UniqueEntityID {
    return this.props.schedulingId
  }

  set schedulingId(value: UniqueEntityID) {
    this.props.schedulingId = value
  }

  get amount(): number {
    return this.props.amount
  }

  set amount(value: number) {
    this.props.amount = value
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updateAt(): Date | undefined {
    return this.props.updatedAt
  }

  static create(
    props: Optional<TransactionProps, 'createdAt'>,
    id: UniqueEntityID,
  ) {
    const transaction = new Transaction(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    )
    return transaction
  }
}
