/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICarRepo } from '../carRepositorie'
import { Car } from '../../domain/car'

export class MongoCarRepositorie implements ICarRepo {
  private schema: any

  constructor (schema:any) {
    this.schema = schema
  }

  async save (car: Car): Promise<boolean> {
    let response = false
    const carModel = this.schema({ _id: car.id.toString(), brand: car.brand.value })
    await carModel.save().then(() => {
      response = true
    })
    return response
  }

  async index (id?:string): Promise<Car[]> {
    try {
      if (id) {
        return this.schema.find({ _id: id })
      } else {
        return this.schema.find({})
      }
    } catch {
      throw new Error('Falha ao tentar recuperar os carros no banco de dados')
    }
  }
}
