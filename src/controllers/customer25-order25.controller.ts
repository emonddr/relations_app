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
  Customer25,
  Order25,
} from '../models';
import {Customer25Repository} from '../repositories';

export class Customer25Order25Controller {
  constructor(
    @repository(Customer25Repository) protected customerRepository: Customer25Repository,
  ) { }

  @get('/customers25/{id}/orders25', {
    responses: {
      '200': {
        description: 'Array of Order25\'s belonging to Customer25',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order25 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order25>,
  ): Promise<Order25[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers25/{id}/orders25', {
    responses: {
      '200': {
        description: 'Customer25 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order25 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer25.prototype.id,
    @requestBody() order: Order25,
  ): Promise<Order25> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers25/{id}/orders25', {
    responses: {
      '200': {
        description: 'Customer25.Order25 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order25, {partial: true}),
        },
      },
    })
    order: Partial<Order25>,
    @param.query.object('where', getWhereSchemaFor(Order25)) where?: Where<Order25>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers25/{id}/orders25', {
    responses: {
      '200': {
        description: 'Customer25.Order25 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order25)) where?: Where<Order25>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
