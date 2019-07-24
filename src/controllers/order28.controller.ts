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
import {Order28} from '../models';
import {Order28Repository} from '../repositories';

export class Order28Controller {
  constructor(
    @repository(Order28Repository)
    public orderRepository: Order28Repository,
  ) {}

  @post('/orders28', {
    responses: {
      '200': {
        description: 'Order28 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order28}}},
      },
    },
  })
  async create(@requestBody() order: Order28): Promise<Order28> {
    return await this.orderRepository.create(order);
  }

  @get('/orders28/count', {
    responses: {
      '200': {
        description: 'Order28 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order28)) where?: Where<Order28>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders28', {
    responses: {
      '200': {
        description: 'Array of Order28 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order28}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order28)) filter?: Filter<Order28>,
  ): Promise<Order28[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders28', {
    responses: {
      '200': {
        description: 'Order28 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order28, {partial: true}),
        },
      },
    })
    order: Order28,
    @param.query.object('where', getWhereSchemaFor(Order28)) where?: Where<Order28>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders28/{id}', {
    responses: {
      '200': {
        description: 'Order28 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order28}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order28> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders28/{id}', {
    responses: {
      '204': {
        description: 'Order28 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order28, {partial: true}),
        },
      },
    })
    order: Order28,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders28/{id}', {
    responses: {
      '204': {
        description: 'Order28 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order28,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders28/{id}', {
    responses: {
      '204': {
        description: 'Order28 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
