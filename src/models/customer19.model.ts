import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order19} from './order19.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer19 extends Entity {
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

  @hasMany(() => Order19)
  orders: Order19[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer19>) {
    super(data);
  }
}

export interface Customer19Relations {
  // describe navigational properties here
}

export type Customer19WithRelations = Customer19 & Customer19Relations;
