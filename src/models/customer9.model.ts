import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order9} from './order9.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer9 extends Entity {
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

  @hasMany(() => Order9)
  orders: Order9[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer9>) {
    super(data);
  }
}

export interface Customer9Relations {
  // describe navigational properties here
}

export type Customer9WithRelations = Customer9 & Customer9Relations;
