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
  Customer5,
  Order5,
} from '../models';
import {Customer5Repository} from '../repositories';

export class Customer5Order5Controller {
  constructor(
    @repository(Customer5Repository) protected customerRepository: Customer5Repository,
  ) { }

  @get('/customers5/{id}/orders5', {
    responses: {
      '200': {
        description: 'Array of Order5\'s belonging to Customer5',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order5 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order5>,
  ): Promise<Order5[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers5/{id}/orders5', {
    responses: {
      '200': {
        description: 'Customer5 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order5 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer5.prototype.id,
    @requestBody() order: Order5,
  ): Promise<Order5> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers5/{id}/orders5', {
    responses: {
      '200': {
        description: 'Customer5.Order5 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order5, {partial: true}),
        },
      },
    })
    order: Partial<Order5>,
    @param.query.object('where', getWhereSchemaFor(Order5)) where?: Where<Order5>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers5/{id}/orders5', {
    responses: {
      '200': {
        description: 'Customer5.Order5 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order5)) where?: Where<Order5>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
