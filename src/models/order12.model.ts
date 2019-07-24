import {Entity, model, property,belongsTo} from '@loopback/repository';
import {Customer12} from './customer12.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Order12 extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'boolean',
    required: true,
  })
  isDelivered: boolean;

  @belongsTo(() => Customer12)
  customer12Id?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Order12>) {
    super(data);
  }
}

export interface Order12Relations {
  // describe navigational properties here
}

export type Order12WithRelations = Order12 & Order12Relations;
