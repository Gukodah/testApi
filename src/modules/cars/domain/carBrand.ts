import { Result } from '../../../shared/core/result'
import { ValueObject } from '../../../shared/domain/valueObject'

export interface CarBrandProps{
  value: string
}

export class CarBrand extends ValueObject<CarBrandProps> {
  get value (): string {
    return this.props.value
  }

  // eslint-disable-next-line no-useless-constructor
  private constructor (props: CarBrandProps) {
    super(props)
  }

  private static format (brand: string): string {
    return brand.trim().toLowerCase()
  }

  private static isValidBrand (brand: string) {
    return ['chevrolet', 'ferrari', 'mustang'].includes(brand)
  }

  public static create (brand: string):Result<CarBrand> {
    if (!this.isValidBrand(brand)) {
      return Result.fail<CarBrand>('A marca de carro informada não está disponivel')
    } else {
      return Result.ok<CarBrand>(
        new CarBrand({ value: this.format(brand) })
      )
    }
  }
}
