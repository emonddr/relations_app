import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order32} from './order32.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer32 extends Entity {
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

  @hasMany(() => Order32)
  orders: Order32[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer32>) {
    super(data);
  }
}

export interface Customer32Relations {
  // describe navigational properties here
}

export type Customer32WithRelations = Customer32 & Customer32Relations;
