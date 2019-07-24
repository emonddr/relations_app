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
import {Order25} from '../models';
import {Order25Repository} from '../repositories';

export class Order25Controller {
  constructor(
    @repository(Order25Repository)
    public orderRepository: Order25Repository,
  ) {}

  @post('/orders25', {
    responses: {
      '200': {
        description: 'Order25 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order25}}},
      },
    },
  })
  async create(@requestBody() order: Order25): Promise<Order25> {
    return await this.orderRepository.create(order);
  }

  @get('/orders25/count', {
    responses: {
      '200': {
        description: 'Order25 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order25)) where?: Where<Order25>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders25', {
    responses: {
      '200': {
        description: 'Array of Order25 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order25}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order25)) filter?: Filter<Order25>,
  ): Promise<Order25[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders25', {
    responses: {
      '200': {
        description: 'Order25 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order25, {partial: true}),
        },
      },
    })
    order: Order25,
    @param.query.object('where', getWhereSchemaFor(Order25)) where?: Where<Order25>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders25/{id}', {
    responses: {
      '200': {
        description: 'Order25 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order25}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order25> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders25/{id}', {
    responses: {
      '204': {
        description: 'Order25 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order25, {partial: true}),
        },
      },
    })
    order: Order25,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders25/{id}', {
    responses: {
      '204': {
        description: 'Order25 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order25,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders25/{id}', {
    responses: {
      '204': {
        description: 'Order25 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
