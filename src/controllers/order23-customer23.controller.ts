import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order23,
  Customer23,
} from '../models';

import {Order23Repository} from '../repositories';

export class Order23Customer23Controller {
  constructor(
    @repository(Order23Repository)
    public orderRepository: Order23Repository,
  ) { }

  @get('/orders23/{id}/customer23', {
    responses: {
      '200': {
        description: 'Customer23 belonging to Order23',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer23 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order23.prototype.id,
  ): Promise<Customer23> {
    return await this.orderRepository.customer23(id);
  }
}