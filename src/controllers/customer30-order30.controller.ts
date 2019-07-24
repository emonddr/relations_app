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
  Customer30,
  Order30,
} from '../models';
import {Customer30Repository} from '../repositories';

export class Customer30Order30Controller {
  constructor(
    @repository(Customer30Repository) protected customerRepository: Customer30Repository,
  ) { }

  @get('/customers30/{id}/orders30', {
    responses: {
      '200': {
        description: 'Array of Order30\'s belonging to Customer30',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order30 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order30>,
  ): Promise<Order30[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers30/{id}/orders30', {
    responses: {
      '200': {
        description: 'Customer30 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order30 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer30.prototype.id,
    @requestBody() order: Order30,
  ): Promise<Order30> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers30/{id}/orders30', {
    responses: {
      '200': {
        description: 'Customer30.Order30 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order30, {partial: true}),
        },
      },
    })
    order: Partial<Order30>,
    @param.query.object('where', getWhereSchemaFor(Order30)) where?: Where<Order30>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers30/{id}/orders30', {
    responses: {
      '200': {
        description: 'Customer30.Order30 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order30)) where?: Where<Order30>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
