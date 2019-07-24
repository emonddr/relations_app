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
import {Customer7} from '../models';
import {Customer7Repository} from '../repositories';

export class Customer7Controller {
  constructor(
    @repository(Customer7Repository)
    public customerRepository: Customer7Repository,
  ) {}

  @post('/customers7', {
    responses: {
      '200': {
        description: 'Customer7 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer7}}},
      },
    },
  })
  async create(@requestBody() customer: Customer7): Promise<Customer7> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers7/count', {
    responses: {
      '200': {
        description: 'Customer7 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer7)) where?: Where<Customer7>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers7', {
    responses: {
      '200': {
        description: 'Array of Customer7 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer7}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer7)) filter?: Filter<Customer7>,
  ): Promise<Customer7[]> {
    let customers: Customer7[] = await this.customerRepository.find(filter);
    //console.log(Customer7.prototype.id);
    //console.log(` typeof Customer7.prototype.id===${(typeof Customer7.prototype.id)}`);

    // console.log(Customer7.id); //compiler doesn't like
    //let c: Customer7 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers7', {
    responses: {
      '200': {
        description: 'Customer7 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer7, {partial: true}),
        },
      },
    })
    customer: Customer7,
    @param.query.object('where', getWhereSchemaFor(Customer7)) where?: Where<Customer7>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers7/{id}', {
    responses: {
      '200': {
        description: 'Customer7 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer7}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer7> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers7/{id}', {
    responses: {
      '204': {
        description: 'Customer7 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer7, {partial: true}),
        },
      },
    })
    customer: Customer7,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers7/{id}', {
    responses: {
      '204': {
        description: 'Customer7 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer7,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers7/{id}', {
    responses: {
      '204': {
        description: 'Customer7 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}