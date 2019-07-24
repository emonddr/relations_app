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
import {Order9} from '../models';
import {Order9Repository} from '../repositories';

export class Order9Controller {
  constructor(
    @repository(Order9Repository)
    public orderRepository: Order9Repository,
  ) {}

  @post('/orders9', {
    responses: {
      '200': {
        description: 'Order9 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order9}}},
      },
    },
  })
  async create(@requestBody() order: Order9): Promise<Order9> {
    return await this.orderRepository.create(order);
  }

  @get('/orders9/count', {
    responses: {
      '200': {
        description: 'Order9 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order9)) where?: Where<Order9>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders9', {
    responses: {
      '200': {
        description: 'Array of Order9 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order9}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order9)) filter?: Filter<Order9>,
  ): Promise<Order9[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders9', {
    responses: {
      '200': {
        description: 'Order9 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order9, {partial: true}),
        },
      },
    })
    order: Order9,
    @param.query.object('where', getWhereSchemaFor(Order9)) where?: Where<Order9>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders9/{id}', {
    responses: {
      '200': {
        description: 'Order9 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order9}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order9> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders9/{id}', {
    responses: {
      '204': {
        description: 'Order9 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order9, {partial: true}),
        },
      },
    })
    order: Order9,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders9/{id}', {
    responses: {
      '204': {
        description: 'Order9 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order9,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders9/{id}', {
    responses: {
      '204': {
        description: 'Order9 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
