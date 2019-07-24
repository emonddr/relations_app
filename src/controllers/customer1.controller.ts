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
import {Customer1} from '../models';
import {Customer1Repository} from '../repositories';

export class Customer1Controller {
  constructor(
    @repository(Customer1Repository)
    public customerRepository: Customer1Repository,
  ) {}

  @post('/customers1', {
    responses: {
      '200': {
        description: 'Customer1 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer1}}},
      },
    },
  })
  async create(@requestBody() customer: Customer1): Promise<Customer1> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers1/count', {
    responses: {
      '200': {
        description: 'Customer1 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer1)) where?: Where<Customer1>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers1', {
    responses: {
      '200': {
        description: 'Array of Customer1 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer1}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer1)) filter?: Filter<Customer1>,
  ): Promise<Customer1[]> {
    let customers: Customer1[] = await this.customerRepository.find(filter);
    //console.log(Customer1.prototype.id);
    //console.log(` typeof Customer1.prototype.id===${(typeof Customer1.prototype.id)}`);

    // console.log(Customer1.id); //compiler doesn't like
    //let c: Customer1 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers1', {
    responses: {
      '200': {
        description: 'Customer1 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer1, {partial: true}),
        },
      },
    })
    customer: Customer1,
    @param.query.object('where', getWhereSchemaFor(Customer1)) where?: Where<Customer1>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers1/{id}', {
    responses: {
      '200': {
        description: 'Customer1 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer1}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer1> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers1/{id}', {
    responses: {
      '204': {
        description: 'Customer1 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer1, {partial: true}),
        },
      },
    })
    customer: Customer1,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers1/{id}', {
    responses: {
      '204': {
        description: 'Customer1 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer1,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers1/{id}', {
    responses: {
      '204': {
        description: 'Customer1 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}