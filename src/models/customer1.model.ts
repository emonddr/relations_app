import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order1} from './order1.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer1 extends Entity {
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

  @hasMany(() => Order1)
  orders: Order1[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer1>) {
    super(data);
  }
}

export interface Customer1Relations {
  // describe navigational properties here
}

export type Customer1WithRelations = Customer1 & Customer1Relations;
