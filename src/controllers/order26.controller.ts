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
import {Order26} from '../models';
import {Order26Repository} from '../repositories';

export class Order26Controller {
  constructor(
    @repository(Order26Repository)
    public orderRepository: Order26Repository,
  ) {}

  @post('/orders26', {
    responses: {
      '200': {
        description: 'Order26 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order26}}},
      },
    },
  })
  async create(@requestBody() order: Order26): Promise<Order26> {
    return await this.orderRepository.create(order);
  }

  @get('/orders26/count', {
    responses: {
      '200': {
        description: 'Order26 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order26)) where?: Where<Order26>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders26', {
    responses: {
      '200': {
        description: 'Array of Order26 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order26}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order26)) filter?: Filter<Order26>,
  ): Promise<Order26[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders26', {
    responses: {
      '200': {
        description: 'Order26 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order26, {partial: true}),
        },
      },
    })
    order: Order26,
    @param.query.object('where', getWhereSchemaFor(Order26)) where?: Where<Order26>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders26/{id}', {
    responses: {
      '200': {
        description: 'Order26 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order26}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order26> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders26/{id}', {
    responses: {
      '204': {
        description: 'Order26 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order26, {partial: true}),
        },
      },
    })
    order: Order26,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders26/{id}', {
    responses: {
      '204': {
        description: 'Order26 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order26,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders26/{id}', {
    responses: {
      '204': {
        description: 'Order26 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
