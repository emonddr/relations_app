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
import {Customer3} from '../models';
import {Customer3Repository} from '../repositories';

export class Customer3Controller {
  constructor(
    @repository(Customer3Repository)
    public customerRepository: Customer3Repository,
  ) {}

  @post('/customers3', {
    responses: {
      '200': {
        description: 'Customer3 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer3}}},
      },
    },
  })
  async create(@requestBody() customer: Customer3): Promise<Customer3> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers3/count', {
    responses: {
      '200': {
        description: 'Customer3 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer3)) where?: Where<Customer3>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers3', {
    responses: {
      '200': {
        description: 'Array of Customer3 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer3}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer3)) filter?: Filter<Customer3>,
  ): Promise<Customer3[]> {
    let customers: Customer3[] = await this.customerRepository.find(filter);
    //console.log(Customer3.prototype.id);
    //console.log(` typeof Customer3.prototype.id===${(typeof Customer3.prototype.id)}`);

    // console.log(Customer3.id); //compiler doesn't like
    //let c: Customer3 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers3', {
    responses: {
      '200': {
        description: 'Customer3 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer3, {partial: true}),
        },
      },
    })
    customer: Customer3,
    @param.query.object('where', getWhereSchemaFor(Customer3)) where?: Where<Customer3>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers3/{id}', {
    responses: {
      '200': {
        description: 'Customer3 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer3}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer3> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers3/{id}', {
    responses: {
      '204': {
        description: 'Customer3 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer3, {partial: true}),
        },
      },
    })
    customer: Customer3,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers3/{id}', {
    responses: {
      '204': {
        description: 'Customer3 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer3,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers3/{id}', {
    responses: {
      '204': {
        description: 'Customer3 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}