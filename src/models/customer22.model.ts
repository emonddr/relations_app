import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order22} from './order22.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer22 extends Entity {
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

  @hasMany(() => Order22)
  orders: Order22[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer22>) {
    super(data);
  }
}

export interface Customer22Relations {
  // describe navigational properties here
}

export type Customer22WithRelations = Customer22 & Customer22Relations;
