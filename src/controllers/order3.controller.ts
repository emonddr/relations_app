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
import {Order3} from '../models';
import {Order3Repository} from '../repositories';

export class Order3Controller {
  constructor(
    @repository(Order3Repository)
    public orderRepository: Order3Repository,
  ) {}

  @post('/orders3', {
    responses: {
      '200': {
        description: 'Order3 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order3}}},
      },
    },
  })
  async create(@requestBody() order: Order3): Promise<Order3> {
    return await this.orderRepository.create(order);
  }

  @get('/orders3/count', {
    responses: {
      '200': {
        description: 'Order3 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order3)) where?: Where<Order3>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders3', {
    responses: {
      '200': {
        description: 'Array of Order3 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order3}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order3)) filter?: Filter<Order3>,
  ): Promise<Order3[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders3', {
    responses: {
      '200': {
        description: 'Order3 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order3, {partial: true}),
        },
      },
    })
    order: Order3,
    @param.query.object('where', getWhereSchemaFor(Order3)) where?: Where<Order3>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders3/{id}', {
    responses: {
      '200': {
        description: 'Order3 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order3}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order3> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders3/{id}', {
    responses: {
      '204': {
        description: 'Order3 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order3, {partial: true}),
        },
      },
    })
    order: Order3,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders3/{id}', {
    responses: {
      '204': {
        description: 'Order3 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order3,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders3/{id}', {
    responses: {
      '204': {
        description: 'Order3 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
