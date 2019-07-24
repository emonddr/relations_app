import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order34,
  Customer34,
} from '../models';

import {Order34Repository} from '../repositories';

export class Order34Customer34Controller {
  constructor(
    @repository(Order34Repository)
    public orderRepository: Order34Repository,
  ) { }

  @get('/orders34/{id}/customer34', {
    responses: {
      '200': {
        description: 'Customer34 belonging to Order34',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer34 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order34.prototype.id,
  ): Promise<Customer34> {
    return await this.orderRepository.customer34(id);
  }
}