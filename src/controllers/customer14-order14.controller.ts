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
  Customer14,
  Order14,
} from '../models';
import {Customer14Repository} from '../repositories';

export class Customer14Order14Controller {
  constructor(
    @repository(Customer14Repository) protected customerRepository: Customer14Repository,
  ) { }

  @get('/customers14/{id}/orders14', {
    responses: {
      '200': {
        description: 'Array of Order14\'s belonging to Customer14',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order14 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order14>,
  ): Promise<Order14[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers14/{id}/orders14', {
    responses: {
      '200': {
        description: 'Customer14 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order14 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer14.prototype.id,
    @requestBody() order: Order14,
  ): Promise<Order14> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers14/{id}/orders14', {
    responses: {
      '200': {
        description: 'Customer14.Order14 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order14, {partial: true}),
        },
      },
    })
    order: Partial<Order14>,
    @param.query.object('where', getWhereSchemaFor(Order14)) where?: Where<Order14>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers14/{id}/orders14', {
    responses: {
      '200': {
        description: 'Customer14.Order14 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order14)) where?: Where<Order14>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
