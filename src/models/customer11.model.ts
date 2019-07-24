import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order11} from './order11.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer11 extends Entity {
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

  @hasMany(() => Order11)
  orders: Order11[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer11>) {
    super(data);
  }
}

export interface Customer11Relations {
  // describe navigational properties here
}

export type Customer11WithRelations = Customer11 & Customer11Relations;
