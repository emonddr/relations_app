import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order13,
  Customer13,
} from '../models';

import {Order13Repository} from '../repositories';

export class Order13Customer13Controller {
  constructor(
    @repository(Order13Repository)
    public orderRepository: Order13Repository,
  ) { }

  @get('/orders13/{id}/customer13', {
    responses: {
      '200': {
        description: 'Customer13 belonging to Order13',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer13 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order13.prototype.id,
  ): Promise<Customer13> {
    return await this.orderRepository.customer13(id);
  }
}