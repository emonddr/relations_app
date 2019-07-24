import {Entity, model, property,belongsTo} from '@loopback/repository';
import {Customer22} from './customer22.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Order22 extends Entity {
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

  @belongsTo(() => Customer22)
  customer22Id?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Order22>) {
    super(data);
  }
}

export interface Order22Relations {
  // describe navigational properties here
}

export type Order22WithRelations = Order22 & Order22Relations;
