import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order4,
  Customer4,
} from '../models';

import {Order4Repository} from '../repositories';

export class Order4Customer4Controller {
  constructor(
    @repository(Order4Repository)
    public orderRepository: Order4Repository,
  ) { }

  @get('/orders4/{id}/customer4', {
    responses: {
      '200': {
        description: 'Customer4 belonging to Order4',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer4 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order4.prototype.id,
  ): Promise<Customer4> {
    return await this.orderRepository.customer4(id);
  }
}