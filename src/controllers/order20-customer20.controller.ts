import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order20,
  Customer20,
} from '../models';

import {Order20Repository} from '../repositories';

export class Order20Customer20Controller {
  constructor(
    @repository(Order20Repository)
    public orderRepository: Order20Repository,
  ) { }

  @get('/orders20/{id}/customer20', {
    responses: {
      '200': {
        description: 'Customer20 belonging to Order20',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer20 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order20.prototype.id,
  ): Promise<Customer20> {
    return await this.orderRepository.customer20(id);
  }
}