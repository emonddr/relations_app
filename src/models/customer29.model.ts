import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order29} from './order29.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer29 extends Entity {
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

  @hasMany(() => Order29)
  orders: Order29[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer29>) {
    super(data);
  }
}

export interface Customer29Relations {
  // describe navigational properties here
}

export type Customer29WithRelations = Customer29 & Customer29Relations;
