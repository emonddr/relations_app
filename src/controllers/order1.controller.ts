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
import {Order1} from '../models';
import {Order1Repository} from '../repositories';

export class Order1Controller {
  constructor(
    @repository(Order1Repository)
    public orderRepository: Order1Repository,
  ) {}

  @post('/orders1', {
    responses: {
      '200': {
        description: 'Order1 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order1}}},
      },
    },
  })
  async create(@requestBody() order: Order1): Promise<Order1> {
    return await this.orderRepository.create(order);
  }

  @get('/orders1/count', {
    responses: {
      '200': {
        description: 'Order1 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order1)) where?: Where<Order1>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders1', {
    responses: {
      '200': {
        description: 'Array of Order1 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order1}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order1)) filter?: Filter<Order1>,
  ): Promise<Order1[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders1', {
    responses: {
      '200': {
        description: 'Order1 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order1, {partial: true}),
        },
      },
    })
    order: Order1,
    @param.query.object('where', getWhereSchemaFor(Order1)) where?: Where<Order1>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders1/{id}', {
    responses: {
      '200': {
        description: 'Order1 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order1}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order1> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders1/{id}', {
    responses: {
      '204': {
        description: 'Order1 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order1, {partial: true}),
        },
      },
    })
    order: Order1,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders1/{id}', {
    responses: {
      '204': {
        description: 'Order1 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order1,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders1/{id}', {
    responses: {
      '204': {
        description: 'Order1 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
