/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseHTTPController } from '../../../../shared/adapters/http/models/baseController'
import { ReadCarInteraction } from './readCarInteraction'
import { Request, Response } from 'express'
import { IReadCarDTO } from './readCarDTO'

export class ReadCarController extends BaseHTTPController {
  private interaction: ReadCarInteraction

  constructor (interaction: ReadCarInteraction) {
    super()
    this.interaction = interaction
  }

  async executeImplementation (req: Request, res: Response):Promise<any> {
    const dto: IReadCarDTO = req.body as IReadCarDTO

    try {
      const result:any = await this.interaction.execute(dto)
      if (result.isLeft()) {
        const error = result.value
        return this.fail(res, error.errorValue())
      } else {
        const success = result.value
        return this.ok(res, success.getValue())
      }
    } catch (err) {
      return this.fail(res, err)
    }
  }
}
