interface IInteractionError {
  message: string
}

export abstract class InteractionError implements IInteractionError {
  public readonly message:string

  constructor (message: string) {
    this.message = message
  }
}
