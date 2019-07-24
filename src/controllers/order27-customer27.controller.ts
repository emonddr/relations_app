import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order27,
  Customer27,
} from '../models';

import {Order27Repository} from '../repositories';

export class Order27Customer27Controller {
  constructor(
    @repository(Order27Repository)
    public orderRepository: Order27Repository,
  ) { }

  @get('/orders27/{id}/customer27', {
    responses: {
      '200': {
        description: 'Customer27 belonging to Order27',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer27 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order27.prototype.id,
  ): Promise<Customer27> {
    return await this.orderRepository.customer27(id);
  }
}