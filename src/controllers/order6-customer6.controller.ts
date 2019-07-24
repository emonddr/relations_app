import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order6,
  Customer6,
} from '../models';

import {Order6Repository} from '../repositories';

export class Order6Customer6Controller {
  constructor(
    @repository(Order6Repository)
    public orderRepository: Order6Repository,
  ) { }

  @get('/orders6/{id}/customer6', {
    responses: {
      '200': {
        description: 'Customer6 belonging to Order6',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer6 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order6.prototype.id,
  ): Promise<Customer6> {
    return await this.orderRepository.customer6(id);
  }
}