import { Entity } from '../core/entities/base-entity'
import { UniqueEntityID } from '../core/entities/unique-entity-id'
import { Optional } from '../types/optional'

interface PromoCodeProps {
  code: string
  generatedBy: UniqueEntityID
  usedAt?: Date
  createdAt: Date
  updatedAt?: Date
}

export class PromoCode extends Entity<PromoCodeProps> {
  get code(): string {
    return this.props.code
  }

  set code(value: string) {
    this.props.code = value
  }

  get generatedBy(): UniqueEntityID {
    return this.props.generatedBy
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

  // generateCode(): string {}

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
