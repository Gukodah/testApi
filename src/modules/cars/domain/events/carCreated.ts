
import { IDomainEvent } from '../../../../shared/domain/events/IDomainEvent'
import { UniqueEntityID } from '../../../../shared/domain/UniqueEntityID'
import { Car } from '../car'

export class CarCreated implements IDomainEvent {
  public dateTimeOccurred: Date
  public car: Car
  constructor (car: Car) {
    this.dateTimeOccurred = new Date()
    this.car = car
  }

  getAggregateId (): UniqueEntityID {
    return this.car.id
  }
}
