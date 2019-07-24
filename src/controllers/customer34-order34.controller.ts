import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Customer34,
  Order34,
} from '../models';
import {Customer34Repository} from '../repositories';

export class Customer34Order34Controller {
  constructor(
    @repository(Customer34Repository) protected customerRepository: Customer34Repository,
  ) { }

  @get('/customers34/{id}/orders34', {
    responses: {
      '200': {
        description: 'Array of Order34\'s belonging to Customer34',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order34 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order34>,
  ): Promise<Order34[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers34/{id}/orders34', {
    responses: {
      '200': {
        description: 'Customer34 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order34 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer34.prototype.id,
    @requestBody() order: Order34,
  ): Promise<Order34> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers34/{id}/orders34', {
    responses: {
      '200': {
        description: 'Customer34.Order34 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order34, {partial: true}),
        },
      },
    })
    order: Partial<Order34>,
    @param.query.object('where', getWhereSchemaFor(Order34)) where?: Where<Order34>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers34/{id}/orders34', {
    responses: {
      '200': {
        description: 'Customer34.Order34 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order34)) where?: Where<Order34>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
