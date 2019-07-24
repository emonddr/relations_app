import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order13} from './order13.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer13 extends Entity {
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

  @hasMany(() => Order13)
  orders: Order13[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer13>) {
    super(data);
  }
}

export interface Customer13Relations {
  // describe navigational properties here
}

export type Customer13WithRelations = Customer13 & Customer13Relations;
