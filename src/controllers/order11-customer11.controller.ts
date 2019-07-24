import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Order11,
  Customer11,
} from '../models';

import {Order11Repository} from '../repositories';

export class Order11Customer11Controller {
  constructor(
    @repository(Order11Repository)
    public orderRepository: Order11Repository,
  ) { }

  @get('/orders11/{id}/customer11', {
    responses: {
      '200': {
        description: 'Customer11 belonging to Order11',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer11 } },
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Order11.prototype.id,
  ): Promise<Customer11> {
    return await this.orderRepository.customer11(id);
  }
}