import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order1,
  Customer1,
} from '../models';

import {Order1Repository} from '../repositories';

export class Order1Customer1Controller {
  constructor(
    @repository(Order1Repository)
    public orderRepository: Order1Repository,
  ) { }

  @get('/orders1/{id}/customer1', {
    responses: {
      '200': {
        description: 'Customer1 belonging to Order1',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer1 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order1.prototype.id,
  ): Promise<Customer1> {
    return await this.orderRepository.customer1(id);
  }
}