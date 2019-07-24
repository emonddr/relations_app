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
import {Order23} from '../models';
import {Order23Repository} from '../repositories';

export class Order23Controller {
  constructor(
    @repository(Order23Repository)
    public orderRepository: Order23Repository,
  ) {}

  @post('/orders23', {
    responses: {
      '200': {
        description: 'Order23 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order23}}},
      },
    },
  })
  async create(@requestBody() order: Order23): Promise<Order23> {
    return await this.orderRepository.create(order);
  }

  @get('/orders23/count', {
    responses: {
      '200': {
        description: 'Order23 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order23)) where?: Where<Order23>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders23', {
    responses: {
      '200': {
        description: 'Array of Order23 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order23}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order23)) filter?: Filter<Order23>,
  ): Promise<Order23[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders23', {
    responses: {
      '200': {
        description: 'Order23 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order23, {partial: true}),
        },
      },
    })
    order: Order23,
    @param.query.object('where', getWhereSchemaFor(Order23)) where?: Where<Order23>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders23/{id}', {
    responses: {
      '200': {
        description: 'Order23 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order23}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order23> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders23/{id}', {
    responses: {
      '204': {
        description: 'Order23 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order23, {partial: true}),
        },
      },
    })
    order: Order23,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders23/{id}', {
    responses: {
      '204': {
        description: 'Order23 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order23,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders23/{id}', {
    responses: {
      '204': {
        description: 'Order23 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
