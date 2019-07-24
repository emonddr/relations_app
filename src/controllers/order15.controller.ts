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
import {Order15} from '../models';
import {Order15Repository} from '../repositories';

export class Order15Controller {
  constructor(
    @repository(Order15Repository)
    public orderRepository: Order15Repository,
  ) {}

  @post('/orders15', {
    responses: {
      '200': {
        description: 'Order15 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order15}}},
      },
    },
  })
  async create(@requestBody() order: Order15): Promise<Order15> {
    return await this.orderRepository.create(order);
  }

  @get('/orders15/count', {
    responses: {
      '200': {
        description: 'Order15 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order15)) where?: Where<Order15>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders15', {
    responses: {
      '200': {
        description: 'Array of Order15 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order15}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order15)) filter?: Filter<Order15>,
  ): Promise<Order15[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders15', {
    responses: {
      '200': {
        description: 'Order15 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order15, {partial: true}),
        },
      },
    })
    order: Order15,
    @param.query.object('where', getWhereSchemaFor(Order15)) where?: Where<Order15>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders15/{id}', {
    responses: {
      '200': {
        description: 'Order15 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order15}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order15> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders15/{id}', {
    responses: {
      '204': {
        description: 'Order15 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order15, {partial: true}),
        },
      },
    })
    order: Order15,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders15/{id}', {
    responses: {
      '204': {
        description: 'Order15 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order15,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders15/{id}', {
    responses: {
      '204': {
        description: 'Order15 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
