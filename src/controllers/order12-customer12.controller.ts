import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order12,
  Customer12,
} from '../models';

import {Order12Repository} from '../repositories';

export class Order12Customer12Controller {
  constructor(
    @repository(Order12Repository)
    public orderRepository: Order12Repository,
  ) { }

  @get('/orders12/{id}/customer12', {
    responses: {
      '200': {
        description: 'Customer12 belonging to Order12',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer12 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order12.prototype.id,
  ): Promise<Customer12> {
    return await this.orderRepository.customer12(id);
  }
}