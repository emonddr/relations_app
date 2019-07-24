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
import {Order24} from '../models';
import {Order24Repository} from '../repositories';

export class Order24Controller {
  constructor(
    @repository(Order24Repository)
    public orderRepository: Order24Repository,
  ) {}

  @post('/orders24', {
    responses: {
      '200': {
        description: 'Order24 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order24}}},
      },
    },
  })
  async create(@requestBody() order: Order24): Promise<Order24> {
    return await this.orderRepository.create(order);
  }

  @get('/orders24/count', {
    responses: {
      '200': {
        description: 'Order24 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order24)) where?: Where<Order24>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders24', {
    responses: {
      '200': {
        description: 'Array of Order24 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order24}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order24)) filter?: Filter<Order24>,
  ): Promise<Order24[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders24', {
    responses: {
      '200': {
        description: 'Order24 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order24, {partial: true}),
        },
      },
    })
    order: Order24,
    @param.query.object('where', getWhereSchemaFor(Order24)) where?: Where<Order24>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders24/{id}', {
    responses: {
      '200': {
        description: 'Order24 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order24}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order24> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders24/{id}', {
    responses: {
      '204': {
        description: 'Order24 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order24, {partial: true}),
        },
      },
    })
    order: Order24,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders24/{id}', {
    responses: {
      '204': {
        description: 'Order24 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order24,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders24/{id}', {
    responses: {
      '204': {
        description: 'Order24 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
