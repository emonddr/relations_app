import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order25} from './order25.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer25 extends Entity {
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

  @hasMany(() => Order25)
  orders: Order25[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer25>) {
    super(data);
  }
}

export interface Customer25Relations {
  // describe navigational properties here
}

export type Customer25WithRelations = Customer25 & Customer25Relations;
