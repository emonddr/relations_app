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
import {Order2} from '../models';
import {Order2Repository} from '../repositories';

export class Order2Controller {
  constructor(
    @repository(Order2Repository)
    public orderRepository: Order2Repository,
  ) {}

  @post('/orders2', {
    responses: {
      '200': {
        description: 'Order2 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order2}}},
      },
    },
  })
  async create(@requestBody() order: Order2): Promise<Order2> {
    return await this.orderRepository.create(order);
  }

  @get('/orders2/count', {
    responses: {
      '200': {
        description: 'Order2 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order2)) where?: Where<Order2>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders2', {
    responses: {
      '200': {
        description: 'Array of Order2 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order2}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order2)) filter?: Filter<Order2>,
  ): Promise<Order2[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders2', {
    responses: {
      '200': {
        description: 'Order2 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order2, {partial: true}),
        },
      },
    })
    order: Order2,
    @param.query.object('where', getWhereSchemaFor(Order2)) where?: Where<Order2>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders2/{id}', {
    responses: {
      '200': {
        description: 'Order2 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order2}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order2> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders2/{id}', {
    responses: {
      '204': {
        description: 'Order2 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order2, {partial: true}),
        },
      },
    })
    order: Order2,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders2/{id}', {
    responses: {
      '204': {
        description: 'Order2 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order2,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders2/{id}', {
    responses: {
      '204': {
        description: 'Order2 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
