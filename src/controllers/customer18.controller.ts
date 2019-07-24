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
import {Customer18} from '../models';
import {Customer18Repository} from '../repositories';

export class Customer18Controller {
  constructor(
    @repository(Customer18Repository)
    public customerRepository: Customer18Repository,
  ) {}

  @post('/customers18', {
    responses: {
      '200': {
        description: 'Customer18 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer18}}},
      },
    },
  })
  async create(@requestBody() customer: Customer18): Promise<Customer18> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers18/count', {
    responses: {
      '200': {
        description: 'Customer18 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer18)) where?: Where<Customer18>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers18', {
    responses: {
      '200': {
        description: 'Array of Customer18 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer18}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer18)) filter?: Filter<Customer18>,
  ): Promise<Customer18[]> {
    let customers: Customer18[] = await this.customerRepository.find(filter);
    //console.log(Customer18.prototype.id);
    //console.log(` typeof Customer18.prototype.id===${(typeof Customer18.prototype.id)}`);

    // console.log(Customer18.id); //compiler doesn't like
    //let c: Customer18 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers18', {
    responses: {
      '200': {
        description: 'Customer18 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer18, {partial: true}),
        },
      },
    })
    customer: Customer18,
    @param.query.object('where', getWhereSchemaFor(Customer18)) where?: Where<Customer18>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers18/{id}', {
    responses: {
      '200': {
        description: 'Customer18 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer18}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer18> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers18/{id}', {
    responses: {
      '204': {
        description: 'Customer18 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer18, {partial: true}),
        },
      },
    })
    customer: Customer18,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers18/{id}', {
    responses: {
      '204': {
        description: 'Customer18 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer18,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers18/{id}', {
    responses: {
      '204': {
        description: 'Customer18 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}