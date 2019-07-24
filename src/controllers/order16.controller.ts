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
import {Order16} from '../models';
import {Order16Repository} from '../repositories';

export class Order16Controller {
  constructor(
    @repository(Order16Repository)
    public orderRepository: Order16Repository,
  ) {}

  @post('/orders16', {
    responses: {
      '200': {
        description: 'Order16 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order16}}},
      },
    },
  })
  async create(@requestBody() order: Order16): Promise<Order16> {
    return await this.orderRepository.create(order);
  }

  @get('/orders16/count', {
    responses: {
      '200': {
        description: 'Order16 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order16)) where?: Where<Order16>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders16', {
    responses: {
      '200': {
        description: 'Array of Order16 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order16}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order16)) filter?: Filter<Order16>,
  ): Promise<Order16[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders16', {
    responses: {
      '200': {
        description: 'Order16 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order16, {partial: true}),
        },
      },
    })
    order: Order16,
    @param.query.object('where', getWhereSchemaFor(Order16)) where?: Where<Order16>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders16/{id}', {
    responses: {
      '200': {
        description: 'Order16 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order16}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order16> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders16/{id}', {
    responses: {
      '204': {
        description: 'Order16 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order16, {partial: true}),
        },
      },
    })
    order: Order16,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders16/{id}', {
    responses: {
      '204': {
        description: 'Order16 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order16,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders16/{id}', {
    responses: {
      '204': {
        description: 'Order16 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
