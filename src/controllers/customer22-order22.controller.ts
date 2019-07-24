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
  Customer22,
  Order22,
} from '../models';
import {Customer22Repository} from '../repositories';

export class Customer22Order22Controller {
  constructor(
    @repository(Customer22Repository) protected customerRepository: Customer22Repository,
  ) { }

  @get('/customers22/{id}/orders22', {
    responses: {
      '200': {
        description: 'Array of Order22\'s belonging to Customer22',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order22 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order22>,
  ): Promise<Order22[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers22/{id}/orders22', {
    responses: {
      '200': {
        description: 'Customer22 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order22 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer22.prototype.id,
    @requestBody() order: Order22,
  ): Promise<Order22> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers22/{id}/orders22', {
    responses: {
      '200': {
        description: 'Customer22.Order22 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order22, {partial: true}),
        },
      },
    })
    order: Partial<Order22>,
    @param.query.object('where', getWhereSchemaFor(Order22)) where?: Where<Order22>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers22/{id}/orders22', {
    responses: {
      '200': {
        description: 'Customer22.Order22 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order22)) where?: Where<Order22>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
