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
  Customer31,
  Order31,
} from '../models';
import {Customer31Repository} from '../repositories';

export class Customer31Order31Controller {
  constructor(
    @repository(Customer31Repository) protected customerRepository: Customer31Repository,
  ) { }

  @get('/customers31/{id}/orders31', {
    responses: {
      '200': {
        description: 'Array of Order31\'s belonging to Customer31',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order31 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order31>,
  ): Promise<Order31[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers31/{id}/orders31', {
    responses: {
      '200': {
        description: 'Customer31 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order31 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer31.prototype.id,
    @requestBody() order: Order31,
  ): Promise<Order31> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers31/{id}/orders31', {
    responses: {
      '200': {
        description: 'Customer31.Order31 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order31, {partial: true}),
        },
      },
    })
    order: Partial<Order31>,
    @param.query.object('where', getWhereSchemaFor(Order31)) where?: Where<Order31>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers31/{id}/orders31', {
    responses: {
      '200': {
        description: 'Customer31.Order31 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order31)) where?: Where<Order31>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
