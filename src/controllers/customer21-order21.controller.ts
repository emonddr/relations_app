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
  Customer21,
  Order21,
} from '../models';
import {Customer21Repository} from '../repositories';

export class Customer21Order21Controller {
  constructor(
    @repository(Customer21Repository) protected customerRepository: Customer21Repository,
  ) { }

  @get('/customers21/{id}/orders21', {
    responses: {
      '200': {
        description: 'Array of Order21\'s belonging to Customer21',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order21 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order21>,
  ): Promise<Order21[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers21/{id}/orders21', {
    responses: {
      '200': {
        description: 'Customer21 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order21 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer21.prototype.id,
    @requestBody() order: Order21,
  ): Promise<Order21> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers21/{id}/orders21', {
    responses: {
      '200': {
        description: 'Customer21.Order21 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order21, {partial: true}),
        },
      },
    })
    order: Partial<Order21>,
    @param.query.object('where', getWhereSchemaFor(Order21)) where?: Where<Order21>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers21/{id}/orders21', {
    responses: {
      '200': {
        description: 'Customer21.Order21 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order21)) where?: Where<Order21>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
