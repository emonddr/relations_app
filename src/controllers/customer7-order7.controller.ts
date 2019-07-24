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
  Customer7,
  Order7,
} from '../models';
import {Customer7Repository} from '../repositories';

export class Customer7Order7Controller {
  constructor(
    @repository(Customer7Repository) protected customerRepository: Customer7Repository,
  ) { }

  @get('/customers7/{id}/orders7', {
    responses: {
      '200': {
        description: 'Array of Order7\'s belonging to Customer7',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order7 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order7>,
  ): Promise<Order7[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers7/{id}/orders7', {
    responses: {
      '200': {
        description: 'Customer7 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order7 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer7.prototype.id,
    @requestBody() order: Order7,
  ): Promise<Order7> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers7/{id}/orders7', {
    responses: {
      '200': {
        description: 'Customer7.Order7 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order7, {partial: true}),
        },
      },
    })
    order: Partial<Order7>,
    @param.query.object('where', getWhereSchemaFor(Order7)) where?: Where<Order7>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers7/{id}/orders7', {
    responses: {
      '200': {
        description: 'Customer7.Order7 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order7)) where?: Where<Order7>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
