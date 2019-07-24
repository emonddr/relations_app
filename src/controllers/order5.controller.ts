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
import {Order5} from '../models';
import {Order5Repository} from '../repositories';

export class Order5Controller {
  constructor(
    @repository(Order5Repository)
    public orderRepository: Order5Repository,
  ) {}

  @post('/orders5', {
    responses: {
      '200': {
        description: 'Order5 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order5}}},
      },
    },
  })
  async create(@requestBody() order: Order5): Promise<Order5> {
    return await this.orderRepository.create(order);
  }

  @get('/orders5/count', {
    responses: {
      '200': {
        description: 'Order5 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order5)) where?: Where<Order5>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders5', {
    responses: {
      '200': {
        description: 'Array of Order5 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order5}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order5)) filter?: Filter<Order5>,
  ): Promise<Order5[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders5', {
    responses: {
      '200': {
        description: 'Order5 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order5, {partial: true}),
        },
      },
    })
    order: Order5,
    @param.query.object('where', getWhereSchemaFor(Order5)) where?: Where<Order5>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders5/{id}', {
    responses: {
      '200': {
        description: 'Order5 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order5}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order5> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders5/{id}', {
    responses: {
      '204': {
        description: 'Order5 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order5, {partial: true}),
        },
      },
    })
    order: Order5,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders5/{id}', {
    responses: {
      '204': {
        description: 'Order5 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order5,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders5/{id}', {
    responses: {
      '204': {
        description: 'Order5 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
