import { Router } from 'express'
import { carRouter } from '../../../modules/cars/infra/http/routes'

const masterRouter = Router()

masterRouter.use('/car', carRouter)

export { masterRouter }
