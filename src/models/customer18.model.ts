import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order18} from './order18.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer18 extends Entity {
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

  @hasMany(() => Order18)
  orders: Order18[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer18>) {
    super(data);
  }
}

export interface Customer18Relations {
  // describe navigational properties here
}

export type Customer18WithRelations = Customer18 & Customer18Relations;
