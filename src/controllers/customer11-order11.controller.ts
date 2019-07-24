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
  Customer11,
  Order11,
} from '../models';
import {Customer11Repository} from '../repositories';

export class Customer11Order11Controller {
  constructor(
    @repository(Customer11Repository) protected customerRepository: Customer11Repository,
  ) { }

  @get('/customers11/{id}/orders11', {
    responses: {
      '200': {
        description: 'Array of Order11\'s belonging to Customer11',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order11 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order11>,
  ): Promise<Order11[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers11/{id}/orders11', {
    responses: {
      '200': {
        description: 'Customer11 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order11 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer11.prototype.id,
    @requestBody() order: Order11,
  ): Promise<Order11> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers11/{id}/orders11', {
    responses: {
      '200': {
        description: 'Customer11.Order11 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order11, {partial: true}),
        },
      },
    })
    order: Partial<Order11>,
    @param.query.object('where', getWhereSchemaFor(Order11)) where?: Where<Order11>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers11/{id}/orders11', {
    responses: {
      '200': {
        description: 'Customer11.Order11 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order11)) where?: Where<Order11>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
