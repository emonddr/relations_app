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
  Customer23,
  Order23,
} from '../models';
import {Customer23Repository} from '../repositories';

export class Customer23Order23Controller {
  constructor(
    @repository(Customer23Repository) protected customerRepository: Customer23Repository,
  ) { }

  @get('/customers23/{id}/orders23', {
    responses: {
      '200': {
        description: 'Array of Order23\'s belonging to Customer23',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order23 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order23>,
  ): Promise<Order23[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers23/{id}/orders23', {
    responses: {
      '200': {
        description: 'Customer23 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order23 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer23.prototype.id,
    @requestBody() order: Order23,
  ): Promise<Order23> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers23/{id}/orders23', {
    responses: {
      '200': {
        description: 'Customer23.Order23 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order23, {partial: true}),
        },
      },
    })
    order: Partial<Order23>,
    @param.query.object('where', getWhereSchemaFor(Order23)) where?: Where<Order23>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers23/{id}/orders23', {
    responses: {
      '200': {
        description: 'Customer23.Order23 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order23)) where?: Where<Order23>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
