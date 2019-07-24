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
  Customer1,
  Order1,
} from '../models';
import {Customer1Repository} from '../repositories';

export class Customer1Order1Controller {
  constructor(
    @repository(Customer1Repository) protected customerRepository: Customer1Repository,
  ) { }

  @get('/customers1/{id}/orders1', {
    responses: {
      '200': {
        description: 'Array of Order1\'s belonging to Customer1',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order1 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order1>,
  ): Promise<Order1[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers1/{id}/orders1', {
    responses: {
      '200': {
        description: 'Customer1 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order1 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer1.prototype.id,
    @requestBody() order: Order1,
  ): Promise<Order1> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers1/{id}/orders1', {
    responses: {
      '200': {
        description: 'Customer1.Order1 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order1, {partial: true}),
        },
      },
    })
    order: Partial<Order1>,
    @param.query.object('where', getWhereSchemaFor(Order1)) where?: Where<Order1>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers1/{id}/orders1', {
    responses: {
      '200': {
        description: 'Customer1.Order1 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order1)) where?: Where<Order1>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
