import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order6} from './order6.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer6 extends Entity {
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

  @hasMany(() => Order6)
  orders: Order6[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer6>) {
    super(data);
  }
}

export interface Customer6Relations {
  // describe navigational properties here
}

export type Customer6WithRelations = Customer6 & Customer6Relations;
