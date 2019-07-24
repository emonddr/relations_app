import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order2} from './order2.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer2 extends Entity {
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

  @hasMany(() => Order2)
  orders: Order2[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer2>) {
    super(data);
  }
}

export interface Customer2Relations {
  // describe navigational properties here
}

export type Customer2WithRelations = Customer2 & Customer2Relations;
