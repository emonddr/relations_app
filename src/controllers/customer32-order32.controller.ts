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
  Customer32,
  Order32,
} from '../models';
import {Customer32Repository} from '../repositories';

export class Customer32Order32Controller {
  constructor(
    @repository(Customer32Repository) protected customerRepository: Customer32Repository,
  ) { }

  @get('/customers32/{id}/orders32', {
    responses: {
      '200': {
        description: 'Array of Order32\'s belonging to Customer32',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order32 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order32>,
  ): Promise<Order32[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers32/{id}/orders32', {
    responses: {
      '200': {
        description: 'Customer32 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order32 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer32.prototype.id,
    @requestBody() order: Order32,
  ): Promise<Order32> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers32/{id}/orders32', {
    responses: {
      '200': {
        description: 'Customer32.Order32 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order32, {partial: true}),
        },
      },
    })
    order: Partial<Order32>,
    @param.query.object('where', getWhereSchemaFor(Order32)) where?: Where<Order32>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers32/{id}/orders32', {
    responses: {
      '200': {
        description: 'Customer32.Order32 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order32)) where?: Where<Order32>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
