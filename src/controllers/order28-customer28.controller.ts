import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order28,
  Customer28,
} from '../models';

import {Order28Repository} from '../repositories';

export class Order28Customer28Controller {
  constructor(
    @repository(Order28Repository)
    public orderRepository: Order28Repository,
  ) { }

  @get('/orders28/{id}/customer28', {
    responses: {
      '200': {
        description: 'Customer28 belonging to Order28',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer28 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order28.prototype.id,
  ): Promise<Customer28> {
    return await this.orderRepository.customer28(id);
  }
}