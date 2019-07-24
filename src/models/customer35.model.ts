import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order35} from './order35.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer35 extends Entity {
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

  @hasMany(() => Order35)
  orders: Order35[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer35>) {
    super(data);
  }
}

export interface Customer35Relations {
  // describe navigational properties here
}

export type Customer35WithRelations = Customer35 & Customer35Relations;
