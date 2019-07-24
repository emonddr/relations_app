import {Entity, model, property,belongsTo} from '@loopback/repository';
import {Customer23} from './customer23.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Order23 extends Entity {
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

  @belongsTo(() => Customer23)
  customer23Id?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Order23>) {
    super(data);
  }
}

export interface Order23Relations {
  // describe navigational properties here
}

export type Order23WithRelations = Order23 & Order23Relations;
