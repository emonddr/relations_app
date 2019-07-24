import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order23} from './order23.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer23 extends Entity {
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

  @hasMany(() => Order23)
  orders: Order23[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer23>) {
    super(data);
  }
}

export interface Customer23Relations {
  // describe navigational properties here
}

export type Customer23WithRelations = Customer23 & Customer23Relations;
