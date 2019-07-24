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
  Customer27,
  Order27,
} from '../models';
import {Customer27Repository} from '../repositories';

export class Customer27Order27Controller {
  constructor(
    @repository(Customer27Repository) protected customerRepository: Customer27Repository,
  ) { }

  @get('/customers27/{id}/orders27', {
    responses: {
      '200': {
        description: 'Array of Order27\'s belonging to Customer27',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order27 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order27>,
  ): Promise<Order27[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers27/{id}/orders27', {
    responses: {
      '200': {
        description: 'Customer27 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order27 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer27.prototype.id,
    @requestBody() order: Order27,
  ): Promise<Order27> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers27/{id}/orders27', {
    responses: {
      '200': {
        description: 'Customer27.Order27 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order27, {partial: true}),
        },
      },
    })
    order: Partial<Order27>,
    @param.query.object('where', getWhereSchemaFor(Order27)) where?: Where<Order27>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers27/{id}/orders27', {
    responses: {
      '200': {
        description: 'Customer27.Order27 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order27)) where?: Where<Order27>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
