import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order22,
  Customer22,
} from '../models';

import {Order22Repository} from '../repositories';

export class Order22Customer22Controller {
  constructor(
    @repository(Order22Repository)
    public orderRepository: Order22Repository,
  ) { }

  @get('/orders22/{id}/customer22', {
    responses: {
      '200': {
        description: 'Customer22 belonging to Order22',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer22 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order22.prototype.id,
  ): Promise<Customer22> {
    return await this.orderRepository.customer22(id);
  }
}