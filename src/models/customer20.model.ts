import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order20} from './order20.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer20 extends Entity {
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

  @hasMany(() => Order20)
  orders: Order20[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer20>) {
    super(data);
  }
}

export interface Customer20Relations {
  // describe navigational properties here
}

export type Customer20WithRelations = Customer20 & Customer20Relations;
