import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order21} from './order21.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer21 extends Entity {
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

  @hasMany(() => Order21)
  orders: Order21[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer21>) {
    super(data);
  }
}

export interface Customer21Relations {
  // describe navigational properties here
}

export type Customer21WithRelations = Customer21 & Customer21Relations;
