import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order17,
  Customer17,
} from '../models';

import {Order17Repository} from '../repositories';

export class Order17Customer17Controller {
  constructor(
    @repository(Order17Repository)
    public orderRepository: Order17Repository,
  ) { }

  @get('/orders17/{id}/customer17', {
    responses: {
      '200': {
        description: 'Customer17 belonging to Order17',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer17 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order17.prototype.id,
  ): Promise<Customer17> {
    return await this.orderRepository.customer17(id);
  }
}