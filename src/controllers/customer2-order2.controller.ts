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
  Customer2,
  Order2,
} from '../models';
import {Customer2Repository} from '../repositories';

export class Customer2Order2Controller {
  constructor(
    @repository(Customer2Repository) protected customerRepository: Customer2Repository,
  ) { }

  @get('/customers2/{id}/orders2', {
    responses: {
      '200': {
        description: 'Array of Order2\'s belonging to Customer2',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order2 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order2>,
  ): Promise<Order2[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers2/{id}/orders2', {
    responses: {
      '200': {
        description: 'Customer2 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order2 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer2.prototype.id,
    @requestBody() order: Order2,
  ): Promise<Order2> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers2/{id}/orders2', {
    responses: {
      '200': {
        description: 'Customer2.Order2 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order2, {partial: true}),
        },
      },
    })
    order: Partial<Order2>,
    @param.query.object('where', getWhereSchemaFor(Order2)) where?: Where<Order2>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers2/{id}/orders2', {
    responses: {
      '200': {
        description: 'Customer2.Order2 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order2)) where?: Where<Order2>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
