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
  Customer4,
  Order4,
} from '../models';
import {Customer4Repository} from '../repositories';

export class Customer4Order4Controller {
  constructor(
    @repository(Customer4Repository) protected customerRepository: Customer4Repository,
  ) { }

  @get('/customers4/{id}/orders4', {
    responses: {
      '200': {
        description: 'Array of Order4\'s belonging to Customer4',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order4 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order4>,
  ): Promise<Order4[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers4/{id}/orders4', {
    responses: {
      '200': {
        description: 'Customer4 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order4 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer4.prototype.id,
    @requestBody() order: Order4,
  ): Promise<Order4> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers4/{id}/orders4', {
    responses: {
      '200': {
        description: 'Customer4.Order4 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order4, {partial: true}),
        },
      },
    })
    order: Partial<Order4>,
    @param.query.object('where', getWhereSchemaFor(Order4)) where?: Where<Order4>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers4/{id}/orders4', {
    responses: {
      '200': {
        description: 'Customer4.Order4 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order4)) where?: Where<Order4>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
