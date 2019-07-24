import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order3,
  Customer3,
} from '../models';

import {Order3Repository} from '../repositories';

export class Order3Customer3Controller {
  constructor(
    @repository(Order3Repository)
    public orderRepository: Order3Repository,
  ) { }

  @get('/orders3/{id}/customer3', {
    responses: {
      '200': {
        description: 'Customer3 belonging to Order3',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer3 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order3.prototype.id,
  ): Promise<Customer3> {
    return await this.orderRepository.customer3(id);
  }
}