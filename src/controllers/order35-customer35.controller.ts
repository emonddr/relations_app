import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order35,
  Customer35,
} from '../models';

import {Order35Repository} from '../repositories';

export class Order35Customer35Controller {
  constructor(
    @repository(Order35Repository)
    public orderRepository: Order35Repository,
  ) { }

  @get('/orders35/{id}/customer35', {
    responses: {
      '200': {
        description: 'Customer35 belonging to Order35',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer35 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order35.prototype.id,
  ): Promise<Customer35> {
    return await this.orderRepository.customer35(id);
  }
}