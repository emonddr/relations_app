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
  Customer8,
  Order8,
} from '../models';
import {Customer8Repository} from '../repositories';

export class Customer8Order8Controller {
  constructor(
    @repository(Customer8Repository) protected customerRepository: Customer8Repository,
  ) { }

  @get('/customers8/{id}/orders8', {
    responses: {
      '200': {
        description: 'Array of Order8\'s belonging to Customer8',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order8 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order8>,
  ): Promise<Order8[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers8/{id}/orders8', {
    responses: {
      '200': {
        description: 'Customer8 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order8 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer8.prototype.id,
    @requestBody() order: Order8,
  ): Promise<Order8> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers8/{id}/orders8', {
    responses: {
      '200': {
        description: 'Customer8.Order8 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order8, {partial: true}),
        },
      },
    })
    order: Partial<Order8>,
    @param.query.object('where', getWhereSchemaFor(Order8)) where?: Where<Order8>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers8/{id}/orders8', {
    responses: {
      '200': {
        description: 'Customer8.Order8 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order8)) where?: Where<Order8>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
