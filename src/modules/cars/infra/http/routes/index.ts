import { Router, Request, Response } from 'express'
import { createCarController } from '../../../interactions/createCar'
import { readCarController } from '../../../interactions/readCar'

const carRouter = Router()

carRouter.post('/create', (req:Request, res:Response) => createCarController.execute(req, res))
carRouter.get('/index', (req:Request, res:Response) => readCarController.execute(req, res))

export { carRouter }
