import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order30,
  Customer30,
} from '../models';

import {Order30Repository} from '../repositories';

export class Order30Customer30Controller {
  constructor(
    @repository(Order30Repository)
    public orderRepository: Order30Repository,
  ) { }

  @get('/orders30/{id}/customer30', {
    responses: {
      '200': {
        description: 'Customer30 belonging to Order30',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer30 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order30.prototype.id,
  ): Promise<Customer30> {
    return await this.orderRepository.customer30(id);
  }
}