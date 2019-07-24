import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order34} from './order34.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer34 extends Entity {
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

  @hasMany(() => Order34)
  orders: Order34[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer34>) {
    super(data);
  }
}

export interface Customer34Relations {
  // describe navigational properties here
}

export type Customer34WithRelations = Customer34 & Customer34Relations;
