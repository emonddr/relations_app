import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order17} from './order17.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer17 extends Entity {
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

  @hasMany(() => Order17)
  orders: Order17[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer17>) {
    super(data);
  }
}

export interface Customer17Relations {
  // describe navigational properties here
}

export type Customer17WithRelations = Customer17 & Customer17Relations;
