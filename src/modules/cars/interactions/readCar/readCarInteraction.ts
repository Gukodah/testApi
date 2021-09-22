/* eslint-disable @typescript-eslint/no-explicit-any */
import { IInteraction } from '../../../../shared/core/interaction'
import { Either, left, right, Result } from '../../../../shared/core/result'
import { Car } from '../../domain/car'
import { ICarRepo } from '../../repositories/carRepositorie'
import { IReadCarDTO } from './readCarDTO'

type Response = Either<Result<any>, Result<Car[]>>

export class ReadCarInteraction implements IInteraction<IReadCarDTO, Promise<Response>> {
  private carRepo: ICarRepo

  constructor (carRepo: ICarRepo) {
    this.carRepo = carRepo
  }

  async execute (req: IReadCarDTO): Promise<Response> {
    try {
      return right(Result.ok<Car[]>(await this.carRepo.index(req.id)))
    } catch (err) {
      console.log(err)
      return left(Result.fail<string>(err as string))
    }
  }
}
