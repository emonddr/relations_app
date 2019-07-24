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
import {Order17} from '../models';
import {Order17Repository} from '../repositories';

export class Order17Controller {
  constructor(
    @repository(Order17Repository)
    public orderRepository: Order17Repository,
  ) {}

  @post('/orders17', {
    responses: {
      '200': {
        description: 'Order17 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order17}}},
      },
    },
  })
  async create(@requestBody() order: Order17): Promise<Order17> {
    return await this.orderRepository.create(order);
  }

  @get('/orders17/count', {
    responses: {
      '200': {
        description: 'Order17 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order17)) where?: Where<Order17>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders17', {
    responses: {
      '200': {
        description: 'Array of Order17 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order17}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order17)) filter?: Filter<Order17>,
  ): Promise<Order17[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders17', {
    responses: {
      '200': {
        description: 'Order17 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order17, {partial: true}),
        },
      },
    })
    order: Order17,
    @param.query.object('where', getWhereSchemaFor(Order17)) where?: Where<Order17>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders17/{id}', {
    responses: {
      '200': {
        description: 'Order17 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order17}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order17> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders17/{id}', {
    responses: {
      '204': {
        description: 'Order17 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order17, {partial: true}),
        },
      },
    })
    order: Order17,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders17/{id}', {
    responses: {
      '204': {
        description: 'Order17 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order17,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders17/{id}', {
    responses: {
      '204': {
        description: 'Order17 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
