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
import {Order13} from '../models';
import {Order13Repository} from '../repositories';

export class Order13Controller {
  constructor(
    @repository(Order13Repository)
    public orderRepository: Order13Repository,
  ) {}

  @post('/orders13', {
    responses: {
      '200': {
        description: 'Order13 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order13}}},
      },
    },
  })
  async create(@requestBody() order: Order13): Promise<Order13> {
    return await this.orderRepository.create(order);
  }

  @get('/orders13/count', {
    responses: {
      '200': {
        description: 'Order13 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order13)) where?: Where<Order13>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders13', {
    responses: {
      '200': {
        description: 'Array of Order13 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order13}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order13)) filter?: Filter<Order13>,
  ): Promise<Order13[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders13', {
    responses: {
      '200': {
        description: 'Order13 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order13, {partial: true}),
        },
      },
    })
    order: Order13,
    @param.query.object('where', getWhereSchemaFor(Order13)) where?: Where<Order13>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders13/{id}', {
    responses: {
      '200': {
        description: 'Order13 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order13}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order13> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders13/{id}', {
    responses: {
      '204': {
        description: 'Order13 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order13, {partial: true}),
        },
      },
    })
    order: Order13,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders13/{id}', {
    responses: {
      '204': {
        description: 'Order13 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order13,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders13/{id}', {
    responses: {
      '204': {
        description: 'Order13 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
