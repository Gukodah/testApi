import { carRepositorie } from '../../repositories'
import { ReadCarController } from './readCarController'
import { ReadCarInteraction } from './readCarInteraction'

const readCarInteraction = new ReadCarInteraction(carRepositorie)
const readCarController = new ReadCarController(readCarInteraction)

export {
  readCarController
}
