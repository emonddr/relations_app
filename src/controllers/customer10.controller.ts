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
import {Customer10} from '../models';
import {Customer10Repository} from '../repositories';

export class Customer10Controller {
  constructor(
    @repository(Customer10Repository)
    public customerRepository: Customer10Repository,
  ) {}

  @post('/customers10', {
    responses: {
      '200': {
        description: 'Customer10 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer10}}},
      },
    },
  })
  async create(@requestBody() customer: Customer10): Promise<Customer10> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers10/count', {
    responses: {
      '200': {
        description: 'Customer10 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer10)) where?: Where<Customer10>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers10', {
    responses: {
      '200': {
        description: 'Array of Customer10 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer10}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer10)) filter?: Filter<Customer10>,
  ): Promise<Customer10[]> {
    let customers: Customer10[] = await this.customerRepository.find(filter);
    //console.log(Customer10.prototype.id);
    //console.log(` typeof Customer10.prototype.id===${(typeof Customer10.prototype.id)}`);

    // console.log(Customer10.id); //compiler doesn't like
    //let c: Customer10 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers10', {
    responses: {
      '200': {
        description: 'Customer10 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer10, {partial: true}),
        },
      },
    })
    customer: Customer10,
    @param.query.object('where', getWhereSchemaFor(Customer10)) where?: Where<Customer10>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers10/{id}', {
    responses: {
      '200': {
        description: 'Customer10 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer10}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer10> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers10/{id}', {
    responses: {
      '204': {
        description: 'Customer10 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer10, {partial: true}),
        },
      },
    })
    customer: Customer10,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers10/{id}', {
    responses: {
      '204': {
        description: 'Customer10 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer10,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers10/{id}', {
    responses: {
      '204': {
        description: 'Customer10 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}