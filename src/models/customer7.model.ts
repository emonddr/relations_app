import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order7} from './order7.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer7 extends Entity {
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

  @hasMany(() => Order7)
  orders: Order7[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer7>) {
    super(data);
  }
}

export interface Customer7Relations {
  // describe navigational properties here
}

export type Customer7WithRelations = Customer7 & Customer7Relations;
