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
import {Order6} from '../models';
import {Order6Repository} from '../repositories';

export class Order6Controller {
  constructor(
    @repository(Order6Repository)
    public orderRepository: Order6Repository,
  ) {}

  @post('/orders6', {
    responses: {
      '200': {
        description: 'Order6 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order6}}},
      },
    },
  })
  async create(@requestBody() order: Order6): Promise<Order6> {
    return await this.orderRepository.create(order);
  }

  @get('/orders6/count', {
    responses: {
      '200': {
        description: 'Order6 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order6)) where?: Where<Order6>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders6', {
    responses: {
      '200': {
        description: 'Array of Order6 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order6}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order6)) filter?: Filter<Order6>,
  ): Promise<Order6[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders6', {
    responses: {
      '200': {
        description: 'Order6 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order6, {partial: true}),
        },
      },
    })
    order: Order6,
    @param.query.object('where', getWhereSchemaFor(Order6)) where?: Where<Order6>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders6/{id}', {
    responses: {
      '200': {
        description: 'Order6 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order6}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order6> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders6/{id}', {
    responses: {
      '204': {
        description: 'Order6 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order6, {partial: true}),
        },
      },
    })
    order: Order6,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders6/{id}', {
    responses: {
      '204': {
        description: 'Order6 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order6,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders6/{id}', {
    responses: {
      '204': {
        description: 'Order6 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
