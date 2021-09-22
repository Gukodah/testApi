import { Result } from '../../../shared/core/result'
import { Entity } from '../../../shared/domain/entity'
import { UniqueEntityID } from '../../../shared/domain/UniqueEntityID'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class CarId extends Entity<any> {
  get id ():UniqueEntityID {
    return this._id
  }

  private constructor (id?:UniqueEntityID) {
    super(null, id)
  }

  public static create (id?: UniqueEntityID):Result<CarId> {
    return Result.ok<CarId>(new CarId(id))
  }
}
