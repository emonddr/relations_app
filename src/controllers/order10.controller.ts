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
import {Order10} from '../models';
import {Order10Repository} from '../repositories';

export class Order10Controller {
  constructor(
    @repository(Order10Repository)
    public orderRepository: Order10Repository,
  ) {}

  @post('/orders10', {
    responses: {
      '200': {
        description: 'Order10 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order10}}},
      },
    },
  })
  async create(@requestBody() order: Order10): Promise<Order10> {
    return await this.orderRepository.create(order);
  }

  @get('/orders10/count', {
    responses: {
      '200': {
        description: 'Order10 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order10)) where?: Where<Order10>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders10', {
    responses: {
      '200': {
        description: 'Array of Order10 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order10}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order10)) filter?: Filter<Order10>,
  ): Promise<Order10[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders10', {
    responses: {
      '200': {
        description: 'Order10 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order10, {partial: true}),
        },
      },
    })
    order: Order10,
    @param.query.object('where', getWhereSchemaFor(Order10)) where?: Where<Order10>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders10/{id}', {
    responses: {
      '200': {
        description: 'Order10 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order10}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order10> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders10/{id}', {
    responses: {
      '204': {
        description: 'Order10 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order10, {partial: true}),
        },
      },
    })
    order: Order10,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders10/{id}', {
    responses: {
      '204': {
        description: 'Order10 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order10,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders10/{id}', {
    responses: {
      '204': {
        description: 'Order10 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
