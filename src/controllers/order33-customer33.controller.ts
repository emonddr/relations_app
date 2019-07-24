import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order33,
  Customer33,
} from '../models';

import {Order33Repository} from '../repositories';

export class Order33Customer33Controller {
  constructor(
    @repository(Order33Repository)
    public orderRepository: Order33Repository,
  ) { }

  @get('/orders33/{id}/customer33', {
    responses: {
      '200': {
        description: 'Customer33 belonging to Order33',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer33 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order33.prototype.id,
  ): Promise<Customer33> {
    return await this.orderRepository.customer33(id);
  }
}