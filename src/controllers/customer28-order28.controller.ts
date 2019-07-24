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
  Customer28,
  Order28,
} from '../models';
import {Customer28Repository} from '../repositories';

export class Customer28Order28Controller {
  constructor(
    @repository(Customer28Repository) protected customerRepository: Customer28Repository,
  ) { }

  @get('/customers28/{id}/orders28', {
    responses: {
      '200': {
        description: 'Array of Order28\'s belonging to Customer28',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order28 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order28>,
  ): Promise<Order28[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers28/{id}/orders28', {
    responses: {
      '200': {
        description: 'Customer28 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order28 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer28.prototype.id,
    @requestBody() order: Order28,
  ): Promise<Order28> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers28/{id}/orders28', {
    responses: {
      '200': {
        description: 'Customer28.Order28 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order28, {partial: true}),
        },
      },
    })
    order: Partial<Order28>,
    @param.query.object('where', getWhereSchemaFor(Order28)) where?: Where<Order28>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers28/{id}/orders28', {
    responses: {
      '200': {
        description: 'Customer28.Order28 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order28)) where?: Where<Order28>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
