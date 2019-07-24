import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order5,
  Customer5,
} from '../models';

import {Order5Repository} from '../repositories';

export class Order5Customer5Controller {
  constructor(
    @repository(Order5Repository)
    public orderRepository: Order5Repository,
  ) { }

  @get('/orders5/{id}/customer5', {
    responses: {
      '200': {
        description: 'Customer5 belonging to Order5',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer5 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order5.prototype.id,
  ): Promise<Customer5> {
    return await this.orderRepository.customer5(id);
  }
}