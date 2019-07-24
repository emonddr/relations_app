import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order4} from './order4.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer4 extends Entity {
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

  @hasMany(() => Order4)
  orders: Order4[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer4>) {
    super(data);
  }
}

export interface Customer4Relations {
  // describe navigational properties here
}

export type Customer4WithRelations = Customer4 & Customer4Relations;
