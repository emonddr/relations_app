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
  Customer6,
  Order6,
} from '../models';
import {Customer6Repository} from '../repositories';

export class Customer6Order6Controller {
  constructor(
    @repository(Customer6Repository) protected customerRepository: Customer6Repository,
  ) { }

  @get('/customers6/{id}/orders6', {
    responses: {
      '200': {
        description: 'Array of Order6\'s belonging to Customer6',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order6 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order6>,
  ): Promise<Order6[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers6/{id}/orders6', {
    responses: {
      '200': {
        description: 'Customer6 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order6 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer6.prototype.id,
    @requestBody() order: Order6,
  ): Promise<Order6> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers6/{id}/orders6', {
    responses: {
      '200': {
        description: 'Customer6.Order6 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order6, {partial: true}),
        },
      },
    })
    order: Partial<Order6>,
    @param.query.object('where', getWhereSchemaFor(Order6)) where?: Where<Order6>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers6/{id}/orders6', {
    responses: {
      '200': {
        description: 'Customer6.Order6 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order6)) where?: Where<Order6>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
