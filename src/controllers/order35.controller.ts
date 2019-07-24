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
import {Order35} from '../models';
import {Order35Repository} from '../repositories';

export class Order35Controller {
  constructor(
    @repository(Order35Repository)
    public orderRepository: Order35Repository,
  ) {}

  @post('/orders35', {
    responses: {
      '200': {
        description: 'Order35 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order35}}},
      },
    },
  })
  async create(@requestBody() order: Order35): Promise<Order35> {
    return await this.orderRepository.create(order);
  }

  @get('/orders35/count', {
    responses: {
      '200': {
        description: 'Order35 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order35)) where?: Where<Order35>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders35', {
    responses: {
      '200': {
        description: 'Array of Order35 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order35}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order35)) filter?: Filter<Order35>,
  ): Promise<Order35[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders35', {
    responses: {
      '200': {
        description: 'Order35 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order35, {partial: true}),
        },
      },
    })
    order: Order35,
    @param.query.object('where', getWhereSchemaFor(Order35)) where?: Where<Order35>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders35/{id}', {
    responses: {
      '200': {
        description: 'Order35 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order35}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order35> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders35/{id}', {
    responses: {
      '204': {
        description: 'Order35 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order35, {partial: true}),
        },
      },
    })
    order: Order35,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders35/{id}', {
    responses: {
      '204': {
        description: 'Order35 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order35,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders35/{id}', {
    responses: {
      '204': {
        description: 'Order35 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
