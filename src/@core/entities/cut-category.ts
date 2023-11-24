import { Entity } from '../core/entities/base-entity'
import { Optional } from '../types/optional'
import { UniqueEntityID } from '../core/entities/unique-entity-id'

interface CutCategoryProps {
  name: string
  description: string

  createdAt: Date
  updatedAt?: Date
}

export class CutCategory extends Entity<CutCategoryProps> {
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

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updateAt(): Date | undefined {
    return this.props.updatedAt
  }

  static create(
    props: Optional<CutCategoryProps, 'createdAt'>,
    id: UniqueEntityID,
  ) {
    const cutCategory = new CutCategory(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    )
    return cutCategory
  }
}
