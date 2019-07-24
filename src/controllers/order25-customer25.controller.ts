import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order25,
  Customer25,
} from '../models';

import {Order25Repository} from '../repositories';

export class Order25Customer25Controller {
  constructor(
    @repository(Order25Repository)
    public orderRepository: Order25Repository,
  ) { }

  @get('/orders25/{id}/customer25', {
    responses: {
      '200': {
        description: 'Customer25 belonging to Order25',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer25 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order25.prototype.id,
  ): Promise<Customer25> {
    return await this.orderRepository.customer25(id);
  }
}