import { Entity } from '../core/entities/base-entity'
import { UniqueEntityID } from '../core/entities/unique-entity-id'
import { Optional } from '../types/optional'

interface PromoCodeProps {
  code: UniqueEntityID
  generatedBy: UniqueEntityID
  usedAt?: Date
  createdAt: Date
  updatedAt?: Date
}

export class PromoCode extends Entity<PromoCodeProps> {
  get code(): UniqueEntityID {
    return this.props.code
  }

  set code(value: UniqueEntityID) {
    this.props.code = value
  }

  get generatedBy(): UniqueEntityID {
    return this.props.generatedBy
  }

  set usedAt(value: Date) {
    this.props.usedAt = value
  }

  get usedAt(): Date | undefined {
    return this.props.usedAt
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updateAt(): Date | undefined {
    return this.props.updatedAt
  }

  generateCode() {
    this.code = new UniqueEntityID()
  }

  isAvailable(): boolean {
    if (this.usedAt === undefined) {
      return true
    }
    return false
  }

  static create(
    props: Optional<PromoCodeProps, 'createdAt'>,
    id: UniqueEntityID,
  ) {
    const promoCode = new PromoCode(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    )
    return promoCode
  }
}
