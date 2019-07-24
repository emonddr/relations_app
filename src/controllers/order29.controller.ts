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
import {Order29} from '../models';
import {Order29Repository} from '../repositories';

export class Order29Controller {
  constructor(
    @repository(Order29Repository)
    public orderRepository: Order29Repository,
  ) {}

  @post('/orders29', {
    responses: {
      '200': {
        description: 'Order29 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order29}}},
      },
    },
  })
  async create(@requestBody() order: Order29): Promise<Order29> {
    return await this.orderRepository.create(order);
  }

  @get('/orders29/count', {
    responses: {
      '200': {
        description: 'Order29 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order29)) where?: Where<Order29>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders29', {
    responses: {
      '200': {
        description: 'Array of Order29 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order29}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order29)) filter?: Filter<Order29>,
  ): Promise<Order29[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders29', {
    responses: {
      '200': {
        description: 'Order29 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order29, {partial: true}),
        },
      },
    })
    order: Order29,
    @param.query.object('where', getWhereSchemaFor(Order29)) where?: Where<Order29>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders29/{id}', {
    responses: {
      '200': {
        description: 'Order29 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order29}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order29> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders29/{id}', {
    responses: {
      '204': {
        description: 'Order29 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order29, {partial: true}),
        },
      },
    })
    order: Order29,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders29/{id}', {
    responses: {
      '204': {
        description: 'Order29 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order29,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders29/{id}', {
    responses: {
      '204': {
        description: 'Order29 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
