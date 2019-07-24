import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order31} from './order31.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer31 extends Entity {
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

  @hasMany(() => Order31)
  orders: Order31[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer31>) {
    super(data);
  }
}

export interface Customer31Relations {
  // describe navigational properties here
}

export type Customer31WithRelations = Customer31 & Customer31Relations;
