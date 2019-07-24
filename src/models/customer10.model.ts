import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order10} from './order10.model';

/**
* Generated : Wednesday, July 24th, 2019, 2:47:23 PM
*/
@model({settings: {strict: false}})
export class Customer10 extends Entity {
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

  @hasMany(() => Order10)
  orders: Order10[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer10>) {
    super(data);
  }
}

export interface Customer10Relations {
  // describe navigational properties here
}

export type Customer10WithRelations = Customer10 & Customer10Relations;
