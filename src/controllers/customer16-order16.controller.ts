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
  Customer16,
  Order16,
} from '../models';
import {Customer16Repository} from '../repositories';

export class Customer16Order16Controller {
  constructor(
    @repository(Customer16Repository) protected customerRepository: Customer16Repository,
  ) { }

  @get('/customers16/{id}/orders16', {
    responses: {
      '200': {
        description: 'Array of Order16\'s belonging to Customer16',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Order16 } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order16>,
  ): Promise<Order16[]> {
    return await this.customerRepository.orders(id).find(filter);
  }

  @post('/customers16/{id}/orders16', {
    responses: {
      '200': {
        description: 'Customer16 model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Order16 } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer16.prototype.id,
    @requestBody() order: Order16,
  ): Promise<Order16> {
    return await this.customerRepository.orders(id).create(order);
  }

  @patch('/customers16/{id}/orders16', {
    responses: {
      '200': {
        description: 'Customer16.Order16 PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order16, {partial: true}),
        },
      },
    })
    order: Partial<Order16>,
    @param.query.object('where', getWhereSchemaFor(Order16)) where?: Where<Order16>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).patch(order, where);
  }

  @del('/customers16/{id}/orders16', {
    responses: {
      '200': {
        description: 'Customer16.Order16 DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order16)) where?: Where<Order16>,
  ): Promise<Count> {
    return await this.customerRepository.orders(id).delete(where);
  }
}
