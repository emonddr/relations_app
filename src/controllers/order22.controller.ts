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
import {Order22} from '../models';
import {Order22Repository} from '../repositories';

export class Order22Controller {
  constructor(
    @repository(Order22Repository)
    public orderRepository: Order22Repository,
  ) {}

  @post('/orders22', {
    responses: {
      '200': {
        description: 'Order22 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order22}}},
      },
    },
  })
  async create(@requestBody() order: Order22): Promise<Order22> {
    return await this.orderRepository.create(order);
  }

  @get('/orders22/count', {
    responses: {
      '200': {
        description: 'Order22 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order22)) where?: Where<Order22>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders22', {
    responses: {
      '200': {
        description: 'Array of Order22 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order22}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order22)) filter?: Filter<Order22>,
  ): Promise<Order22[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders22', {
    responses: {
      '200': {
        description: 'Order22 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order22, {partial: true}),
        },
      },
    })
    order: Order22,
    @param.query.object('where', getWhereSchemaFor(Order22)) where?: Where<Order22>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders22/{id}', {
    responses: {
      '200': {
        description: 'Order22 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order22}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order22> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders22/{id}', {
    responses: {
      '204': {
        description: 'Order22 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order22, {partial: true}),
        },
      },
    })
    order: Order22,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders22/{id}', {
    responses: {
      '204': {
        description: 'Order22 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order22,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders22/{id}', {
    responses: {
      '204': {
        description: 'Order22 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
