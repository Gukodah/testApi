/* eslint-disable @typescript-eslint/no-explicit-any */
export class Result<T> {
  public isSuccess: boolean
  public isFailure: boolean
  public error: T | string
  private _value: T

  constructor (isSuccess:boolean, error?: T | string, value?: T) {
    if (isSuccess && error) {
      throw new Error('Invalido: um resultado não pode ter obtido sucesso, e ao mesmo tempo conter um erro')
    }
    if (!isSuccess && !error) {
      throw new Error('Invalido: Uma operação sem sucesso precisa conter uma mensagem de erro')
    }

    this.isSuccess = isSuccess
    this.isFailure = !this.isSuccess
    this.error = error
    this._value = value

    Object.freeze(this)
  }

  public getValue (): T {
    if (!this.isSuccess) {
      console.log(this.error)
      throw new Error('Não é possivel obter o valor do resultado de uma operação com erro, tente acessar a propriedade "errorValue"')
    }

    return this._value
  }

  public errorValue (): T {
    return this.error as T
  }

  public static ok<U> (value?: U) :Result<U> {
    return new Result<U>(true, null, value)
  }

  public static fail<U> (error: string): Result<U> {
    return new Result<U>(false, error)
  }

  public static combine (results: Result<any>[]) : Result<any> {
    for (const result of results) {
      if (result.isFailure) return result
    }

    return Result.ok()
  }
}

export class Left<L, A> {
  readonly value : L

  constructor (value: L) {
    this.value = value
  }

  isLeft () : this is Left<L, A> {
    return true
  }

  isRight (): this is Right<L, A> {
    return false
  }
}

export class Right<L, A> {
  readonly value: A

  constructor (value:A) {
    this.value = value
  }

  isLeft (): this is Left<L, A> {
    return false
  }

  isRight (): this is Right<L, A> {
    return true
  }
}

export type Either<L, A> = Left<L, A> | Right<L, A>

export const left = <L, A>(l: L): Either<L, A> => {
  return new Left(l)
}

export const right = <L, A>(a: A): Either<L, A> => {
  return new Right<L, A>(a)
}
