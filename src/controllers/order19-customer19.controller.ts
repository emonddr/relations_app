import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order19,
  Customer19,
} from '../models';

import {Order19Repository} from '../repositories';

export class Order19Customer19Controller {
  constructor(
    @repository(Order19Repository)
    public orderRepository: Order19Repository,
  ) { }

  @get('/orders19/{id}/customer19', {
    responses: {
      '200': {
        description: 'Customer19 belonging to Order19',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer19 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order19.prototype.id,
  ): Promise<Customer19> {
    return await this.orderRepository.customer19(id);
  }
}