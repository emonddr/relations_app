import {Entity, model, property,belongsTo} from '@loopback/repository';
import {Customer34} from './customer34.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Order34 extends Entity {
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

  @belongsTo(() => Customer34)
  customer34Id?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Order34>) {
    super(data);
  }
}

export interface Order34Relations {
  // describe navigational properties here
}

export type Order34WithRelations = Order34 & Order34Relations;
