/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'

export abstract class BaseHTTPController {
  protected abstract executeImplementation(req: Request, res:Response):Promise<void | any>

  public async execute (req:Request, res:Response): Promise<void> {
    try {
      await this.executeImplementation(req, res)
    } catch (err) {
      console.log('[BaseInteraction]: Erro inesperado na interação base')
      console.log(err)
      this.fail(res, 'Ocorreu um erro inesperado')
    }
  }

  public ok<T> (res:Response, dto?: T) {
    if (dto) {
      res.type('application/json')
      return res.status(200).json(dto)
    } else {
      return res.sendStatus(200)
    }
  }

  public fail (res:Response, error: Error | string) {
    console.log(error)
    return res.status(500).json({
      message: error.toString()
    })
  }
}
