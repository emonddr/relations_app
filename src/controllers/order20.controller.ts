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
import {Order20} from '../models';
import {Order20Repository} from '../repositories';

export class Order20Controller {
  constructor(
    @repository(Order20Repository)
    public orderRepository: Order20Repository,
  ) {}

  @post('/orders20', {
    responses: {
      '200': {
        description: 'Order20 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order20}}},
      },
    },
  })
  async create(@requestBody() order: Order20): Promise<Order20> {
    return await this.orderRepository.create(order);
  }

  @get('/orders20/count', {
    responses: {
      '200': {
        description: 'Order20 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order20)) where?: Where<Order20>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders20', {
    responses: {
      '200': {
        description: 'Array of Order20 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order20}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order20)) filter?: Filter<Order20>,
  ): Promise<Order20[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders20', {
    responses: {
      '200': {
        description: 'Order20 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order20, {partial: true}),
        },
      },
    })
    order: Order20,
    @param.query.object('where', getWhereSchemaFor(Order20)) where?: Where<Order20>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders20/{id}', {
    responses: {
      '200': {
        description: 'Order20 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order20}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order20> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders20/{id}', {
    responses: {
      '204': {
        description: 'Order20 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order20, {partial: true}),
        },
      },
    })
    order: Order20,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders20/{id}', {
    responses: {
      '204': {
        description: 'Order20 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order20,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders20/{id}', {
    responses: {
      '204': {
        description: 'Order20 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
