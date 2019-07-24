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
  Customer17,
  Order17,
} from '../models';
import {Customer17Repository} from '../repositories';

export class Customer17Order17Controller {
  constructor(
    @repository(Customer17Repository) protected customerRepository: Customer17Repository,
  ) { }

  @get('/customers17/{id}/orders17', {
    responses: {
      '200': {
        description: 'Array of Order17\'s belonging to Customer17',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order17 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order17>,
  ): Promise<Order17[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers17/{id}/orders17', {
    responses: {
      '200': {
        description: 'Customer17 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order17 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer17.prototype.id,
    @requestBody() order: Order17,
  ): Promise<Order17> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers17/{id}/orders17', {
    responses: {
      '200': {
        description: 'Customer17.Order17 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order17, {partial: true}),
        },
      },
    })
    order: Partial<Order17>,
    @param.query.object('where', getWhereSchemaFor(Order17)) where?: Where<Order17>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers17/{id}/orders17', {
    responses: {
      '200': {
        description: 'Customer17.Order17 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order17)) where?: Where<Order17>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
