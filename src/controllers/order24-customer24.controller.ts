import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order24,
  Customer24,
} from '../models';

import {Order24Repository} from '../repositories';

export class Order24Customer24Controller {
  constructor(
    @repository(Order24Repository)
    public orderRepository: Order24Repository,
  ) { }

  @get('/orders24/{id}/customer24', {
    responses: {
      '200': {
        description: 'Customer24 belonging to Order24',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer24 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order24.prototype.id,
  ): Promise<Customer24> {
    return await this.orderRepository.customer24(id);
  }
}