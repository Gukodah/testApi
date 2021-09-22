import { MongoCarRepositorie } from './implementations/mongoCarRepositorie'
import { CarModel } from '../../../shared/adapters/database/mongo/carSchema'

const carRepositorie = new MongoCarRepositorie(CarModel)

export { carRepositorie }
