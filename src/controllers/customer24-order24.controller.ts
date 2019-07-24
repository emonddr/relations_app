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
  Customer24,
  Order24,
} from '../models';
import {Customer24Repository} from '../repositories';

export class Customer24Order24Controller {
  constructor(
    @repository(Customer24Repository) protected customerRepository: Customer24Repository,
  ) { }

  @get('/customers24/{id}/orders24', {
    responses: {
      '200': {
        description: 'Array of Order24\'s belonging to Customer24',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order24 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order24>,
  ): Promise<Order24[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers24/{id}/orders24', {
    responses: {
      '200': {
        description: 'Customer24 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order24 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer24.prototype.id,
    @requestBody() order: Order24,
  ): Promise<Order24> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers24/{id}/orders24', {
    responses: {
      '200': {
        description: 'Customer24.Order24 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order24, {partial: true}),
        },
      },
    })
    order: Partial<Order24>,
    @param.query.object('where', getWhereSchemaFor(Order24)) where?: Where<Order24>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers24/{id}/orders24', {
    responses: {
      '200': {
        description: 'Customer24.Order24 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order24)) where?: Where<Order24>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
