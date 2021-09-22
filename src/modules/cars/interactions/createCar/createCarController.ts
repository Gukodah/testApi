/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseHTTPController } from '../../../../shared/adapters/http/models/baseController'
import { CreateCarInteraction } from './createCarInteraction'
import { Request, Response } from 'express'
import { CreateCarErrors } from './createCarErrors'
import { ICreateCarDTO } from './createCarDTO'

export class CreateCarController extends BaseHTTPController {
  private interaction: CreateCarInteraction

  constructor (interaction: CreateCarInteraction) {
    super()
    this.interaction = interaction
  }

  async executeImplementation (req: Request, res: Response):Promise<any> {
    const dto: ICreateCarDTO = req.body as ICreateCarDTO

    try {
      const result = await this.interaction.execute(dto)

      if (result.isLeft()) {
        const error = result.value
        return this.fail(res, error.errorValue())
      } else {
        return this.ok(res, 'Carro registrado com sucesso!')
      }
    } catch (err) {
      return this.fail(res, err)
    }
  }
}
