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
  Customer9,
  Order9,
} from '../models';
import {Customer9Repository} from '../repositories';

export class Customer9Order9Controller {
  constructor(
    @repository(Customer9Repository) protected customerRepository: Customer9Repository,
  ) { }

  @get('/customers9/{id}/orders9', {
    responses: {
      '200': {
        description: 'Array of Order9\'s belonging to Customer9',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order9 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order9>,
  ): Promise<Order9[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers9/{id}/orders9', {
    responses: {
      '200': {
        description: 'Customer9 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order9 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer9.prototype.id,
    @requestBody() order: Order9,
  ): Promise<Order9> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers9/{id}/orders9', {
    responses: {
      '200': {
        description: 'Customer9.Order9 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order9, {partial: true}),
        },
      },
    })
    order: Partial<Order9>,
    @param.query.object('where', getWhereSchemaFor(Order9)) where?: Where<Order9>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers9/{id}/orders9', {
    responses: {
      '200': {
        description: 'Customer9.Order9 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order9)) where?: Where<Order9>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
