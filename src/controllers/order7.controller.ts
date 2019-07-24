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
import {Order7} from '../models';
import {Order7Repository} from '../repositories';

export class Order7Controller {
  constructor(
    @repository(Order7Repository)
    public orderRepository: Order7Repository,
  ) {}

  @post('/orders7', {
    responses: {
      '200': {
        description: 'Order7 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order7}}},
      },
    },
  })
  async create(@requestBody() order: Order7): Promise<Order7> {
    return await this.orderRepository.create(order);
  }

  @get('/orders7/count', {
    responses: {
      '200': {
        description: 'Order7 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order7)) where?: Where<Order7>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders7', {
    responses: {
      '200': {
        description: 'Array of Order7 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order7}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order7)) filter?: Filter<Order7>,
  ): Promise<Order7[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders7', {
    responses: {
      '200': {
        description: 'Order7 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order7, {partial: true}),
        },
      },
    })
    order: Order7,
    @param.query.object('where', getWhereSchemaFor(Order7)) where?: Where<Order7>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders7/{id}', {
    responses: {
      '200': {
        description: 'Order7 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order7}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order7> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders7/{id}', {
    responses: {
      '204': {
        description: 'Order7 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order7, {partial: true}),
        },
      },
    })
    order: Order7,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders7/{id}', {
    responses: {
      '204': {
        description: 'Order7 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order7,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders7/{id}', {
    responses: {
      '204': {
        description: 'Order7 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
