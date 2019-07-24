import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order30} from './order30.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer30 extends Entity {
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

  @hasMany(() => Order30)
  orders: Order30[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer30>) {
    super(data);
  }
}

export interface Customer30Relations {
  // describe navigational properties here
}

export type Customer30WithRelations = Customer30 & Customer30Relations;
