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
import {Order14} from '../models';
import {Order14Repository} from '../repositories';

export class Order14Controller {
  constructor(
    @repository(Order14Repository)
    public orderRepository: Order14Repository,
  ) {}

  @post('/orders14', {
    responses: {
      '200': {
        description: 'Order14 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order14}}},
      },
    },
  })
  async create(@requestBody() order: Order14): Promise<Order14> {
    return await this.orderRepository.create(order);
  }

  @get('/orders14/count', {
    responses: {
      '200': {
        description: 'Order14 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order14)) where?: Where<Order14>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders14', {
    responses: {
      '200': {
        description: 'Array of Order14 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order14}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order14)) filter?: Filter<Order14>,
  ): Promise<Order14[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders14', {
    responses: {
      '200': {
        description: 'Order14 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order14, {partial: true}),
        },
      },
    })
    order: Order14,
    @param.query.object('where', getWhereSchemaFor(Order14)) where?: Where<Order14>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders14/{id}', {
    responses: {
      '200': {
        description: 'Order14 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order14}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order14> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders14/{id}', {
    responses: {
      '204': {
        description: 'Order14 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order14, {partial: true}),
        },
      },
    })
    order: Order14,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders14/{id}', {
    responses: {
      '204': {
        description: 'Order14 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order14,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders14/{id}', {
    responses: {
      '204': {
        description: 'Order14 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
