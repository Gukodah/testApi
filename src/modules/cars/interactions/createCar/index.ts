import { carRepositorie } from '../../repositories'
import { CreateCarController } from './createCarController'
import { CreateCarInteraction } from './createCarInteraction'

const createCarInteraction = new CreateCarInteraction(carRepositorie)
const createCarController = new CreateCarController(createCarInteraction)

export {
  createCarController
}
