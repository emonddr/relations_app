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
import {Order32} from '../models';
import {Order32Repository} from '../repositories';

export class Order32Controller {
  constructor(
    @repository(Order32Repository)
    public orderRepository: Order32Repository,
  ) {}

  @post('/orders32', {
    responses: {
      '200': {
        description: 'Order32 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order32}}},
      },
    },
  })
  async create(@requestBody() order: Order32): Promise<Order32> {
    return await this.orderRepository.create(order);
  }

  @get('/orders32/count', {
    responses: {
      '200': {
        description: 'Order32 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order32)) where?: Where<Order32>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders32', {
    responses: {
      '200': {
        description: 'Array of Order32 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order32}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order32)) filter?: Filter<Order32>,
  ): Promise<Order32[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders32', {
    responses: {
      '200': {
        description: 'Order32 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order32, {partial: true}),
        },
      },
    })
    order: Order32,
    @param.query.object('where', getWhereSchemaFor(Order32)) where?: Where<Order32>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders32/{id}', {
    responses: {
      '200': {
        description: 'Order32 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order32}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order32> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders32/{id}', {
    responses: {
      '204': {
        description: 'Order32 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order32, {partial: true}),
        },
      },
    })
    order: Order32,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders32/{id}', {
    responses: {
      '204': {
        description: 'Order32 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order32,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders32/{id}', {
    responses: {
      '204': {
        description: 'Order32 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
