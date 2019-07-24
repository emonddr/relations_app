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
  Customer35,
  Order35,
} from '../models';
import {Customer35Repository} from '../repositories';

export class Customer35Order35Controller {
  constructor(
    @repository(Customer35Repository) protected customerRepository: Customer35Repository,
  ) { }

  @get('/customers35/{id}/orders35', {
    responses: {
      '200': {
        description: 'Array of Order35\'s belonging to Customer35',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order35 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order35>,
  ): Promise<Order35[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers35/{id}/orders35', {
    responses: {
      '200': {
        description: 'Customer35 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order35 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer35.prototype.id,
    @requestBody() order: Order35,
  ): Promise<Order35> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers35/{id}/orders35', {
    responses: {
      '200': {
        description: 'Customer35.Order35 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order35, {partial: true}),
        },
      },
    })
    order: Partial<Order35>,
    @param.query.object('where', getWhereSchemaFor(Order35)) where?: Where<Order35>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers35/{id}/orders35', {
    responses: {
      '200': {
        description: 'Customer35.Order35 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order35)) where?: Where<Order35>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
