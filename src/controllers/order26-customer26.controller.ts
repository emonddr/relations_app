import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order26,
  Customer26,
} from '../models';

import {Order26Repository} from '../repositories';

export class Order26Customer26Controller {
  constructor(
    @repository(Order26Repository)
    public orderRepository: Order26Repository,
  ) { }

  @get('/orders26/{id}/customer26', {
    responses: {
      '200': {
        description: 'Customer26 belonging to Order26',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer26 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order26.prototype.id,
  ): Promise<Customer26> {
    return await this.orderRepository.customer26(id);
  }
}