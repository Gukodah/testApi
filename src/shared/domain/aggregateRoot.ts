
import { Entity } from './entity'
import { IDomainEvent } from './events/IDomainEvent'
import { DomainEvents } from './events/DomainEvents'
import { UniqueEntityID } from './UniqueEntityID'

export abstract class AggregateRoot<T> extends Entity<T> {
  private _domainEvents: IDomainEvent[] = [];

  get id (): UniqueEntityID {
    return this._id
  }

  get domainEvents (): IDomainEvent[] {
    return this._domainEvents
  }

  protected addDomainEvent (domainEvent: IDomainEvent): void {
    // adiciona um evento de dominio para esta instancia de eventos de dominios
    this._domainEvents.push(domainEvent)
    DomainEvents.markAggregateForDispatch(this)
    this.logDomainEventAdded(domainEvent)
  }

  public clearEvents (): void {
    this._domainEvents.splice(0, this._domainEvents.length)
  }

  private logDomainEventAdded (domainEvent: IDomainEvent): void {
    const thisClass = Reflect.getPrototypeOf(this)
    const domainEventClass = Reflect.getPrototypeOf(domainEvent)
    console.info('[Domain Event Created]:', thisClass.constructor.name, '==>', domainEventClass.constructor.name)
  }
}
