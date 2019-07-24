import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order21,
  Customer21,
} from '../models';

import {Order21Repository} from '../repositories';

export class Order21Customer21Controller {
  constructor(
    @repository(Order21Repository)
    public orderRepository: Order21Repository,
  ) { }

  @get('/orders21/{id}/customer21', {
    responses: {
      '200': {
        description: 'Customer21 belonging to Order21',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer21 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order21.prototype.id,
  ): Promise<Customer21> {
    return await this.orderRepository.customer21(id);
  }
}