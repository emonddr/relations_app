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
  Customer33,
  Order33,
} from '../models';
import {Customer33Repository} from '../repositories';

export class Customer33Order33Controller {
  constructor(
    @repository(Customer33Repository) protected customerRepository: Customer33Repository,
  ) { }

  @get('/customers33/{id}/orders33', {
    responses: {
      '200': {
        description: 'Array of Order33\'s belonging to Customer33',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order33 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order33>,
  ): Promise<Order33[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers33/{id}/orders33', {
    responses: {
      '200': {
        description: 'Customer33 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order33 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer33.prototype.id,
    @requestBody() order: Order33,
  ): Promise<Order33> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers33/{id}/orders33', {
    responses: {
      '200': {
        description: 'Customer33.Order33 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order33, {partial: true}),
        },
      },
    })
    order: Partial<Order33>,
    @param.query.object('where', getWhereSchemaFor(Order33)) where?: Where<Order33>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers33/{id}/orders33', {
    responses: {
      '200': {
        description: 'Customer33.Order33 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order33)) where?: Where<Order33>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
