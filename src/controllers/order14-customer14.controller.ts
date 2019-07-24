import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order14,
  Customer14,
} from '../models';

import {Order14Repository} from '../repositories';

export class Order14Customer14Controller {
  constructor(
    @repository(Order14Repository)
    public orderRepository: Order14Repository,
  ) { }

  @get('/orders14/{id}/customer14', {
    responses: {
      '200': {
        description: 'Customer14 belonging to Order14',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer14 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order14.prototype.id,
  ): Promise<Customer14> {
    return await this.orderRepository.customer14(id);
  }
}