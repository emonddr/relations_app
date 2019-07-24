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
import {Order34} from '../models';
import {Order34Repository} from '../repositories';

export class Order34Controller {
  constructor(
    @repository(Order34Repository)
    public orderRepository: Order34Repository,
  ) {}

  @post('/orders34', {
    responses: {
      '200': {
        description: 'Order34 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order34}}},
      },
    },
  })
  async create(@requestBody() order: Order34): Promise<Order34> {
    return await this.orderRepository.create(order);
  }

  @get('/orders34/count', {
    responses: {
      '200': {
        description: 'Order34 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order34)) where?: Where<Order34>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders34', {
    responses: {
      '200': {
        description: 'Array of Order34 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order34}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order34)) filter?: Filter<Order34>,
  ): Promise<Order34[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders34', {
    responses: {
      '200': {
        description: 'Order34 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order34, {partial: true}),
        },
      },
    })
    order: Order34,
    @param.query.object('where', getWhereSchemaFor(Order34)) where?: Where<Order34>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders34/{id}', {
    responses: {
      '200': {
        description: 'Order34 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order34}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order34> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders34/{id}', {
    responses: {
      '204': {
        description: 'Order34 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order34, {partial: true}),
        },
      },
    })
    order: Order34,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders34/{id}', {
    responses: {
      '204': {
        description: 'Order34 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order34,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders34/{id}', {
    responses: {
      '204': {
        description: 'Order34 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
