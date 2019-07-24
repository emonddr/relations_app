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
import {Customer35} from '../models';
import {Customer35Repository} from '../repositories';

export class Customer35Controller {
  constructor(
    @repository(Customer35Repository)
    public customerRepository: Customer35Repository,
  ) {}

  @post('/customers35', {
    responses: {
      '200': {
        description: 'Customer35 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer35}}},
      },
    },
  })
  async create(@requestBody() customer: Customer35): Promise<Customer35> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers35/count', {
    responses: {
      '200': {
        description: 'Customer35 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer35)) where?: Where<Customer35>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers35', {
    responses: {
      '200': {
        description: 'Array of Customer35 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer35}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer35)) filter?: Filter<Customer35>,
  ): Promise<Customer35[]> {
    let customers: Customer35[] = await this.customerRepository.find(filter);
    //console.log(Customer35.prototype.id);
    //console.log(` typeof Customer35.prototype.id===${(typeof Customer35.prototype.id)}`);

    // console.log(Customer35.id); //compiler doesn't like
    //let c: Customer35 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers35', {
    responses: {
      '200': {
        description: 'Customer35 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer35, {partial: true}),
        },
      },
    })
    customer: Customer35,
    @param.query.object('where', getWhereSchemaFor(Customer35)) where?: Where<Customer35>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers35/{id}', {
    responses: {
      '200': {
        description: 'Customer35 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer35}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer35> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers35/{id}', {
    responses: {
      '204': {
        description: 'Customer35 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer35, {partial: true}),
        },
      },
    })
    customer: Customer35,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers35/{id}', {
    responses: {
      '204': {
        description: 'Customer35 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer35,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers35/{id}', {
    responses: {
      '204': {
        description: 'Customer35 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}