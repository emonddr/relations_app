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
  Customer26,
  Order26,
} from '../models';
import {Customer26Repository} from '../repositories';

export class Customer26Order26Controller {
  constructor(
    @repository(Customer26Repository) protected customerRepository: Customer26Repository,
  ) { }

  @get('/customers26/{id}/orders26', {
    responses: {
      '200': {
        description: 'Array of Order26\'s belonging to Customer26',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order26 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order26>,
  ): Promise<Order26[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers26/{id}/orders26', {
    responses: {
      '200': {
        description: 'Customer26 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order26 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer26.prototype.id,
    @requestBody() order: Order26,
  ): Promise<Order26> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers26/{id}/orders26', {
    responses: {
      '200': {
        description: 'Customer26.Order26 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order26, {partial: true}),
        },
      },
    })
    order: Partial<Order26>,
    @param.query.object('where', getWhereSchemaFor(Order26)) where?: Where<Order26>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers26/{id}/orders26', {
    responses: {
      '200': {
        description: 'Customer26.Order26 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order26)) where?: Where<Order26>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
