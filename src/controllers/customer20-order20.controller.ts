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
  Customer20,
  Order20,
} from '../models';
import {Customer20Repository} from '../repositories';

export class Customer20Order20Controller {
  constructor(
    @repository(Customer20Repository) protected customerRepository: Customer20Repository,
  ) { }

  @get('/customers20/{id}/orders20', {
    responses: {
      '200': {
        description: 'Array of Order20\'s belonging to Customer20',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order20 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order20>,
  ): Promise<Order20[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers20/{id}/orders20', {
    responses: {
      '200': {
        description: 'Customer20 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order20 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer20.prototype.id,
    @requestBody() order: Order20,
  ): Promise<Order20> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers20/{id}/orders20', {
    responses: {
      '200': {
        description: 'Customer20.Order20 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order20, {partial: true}),
        },
      },
    })
    order: Partial<Order20>,
    @param.query.object('where', getWhereSchemaFor(Order20)) where?: Where<Order20>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers20/{id}/orders20', {
    responses: {
      '200': {
        description: 'Customer20.Order20 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order20)) where?: Where<Order20>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
