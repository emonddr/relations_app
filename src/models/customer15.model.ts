import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order15} from './order15.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer15 extends Entity {
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

  @hasMany(() => Order15)
  orders: Order15[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer15>) {
    super(data);
  }
}

export interface Customer15Relations {
  // describe navigational properties here
}

export type Customer15WithRelations = Customer15 & Customer15Relations;
