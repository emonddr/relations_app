import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order10,
  Customer10,
} from '../models';

import {Order10Repository} from '../repositories';

export class Order10Customer10Controller {
  constructor(
    @repository(Order10Repository)
    public orderRepository: Order10Repository,
  ) { }

  @get('/orders10/{id}/customer10', {
    responses: {
      '200': {
        description: 'Customer10 belonging to Order10',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer10 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order10.prototype.id,
  ): Promise<Customer10> {
    return await this.orderRepository.customer10(id);
  }
}