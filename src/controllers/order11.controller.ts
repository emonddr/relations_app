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
import {Order11} from '../models';
import {Order11Repository} from '../repositories';

export class Order11Controller {
  constructor(
    @repository(Order11Repository)
    public orderRepository: Order11Repository,
  ) {}

  @post('/orders11', {
    responses: {
      '200': {
        description: 'Order11 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order11}}},
      },
    },
  })
  async create(@requestBody() order: Order11): Promise<Order11> {
    return await this.orderRepository.create(order);
  }

  @get('/orders11/count', {
    responses: {
      '200': {
        description: 'Order11 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order11)) where?: Where<Order11>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders11', {
    responses: {
      '200': {
        description: 'Array of Order11 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order11}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order11)) filter?: Filter<Order11>,
  ): Promise<Order11[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders11', {
    responses: {
      '200': {
        description: 'Order11 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order11, {partial: true}),
        },
      },
    })
    order: Order11,
    @param.query.object('where', getWhereSchemaFor(Order11)) where?: Where<Order11>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders11/{id}', {
    responses: {
      '200': {
        description: 'Order11 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order11}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order11> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders11/{id}', {
    responses: {
      '204': {
        description: 'Order11 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order11, {partial: true}),
        },
      },
    })
    order: Order11,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders11/{id}', {
    responses: {
      '204': {
        description: 'Order11 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order11,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders11/{id}', {
    responses: {
      '204': {
        description: 'Order11 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
