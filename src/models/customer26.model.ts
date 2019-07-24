import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order26} from './order26.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer26 extends Entity {
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

  @hasMany(() => Order26)
  orders: Order26[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer26>) {
    super(data);
  }
}

export interface Customer26Relations {
  // describe navigational properties here
}

export type Customer26WithRelations = Customer26 & Customer26Relations;
