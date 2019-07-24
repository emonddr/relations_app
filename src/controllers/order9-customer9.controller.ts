import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order9,
  Customer9,
} from '../models';

import {Order9Repository} from '../repositories';

export class Order9Customer9Controller {
  constructor(
    @repository(Order9Repository)
    public orderRepository: Order9Repository,
  ) { }

  @get('/orders9/{id}/customer9', {
    responses: {
      '200': {
        description: 'Customer9 belonging to Order9',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer9 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order9.prototype.id,
  ): Promise<Customer9> {
    return await this.orderRepository.customer9(id);
  }
}