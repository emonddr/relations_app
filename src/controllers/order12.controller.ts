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
import {Order12} from '../models';
import {Order12Repository} from '../repositories';

export class Order12Controller {
  constructor(
    @repository(Order12Repository)
    public orderRepository: Order12Repository,
  ) {}

  @post('/orders12', {
    responses: {
      '200': {
        description: 'Order12 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order12}}},
      },
    },
  })
  async create(@requestBody() order: Order12): Promise<Order12> {
    return await this.orderRepository.create(order);
  }

  @get('/orders12/count', {
    responses: {
      '200': {
        description: 'Order12 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order12)) where?: Where<Order12>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders12', {
    responses: {
      '200': {
        description: 'Array of Order12 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order12}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order12)) filter?: Filter<Order12>,
  ): Promise<Order12[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders12', {
    responses: {
      '200': {
        description: 'Order12 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order12, {partial: true}),
        },
      },
    })
    order: Order12,
    @param.query.object('where', getWhereSchemaFor(Order12)) where?: Where<Order12>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders12/{id}', {
    responses: {
      '200': {
        description: 'Order12 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order12}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order12> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders12/{id}', {
    responses: {
      '204': {
        description: 'Order12 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order12, {partial: true}),
        },
      },
    })
    order: Order12,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders12/{id}', {
    responses: {
      '204': {
        description: 'Order12 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order12,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders12/{id}', {
    responses: {
      '204': {
        description: 'Order12 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
