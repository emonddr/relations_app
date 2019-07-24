import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order16,
  Customer16,
} from '../models';

import {Order16Repository} from '../repositories';

export class Order16Customer16Controller {
  constructor(
    @repository(Order16Repository)
    public orderRepository: Order16Repository,
  ) { }

  @get('/orders16/{id}/customer16', {
    responses: {
      '200': {
        description: 'Customer16 belonging to Order16',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer16 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order16.prototype.id,
  ): Promise<Customer16> {
    return await this.orderRepository.customer16(id);
  }
}