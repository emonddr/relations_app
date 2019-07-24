import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order24} from './order24.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer24 extends Entity {
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

  @hasMany(() => Order24)
  orders: Order24[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer24>) {
    super(data);
  }
}

export interface Customer24Relations {
  // describe navigational properties here
}

export type Customer24WithRelations = Customer24 & Customer24Relations;
