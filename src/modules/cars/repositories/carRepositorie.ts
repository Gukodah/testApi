import { Car } from '../domain/car'

export interface ICarRepo {
  save (car: Car): Promise<boolean>
  index (id?: string): Promise<Car[]>
}
