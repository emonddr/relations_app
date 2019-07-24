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
  Customer10,
  Order10,
} from '../models';
import {Customer10Repository} from '../repositories';

export class Customer10Order10Controller {
  constructor(
    @repository(Customer10Repository) protected customerRepository: Customer10Repository,
  ) { }

  @get('/customers10/{id}/orders10', {
    responses: {
      '200': {
        description: 'Array of Order10\'s belonging to Customer10',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order10 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order10>,
  ): Promise<Order10[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers10/{id}/orders10', {
    responses: {
      '200': {
        description: 'Customer10 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order10 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer10.prototype.id,
    @requestBody() order: Order10,
  ): Promise<Order10> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers10/{id}/orders10', {
    responses: {
      '200': {
        description: 'Customer10.Order10 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order10, {partial: true}),
        },
      },
    })
    order: Partial<Order10>,
    @param.query.object('where', getWhereSchemaFor(Order10)) where?: Where<Order10>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers10/{id}/orders10', {
    responses: {
      '200': {
        description: 'Customer10.Order10 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order10)) where?: Where<Order10>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
