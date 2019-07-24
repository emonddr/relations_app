import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order33} from './order33.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer33 extends Entity {
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

  @hasMany(() => Order33)
  orders: Order33[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer33>) {
    super(data);
  }
}

export interface Customer33Relations {
  // describe navigational properties here
}

export type Customer33WithRelations = Customer33 & Customer33Relations;
