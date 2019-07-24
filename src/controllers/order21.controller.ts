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
import {Order21} from '../models';
import {Order21Repository} from '../repositories';

export class Order21Controller {
  constructor(
    @repository(Order21Repository)
    public orderRepository: Order21Repository,
  ) {}

  @post('/orders21', {
    responses: {
      '200': {
        description: 'Order21 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order21}}},
      },
    },
  })
  async create(@requestBody() order: Order21): Promise<Order21> {
    return await this.orderRepository.create(order);
  }

  @get('/orders21/count', {
    responses: {
      '200': {
        description: 'Order21 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order21)) where?: Where<Order21>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders21', {
    responses: {
      '200': {
        description: 'Array of Order21 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order21}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order21)) filter?: Filter<Order21>,
  ): Promise<Order21[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders21', {
    responses: {
      '200': {
        description: 'Order21 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order21, {partial: true}),
        },
      },
    })
    order: Order21,
    @param.query.object('where', getWhereSchemaFor(Order21)) where?: Where<Order21>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders21/{id}', {
    responses: {
      '200': {
        description: 'Order21 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order21}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order21> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders21/{id}', {
    responses: {
      '204': {
        description: 'Order21 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order21, {partial: true}),
        },
      },
    })
    order: Order21,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders21/{id}', {
    responses: {
      '204': {
        description: 'Order21 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order21,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders21/{id}', {
    responses: {
      '204': {
        description: 'Order21 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
