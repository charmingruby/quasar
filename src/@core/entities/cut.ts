import { Entity } from '../core/entities/base-entity'
import { UniqueEntityID } from '../core/entities/unique-entity-id'
import { Optional } from '../types/optional'

export interface cutProps {
  name: string
  description: string
  cutId: UniqueEntityID
  durationInMinutes: number
  categoryId: UniqueEntityID
  price: number
  imageUrl: string

  createdAt: Date
  updatedAt?: Date
}

export class Cut extends Entity<cutProps> {
  get name(): string {
    return this.props.name
  }

  set name(value: string) {
    this.props.name = value
  }

  get description(): string {
    return this.props.description
  }

  set description(value: string) {
    this.props.description = value
  }

  get durationInMinutes(): number {
    return this.props.durationInMinutes
  }

  set durationInMinutes(value: number) {
    this.props.durationInMinutes = value
  }

  get categoryId(): UniqueEntityID {
    return this.props.categoryId
  }

  set categoryId(value: UniqueEntityID) {
    this.props.categoryId = value
  }

  get price(): number {
    return this.props.price
  }

  set price(value: number) {
    this.props.price = value
  }

  get imageUrl(): string {
    return this.props.imageUrl
  }

  set imageUrl(value: string) {
    this.props.imageUrl = value
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updateAt(): Date | undefined {
    return this.props.updatedAt
  }

  static create(props: Optional<cutProps, 'createdAt'>, id: UniqueEntityID) {
    const cut = new Cut(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    )
    return cut
  }
}
