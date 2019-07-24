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
import {Order31} from '../models';
import {Order31Repository} from '../repositories';

export class Order31Controller {
  constructor(
    @repository(Order31Repository)
    public orderRepository: Order31Repository,
  ) {}

  @post('/orders31', {
    responses: {
      '200': {
        description: 'Order31 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order31}}},
      },
    },
  })
  async create(@requestBody() order: Order31): Promise<Order31> {
    return await this.orderRepository.create(order);
  }

  @get('/orders31/count', {
    responses: {
      '200': {
        description: 'Order31 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order31)) where?: Where<Order31>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders31', {
    responses: {
      '200': {
        description: 'Array of Order31 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order31}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order31)) filter?: Filter<Order31>,
  ): Promise<Order31[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders31', {
    responses: {
      '200': {
        description: 'Order31 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order31, {partial: true}),
        },
      },
    })
    order: Order31,
    @param.query.object('where', getWhereSchemaFor(Order31)) where?: Where<Order31>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders31/{id}', {
    responses: {
      '200': {
        description: 'Order31 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order31}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order31> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders31/{id}', {
    responses: {
      '204': {
        description: 'Order31 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order31, {partial: true}),
        },
      },
    })
    order: Order31,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders31/{id}', {
    responses: {
      '204': {
        description: 'Order31 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order31,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders31/{id}', {
    responses: {
      '204': {
        description: 'Order31 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
