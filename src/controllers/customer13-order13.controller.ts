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
  Customer13,
  Order13,
} from '../models';
import {Customer13Repository} from '../repositories';

export class Customer13Order13Controller {
  constructor(
    @repository(Customer13Repository) protected customerRepository: Customer13Repository,
  ) { }

  @get('/customers13/{id}/orders13', {
    responses: {
      '200': {
        description: 'Array of Order13\'s belonging to Customer13',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order13 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order13>,
  ): Promise<Order13[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers13/{id}/orders13', {
    responses: {
      '200': {
        description: 'Customer13 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order13 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer13.prototype.id,
    @requestBody() order: Order13,
  ): Promise<Order13> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers13/{id}/orders13', {
    responses: {
      '200': {
        description: 'Customer13.Order13 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order13, {partial: true}),
        },
      },
    })
    order: Partial<Order13>,
    @param.query.object('where', getWhereSchemaFor(Order13)) where?: Where<Order13>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers13/{id}/orders13', {
    responses: {
      '200': {
        description: 'Customer13.Order13 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order13)) where?: Where<Order13>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
