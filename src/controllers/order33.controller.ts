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
import {Order33} from '../models';
import {Order33Repository} from '../repositories';

export class Order33Controller {
  constructor(
    @repository(Order33Repository)
    public orderRepository: Order33Repository,
  ) {}

  @post('/orders33', {
    responses: {
      '200': {
        description: 'Order33 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order33}}},
      },
    },
  })
  async create(@requestBody() order: Order33): Promise<Order33> {
    return await this.orderRepository.create(order);
  }

  @get('/orders33/count', {
    responses: {
      '200': {
        description: 'Order33 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order33)) where?: Where<Order33>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders33', {
    responses: {
      '200': {
        description: 'Array of Order33 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order33}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order33)) filter?: Filter<Order33>,
  ): Promise<Order33[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders33', {
    responses: {
      '200': {
        description: 'Order33 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order33, {partial: true}),
        },
      },
    })
    order: Order33,
    @param.query.object('where', getWhereSchemaFor(Order33)) where?: Where<Order33>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders33/{id}', {
    responses: {
      '200': {
        description: 'Order33 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order33}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order33> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders33/{id}', {
    responses: {
      '204': {
        description: 'Order33 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order33, {partial: true}),
        },
      },
    })
    order: Order33,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders33/{id}', {
    responses: {
      '204': {
        description: 'Order33 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order33,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders33/{id}', {
    responses: {
      '204': {
        description: 'Order33 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
