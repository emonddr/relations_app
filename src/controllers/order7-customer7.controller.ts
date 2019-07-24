import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order7,
  Customer7,
} from '../models';

import {Order7Repository} from '../repositories';

export class Order7Customer7Controller {
  constructor(
    @repository(Order7Repository)
    public orderRepository: Order7Repository,
  ) { }

  @get('/orders7/{id}/customer7', {
    responses: {
      '200': {
        description: 'Customer7 belonging to Order7',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer7 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order7.prototype.id,
  ): Promise<Customer7> {
    return await this.orderRepository.customer7(id);
  }
}