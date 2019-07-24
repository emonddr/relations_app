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
  Customer3,
  Order3,
} from '../models';
import {Customer3Repository} from '../repositories';

export class Customer3Order3Controller {
  constructor(
    @repository(Customer3Repository) protected customerRepository: Customer3Repository,
  ) { }

  @get('/customers3/{id}/orders3', {
    responses: {
      '200': {
        description: 'Array of Order3\'s belonging to Customer3',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order3 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order3>,
  ): Promise<Order3[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers3/{id}/orders3', {
    responses: {
      '200': {
        description: 'Customer3 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order3 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer3.prototype.id,
    @requestBody() order: Order3,
  ): Promise<Order3> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers3/{id}/orders3', {
    responses: {
      '200': {
        description: 'Customer3.Order3 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order3, {partial: true}),
        },
      },
    })
    order: Partial<Order3>,
    @param.query.object('where', getWhereSchemaFor(Order3)) where?: Where<Order3>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers3/{id}/orders3', {
    responses: {
      '200': {
        description: 'Customer3.Order3 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order3)) where?: Where<Order3>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
