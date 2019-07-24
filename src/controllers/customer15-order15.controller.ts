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
  Customer15,
  Order15,
} from '../models';
import {Customer15Repository} from '../repositories';

export class Customer15Order15Controller {
  constructor(
    @repository(Customer15Repository) protected customerRepository: Customer15Repository,
  ) { }

  @get('/customers15/{id}/orders15', {
    responses: {
      '200': {
        description: 'Array of Order15\'s belonging to Customer15',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order15 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order15>,
  ): Promise<Order15[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers15/{id}/orders15', {
    responses: {
      '200': {
        description: 'Customer15 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order15 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer15.prototype.id,
    @requestBody() order: Order15,
  ): Promise<Order15> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers15/{id}/orders15', {
    responses: {
      '200': {
        description: 'Customer15.Order15 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order15, {partial: true}),
        },
      },
    })
    order: Partial<Order15>,
    @param.query.object('where', getWhereSchemaFor(Order15)) where?: Where<Order15>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers15/{id}/orders15', {
    responses: {
      '200': {
        description: 'Customer15.Order15 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order15)) where?: Where<Order15>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
