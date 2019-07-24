import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order27} from './order27.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer27 extends Entity {
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

  @hasMany(() => Order27)
  orders: Order27[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer27>) {
    super(data);
  }
}

export interface Customer27Relations {
  // describe navigational properties here
}

export type Customer27WithRelations = Customer27 & Customer27Relations;
