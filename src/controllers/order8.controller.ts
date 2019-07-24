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
import {Order8} from '../models';
import {Order8Repository} from '../repositories';

export class Order8Controller {
  constructor(
    @repository(Order8Repository)
    public orderRepository: Order8Repository,
  ) {}

  @post('/orders8', {
    responses: {
      '200': {
        description: 'Order8 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order8}}},
      },
    },
  })
  async create(@requestBody() order: Order8): Promise<Order8> {
    return await this.orderRepository.create(order);
  }

  @get('/orders8/count', {
    responses: {
      '200': {
        description: 'Order8 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order8)) where?: Where<Order8>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders8', {
    responses: {
      '200': {
        description: 'Array of Order8 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order8}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order8)) filter?: Filter<Order8>,
  ): Promise<Order8[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders8', {
    responses: {
      '200': {
        description: 'Order8 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order8, {partial: true}),
        },
      },
    })
    order: Order8,
    @param.query.object('where', getWhereSchemaFor(Order8)) where?: Where<Order8>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders8/{id}', {
    responses: {
      '200': {
        description: 'Order8 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order8}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order8> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders8/{id}', {
    responses: {
      '204': {
        description: 'Order8 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order8, {partial: true}),
        },
      },
    })
    order: Order8,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders8/{id}', {
    responses: {
      '204': {
        description: 'Order8 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order8,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders8/{id}', {
    responses: {
      '204': {
        description: 'Order8 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
