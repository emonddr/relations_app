import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order8} from './order8.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer8 extends Entity {
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

  @hasMany(() => Order8)
  orders: Order8[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer8>) {
    super(data);
  }
}

export interface Customer8Relations {
  // describe navigational properties here
}

export type Customer8WithRelations = Customer8 & Customer8Relations;
