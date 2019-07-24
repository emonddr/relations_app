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
  Customer19,
  Order19,
} from '../models';
import {Customer19Repository} from '../repositories';

export class Customer19Order19Controller {
  constructor(
    @repository(Customer19Repository) protected customerRepository: Customer19Repository,
  ) { }

  @get('/customers19/{id}/orders19', {
    responses: {
      '200': {
        description: 'Array of Order19\'s belonging to Customer19',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order19 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order19>,
  ): Promise<Order19[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers19/{id}/orders19', {
    responses: {
      '200': {
        description: 'Customer19 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order19 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer19.prototype.id,
    @requestBody() order: Order19,
  ): Promise<Order19> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers19/{id}/orders19', {
    responses: {
      '200': {
        description: 'Customer19.Order19 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order19, {partial: true}),
        },
      },
    })
    order: Partial<Order19>,
    @param.query.object('where', getWhereSchemaFor(Order19)) where?: Where<Order19>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers19/{id}/orders19', {
    responses: {
      '200': {
        description: 'Customer19.Order19 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order19)) where?: Where<Order19>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
