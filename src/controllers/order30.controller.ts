import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Order30} from '../models';
import {Order30Repository} from '../repositories';

export class Order30Controller {
  constructor(
    @repository(Order30Repository)
    public orderRepository: Order30Repository,
  ) {}

  @post('/orders30', {
    responses: {
      '200': {
        description: 'Order30 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order30}}},
      },
    },
  })
  async create(@requestBody() order: Order30): Promise<Order30> {
    return await this.orderRepository.create(order);
  }

  @get('/orders30/count', {
    responses: {
      '200': {
        description: 'Order30 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order30)) where?: Where<Order30>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders30', {
    responses: {
      '200': {
        description: 'Array of Order30 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order30}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order30)) filter?: Filter<Order30>,
  ): Promise<Order30[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders30', {
    responses: {
      '200': {
        description: 'Order30 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order30, {partial: true}),
        },
      },
    })
    order: Order30,
    @param.query.object('where', getWhereSchemaFor(Order30)) where?: Where<Order30>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders30/{id}', {
    responses: {
      '200': {
        description: 'Order30 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order30}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order30> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders30/{id}', {
    responses: {
      '204': {
        description: 'Order30 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order30, {partial: true}),
        },
      },
    })
    order: Order30,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders30/{id}', {
    responses: {
      '204': {
        description: 'Order30 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order30,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders30/{id}', {
    responses: {
      '204': {
        description: 'Order30 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
