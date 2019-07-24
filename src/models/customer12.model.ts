import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order12} from './order12.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer12 extends Entity {
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

  @hasMany(() => Order12)
  orders: Order12[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer12>) {
    super(data);
  }
}

export interface Customer12Relations {
  // describe navigational properties here
}

export type Customer12WithRelations = Customer12 & Customer12Relations;
