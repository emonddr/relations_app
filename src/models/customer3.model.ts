import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order3} from './order3.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer3 extends Entity {
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

  @hasMany(() => Order3)
  orders: Order3[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer3>) {
    super(data);
  }
}

export interface Customer3Relations {
  // describe navigational properties here
}

export type Customer3WithRelations = Customer3 & Customer3Relations;
