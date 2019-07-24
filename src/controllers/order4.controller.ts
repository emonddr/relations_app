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
import {Order4} from '../models';
import {Order4Repository} from '../repositories';

export class Order4Controller {
  constructor(
    @repository(Order4Repository)
    public orderRepository: Order4Repository,
  ) {}

  @post('/orders4', {
    responses: {
      '200': {
        description: 'Order4 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order4}}},
      },
    },
  })
  async create(@requestBody() order: Order4): Promise<Order4> {
    return await this.orderRepository.create(order);
  }

  @get('/orders4/count', {
    responses: {
      '200': {
        description: 'Order4 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order4)) where?: Where<Order4>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders4', {
    responses: {
      '200': {
        description: 'Array of Order4 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order4}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order4)) filter?: Filter<Order4>,
  ): Promise<Order4[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders4', {
    responses: {
      '200': {
        description: 'Order4 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order4, {partial: true}),
        },
      },
    })
    order: Order4,
    @param.query.object('where', getWhereSchemaFor(Order4)) where?: Where<Order4>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders4/{id}', {
    responses: {
      '200': {
        description: 'Order4 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order4}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order4> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders4/{id}', {
    responses: {
      '204': {
        description: 'Order4 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order4, {partial: true}),
        },
      },
    })
    order: Order4,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders4/{id}', {
    responses: {
      '204': {
        description: 'Order4 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order4,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders4/{id}', {
    responses: {
      '204': {
        description: 'Order4 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
