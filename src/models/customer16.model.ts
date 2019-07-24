import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order16} from './order16.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer16 extends Entity {
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

  @hasMany(() => Order16)
  orders: Order16[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer16>) {
    super(data);
  }
}

export interface Customer16Relations {
  // describe navigational properties here
}

export type Customer16WithRelations = Customer16 & Customer16Relations;
