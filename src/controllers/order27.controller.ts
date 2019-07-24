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
import {Order27} from '../models';
import {Order27Repository} from '../repositories';

export class Order27Controller {
  constructor(
    @repository(Order27Repository)
    public orderRepository: Order27Repository,
  ) {}

  @post('/orders27', {
    responses: {
      '200': {
        description: 'Order27 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order27}}},
      },
    },
  })
  async create(@requestBody() order: Order27): Promise<Order27> {
    return await this.orderRepository.create(order);
  }

  @get('/orders27/count', {
    responses: {
      '200': {
        description: 'Order27 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order27)) where?: Where<Order27>,
  ): Promise<Count> {
    return await this.orderRepository.count(where);
  }

  @get('/orders27', {
    responses: {
      '200': {
        description: 'Array of Order27 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Order27}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order27)) filter?: Filter<Order27>,
  ): Promise<Order27[]> {
    return await this.orderRepository.find(filter);
  }

  @patch('/orders27', {
    responses: {
      '200': {
        description: 'Order27 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order27, {partial: true}),
        },
      },
    })
    order: Order27,
    @param.query.object('where', getWhereSchemaFor(Order27)) where?: Where<Order27>,
  ): Promise<Count> {
    return await this.orderRepository.updateAll(order, where);
  }

  @get('/orders27/{id}', {
    responses: {
      '200': {
        description: 'Order27 model instance',
        content: {'application/json': {schema: {'x-ts-type': Order27}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Order27> {
    return await this.orderRepository.findById(id);
  }

  @patch('/orders27/{id}', {
    responses: {
      '204': {
        description: 'Order27 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order27, {partial: true}),
        },
      },
    })
    order: Order27,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders27/{id}', {
    responses: {
      '204': {
        description: 'Order27 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order27,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders27/{id}', {
    responses: {
      '204': {
        description: 'Order27 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
