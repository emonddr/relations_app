import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order15,
  Customer15,
} from '../models';

import {Order15Repository} from '../repositories';

export class Order15Customer15Controller {
  constructor(
    @repository(Order15Repository)
    public orderRepository: Order15Repository,
  ) { }

  @get('/orders15/{id}/customer15', {
    responses: {
      '200': {
        description: 'Customer15 belonging to Order15',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer15 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order15.prototype.id,
  ): Promise<Customer15> {
    return await this.orderRepository.customer15(id);
  }
}