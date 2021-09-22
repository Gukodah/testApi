import { Result } from '../../../shared/core/result'
import { AggregateRoot } from '../../../shared/domain/aggregateRoot'
import { UniqueEntityID } from '../../../shared/domain/UniqueEntityID'
import { CarBrand } from './carBrand'
import { CarId } from './carId'
import { CarCreated } from './events/carCreated'

interface CarProps {
  brand: CarBrand
}

export class Car extends AggregateRoot<CarProps> {
  get carId (): CarId {
    return CarId.create(this._id)
      .getValue()
  }

  get brand (): CarBrand {
    return this.props.brand
  }

  public static create (props:CarProps, id?:UniqueEntityID):Result<Car> {
    const isNewCar = !!id === false
    const car = new Car(props, id)
    if (isNewCar) {
      car.addDomainEvent(new CarCreated(car))
    }

    return Result.ok<Car>(car)
  }
}
