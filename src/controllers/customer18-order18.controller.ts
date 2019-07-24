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
  Customer18,
  Order18,
} from '../models';
import {Customer18Repository} from '../repositories';

export class Customer18Order18Controller {
  constructor(
    @repository(Customer18Repository) protected customerRepository: Customer18Repository,
  ) { }

  @get('/customers18/{id}/orders18', {
    responses: {
      '200': {
        description: 'Array of Order18\'s belonging to Customer18',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order18 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order18>,
  ): Promise<Order18[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers18/{id}/orders18', {
    responses: {
      '200': {
        description: 'Customer18 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order18 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer18.prototype.id,
    @requestBody() order: Order18,
  ): Promise<Order18> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers18/{id}/orders18', {
    responses: {
      '200': {
        description: 'Customer18.Order18 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order18, {partial: true}),
        },
      },
    })
    order: Partial<Order18>,
    @param.query.object('where', getWhereSchemaFor(Order18)) where?: Where<Order18>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers18/{id}/orders18', {
    responses: {
      '200': {
        description: 'Customer18.Order18 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order18)) where?: Where<Order18>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
