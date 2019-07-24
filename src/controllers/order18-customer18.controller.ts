import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order18,
  Customer18,
} from '../models';

import {Order18Repository} from '../repositories';

export class Order18Customer18Controller {
  constructor(
    @repository(Order18Repository)
    public orderRepository: Order18Repository,
  ) { }

  @get('/orders18/{id}/customer18', {
    responses: {
      '200': {
        description: 'Customer18 belonging to Order18',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer18 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order18.prototype.id,
  ): Promise<Customer18> {
    return await this.orderRepository.customer18(id);
  }
}