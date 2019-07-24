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
import {Order18} from '../models';
import {Order18Repository} from '../repositories';

export class Order18Controller {
  constructor(
    @repository(Order18Repository)
    public orderRepository: Order18Repository,
  ) {}

  @post('/orders18', {
    responses: {
      '200': {
        description: 'Order18 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order18}}},
      },
    },
  })
  async create(@requestBody() order: Order18): Promise<Order18> {
    return await this.orderRepository.create(order);
  }

  @get('/orders18/count', {
    responses: {
      '200': {
        description: 'Order18 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order18)) where?: Where<Order18>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders18', {
    responses: {
      '200': {
        description: 'Array of Order18 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order18}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order18)) filter?: Filter<Order18>,
  ): Promise<Order18[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders18', {
    responses: {
      '200': {
        description: 'Order18 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order18, {partial: true}),
        },
      },
    })
    order: Order18,
    @param.query.object('where', getWhereSchemaFor(Order18)) where?: Where<Order18>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders18/{id}', {
    responses: {
      '200': {
        description: 'Order18 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order18}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order18> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders18/{id}', {
    responses: {
      '204': {
        description: 'Order18 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order18, {partial: true}),
        },
      },
    })
    order: Order18,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders18/{id}', {
    responses: {
      '204': {
        description: 'Order18 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order18,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders18/{id}', {
    responses: {
      '204': {
        description: 'Order18 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
