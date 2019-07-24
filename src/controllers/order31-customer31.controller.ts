import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order31,
  Customer31,
} from '../models';

import {Order31Repository} from '../repositories';

export class Order31Customer31Controller {
  constructor(
    @repository(Order31Repository)
    public orderRepository: Order31Repository,
  ) { }

  @get('/orders31/{id}/customer31', {
    responses: {
      '200': {
        description: 'Customer31 belonging to Order31',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer31 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order31.prototype.id,
  ): Promise<Customer31> {
    return await this.orderRepository.customer31(id);
  }
}