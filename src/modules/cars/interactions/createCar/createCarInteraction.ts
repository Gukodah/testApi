/* eslint-disable @typescript-eslint/no-explicit-any */
import { IInteraction } from '../../../../shared/core/interaction'
import { Either, left, right, Result } from '../../../../shared/core/result'
import { Car } from '../../domain/car'
import { CarBrand } from '../../domain/carBrand'
import { ICarRepo } from '../../repositories/carRepositorie'
import { ICreateCarDTO } from './createCarDTO'
import { CreateCarErrors } from './createCarErrors'

type Response = Either<
  CreateCarErrors.CarModelNotFoundedError | Result<any>,
  Result<void>
>

export class CreateCarInteraction implements IInteraction<ICreateCarDTO, Promise<Response>> {
  private carRepo: ICarRepo

  constructor (carRepo: ICarRepo) {
    this.carRepo = carRepo
  }

  async execute (req: ICreateCarDTO): Promise<Response> {
    const brandOrError = CarBrand.create(req.brand)
    const dtoResult = Result.combine([brandOrError])
    if (dtoResult.isFailure) {
      console.log('erred')
      return left(Result.fail<void>(dtoResult.error)) as Response
    }

    const brand: CarBrand = brandOrError.getValue()

    try {
      const carOrError: Result<Car> = Car.create({
        brand
      })

      if (carOrError.isFailure) {
        return left(Result.fail<Car>(carOrError.error.toString())) as Response
      }

      const car: Car = carOrError.getValue()

      await this.carRepo.save(car)

      return right(Result.ok<void>())
    } catch (err) {
      console.log(err)
      return left(Result.fail<string>(err as string))
    }
  }
}
