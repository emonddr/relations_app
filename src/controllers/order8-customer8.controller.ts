import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order8,
  Customer8,
} from '../models';

import {Order8Repository} from '../repositories';

export class Order8Customer8Controller {
  constructor(
    @repository(Order8Repository)
    public orderRepository: Order8Repository,
  ) { }

  @get('/orders8/{id}/customer8', {
    responses: {
      '200': {
        description: 'Customer8 belonging to Order8',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer8 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order8.prototype.id,
  ): Promise<Customer8> {
    return await this.orderRepository.customer8(id);
  }
}