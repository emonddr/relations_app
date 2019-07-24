import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order5} from './order5.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer5 extends Entity {
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

  @hasMany(() => Order5)
  orders: Order5[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer5>) {
    super(data);
  }
}

export interface Customer5Relations {
  // describe navigational properties here
}

export type Customer5WithRelations = Customer5 & Customer5Relations;
