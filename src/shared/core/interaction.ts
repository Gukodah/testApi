
export interface IInteraction<IRequest, IResponse> {
  execute (request?: IRequest) : Promise<IResponse> | IResponse;
}
