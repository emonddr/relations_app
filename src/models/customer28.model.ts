import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order28} from './order28.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer28 extends Entity {
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

  @hasMany(() => Order28)
  orders: Order28[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer28>) {
    super(data);
  }
}

export interface Customer28Relations {
  // describe navigational properties here
}

export type Customer28WithRelations = Customer28 & Customer28Relations;
