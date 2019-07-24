import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order2,
  Customer2,
} from '../models';

import {Order2Repository} from '../repositories';

export class Order2Customer2Controller {
  constructor(
    @repository(Order2Repository)
    public orderRepository: Order2Repository,
  ) { }

  @get('/orders2/{id}/customer2', {
    responses: {
      '200': {
        description: 'Customer2 belonging to Order2',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer2 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order2.prototype.id,
  ): Promise<Customer2> {
    return await this.orderRepository.customer2(id);
  }
}