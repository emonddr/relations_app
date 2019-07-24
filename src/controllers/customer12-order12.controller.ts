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
  Customer12,
  Order12,
} from '../models';
import {Customer12Repository} from '../repositories';

export class Customer12Order12Controller {
  constructor(
    @repository(Customer12Repository) protected customerRepository: Customer12Repository,
  ) { }

  @get('/customers12/{id}/orders12', {
    responses: {
      '200': {
        description: 'Array of Order12\'s belonging to Customer12',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order12 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order12>,
  ): Promise<Order12[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers12/{id}/orders12', {
    responses: {
      '200': {
        description: 'Customer12 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order12 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer12.prototype.id,
    @requestBody() order: Order12,
  ): Promise<Order12> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers12/{id}/orders12', {
    responses: {
      '200': {
        description: 'Customer12.Order12 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order12, {partial: true}),
        },
      },
    })
    order: Partial<Order12>,
    @param.query.object('where', getWhereSchemaFor(Order12)) where?: Where<Order12>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers12/{id}/orders12', {
    responses: {
      '200': {
        description: 'Customer12.Order12 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order12)) where?: Where<Order12>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
