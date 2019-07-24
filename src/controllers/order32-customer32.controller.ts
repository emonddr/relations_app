import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order32,
  Customer32,
} from '../models';

import {Order32Repository} from '../repositories';

export class Order32Customer32Controller {
  constructor(
    @repository(Order32Repository)
    public orderRepository: Order32Repository,
  ) { }

  @get('/orders32/{id}/customer32', {
    responses: {
      '200': {
        description: 'Customer32 belonging to Order32',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer32 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order32.prototype.id,
  ): Promise<Customer32> {
    return await this.orderRepository.customer32(id);
  }
}