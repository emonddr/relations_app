import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order29,
  Customer29,
} from '../models';

import {Order29Repository} from '../repositories';

export class Order29Customer29Controller {
  constructor(
    @repository(Order29Repository)
    public orderRepository: Order29Repository,
  ) { }

  @get('/orders29/{id}/customer29', {
    responses: {
      '200': {
        description: 'Customer29 belonging to Order29',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer29 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order29.prototype.id,
  ): Promise<Customer29> {
    return await this.orderRepository.customer29(id);
  }
}