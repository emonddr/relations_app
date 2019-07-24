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
  Customer29,
  Order29,
} from '../models';
import {Customer29Repository} from '../repositories';

export class Customer29Order29Controller {
  constructor(
    @repository(Customer29Repository) protected customerRepository: Customer29Repository,
  ) { }

  @get('/customers29/{id}/orders29', {
    responses: {
      '200': {
        description: 'Array of Order29\'s belonging to Customer29',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order29 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order29>,
  ): Promise<Order29[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers29/{id}/orders29', {
    responses: {
      '200': {
        description: 'Customer29 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order29 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer29.prototype.id,
    @requestBody() order: Order29,
  ): Promise<Order29> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers29/{id}/orders29', {
    responses: {
      '200': {
        description: 'Customer29.Order29 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order29, {partial: true}),
        },
      },
    })
    order: Partial<Order29>,
    @param.query.object('where', getWhereSchemaFor(Order29)) where?: Where<Order29>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers29/{id}/orders29', {
    responses: {
      '200': {
        description: 'Customer29.Order29 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order29)) where?: Where<Order29>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
