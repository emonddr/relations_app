import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order14} from './order14.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer14 extends Entity {
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

  @hasMany(() => Order14)
  orders: Order14[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer14>) {
    super(data);
  }
}

export interface Customer14Relations {
  // describe navigational properties here
}

export type Customer14WithRelations = Customer14 & Customer14Relations;
