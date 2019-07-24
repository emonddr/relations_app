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
import {Order19} from '../models';
import {Order19Repository} from '../repositories';

export class Order19Controller {
  constructor(
    @repository(Order19Repository)
    public orderRepository: Order19Repository,
  ) {}

  @post('/orders19', {
    responses: {
      '200': {
        description: 'Order19 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order19}}},
      },
    },
  })
  async create(@requestBody() order: Order19): Promise<Order19> {
    return await this.orderRepository.create(order);
  }

  @get('/orders19/count', {
    responses: {
      '200': {
        description: 'Order19 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order19)) where?: Where<Order19>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders19', {
    responses: {
      '200': {
        description: 'Array of Order19 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order19}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order19)) filter?: Filter<Order19>,
  ): Promise<Order19[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders19', {
    responses: {
      '200': {
        description: 'Order19 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order19, {partial: true}),
        },
      },
    })
    order: Order19,
    @param.query.object('where', getWhereSchemaFor(Order19)) where?: Where<Order19>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders19/{id}', {
    responses: {
      '200': {
        description: 'Order19 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order19}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order19> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders19/{id}', {
    responses: {
      '204': {
        description: 'Order19 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order19, {partial: true}),
        },
      },
    })
    order: Order19,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders19/{id}', {
    responses: {
      '204': {
        description: 'Order19 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order19,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders19/{id}', {
    responses: {
      '204': {
        description: 'Order19 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
