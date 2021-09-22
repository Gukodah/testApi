import { InteractionError } from '../../../../shared/core/interactionError'
import { Result } from '../../../../shared/core/result'

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace CreateCarErrors{
  export class CarModelNotFoundedError extends Result<InteractionError> {
    constructor (model: string) {
      super(false, {
        message: `O modelo ${model} ainda não está disponivel`
      } as InteractionError)
    }
  }
}
