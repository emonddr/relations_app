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
import {Customer23} from '../models';
import {Customer23Repository} from '../repositories';

export class Customer23Controller {
  constructor(
    @repository(Customer23Repository)
    public customerRepository: Customer23Repository,
  ) {}

  @post('/customers23', {
    responses: {
      '200': {
        description: 'Customer23 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer23}}},
      },
    },
  })
  async create(@requestBody() customer: Customer23): Promise<Customer23> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers23/count', {
    responses: {
      '200': {
        description: 'Customer23 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer23)) where?: Where<Customer23>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers23', {
    responses: {
      '200': {
        description: 'Array of Customer23 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer23}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer23)) filter?: Filter<Customer23>,
  ): Promise<Customer23[]> {
    let customers: Customer23[] = await this.customerRepository.find(filter);
    //console.log(Customer23.prototype.id);
    //console.log(` typeof Customer23.prototype.id===${(typeof Customer23.prototype.id)}`);

    // console.log(Customer23.id); //compiler doesn't like
    //let c: Customer23 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers23', {
    responses: {
      '200': {
        description: 'Customer23 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer23, {partial: true}),
        },
      },
    })
    customer: Customer23,
    @param.query.object('where', getWhereSchemaFor(Customer23)) where?: Where<Customer23>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers23/{id}', {
    responses: {
      '200': {
        description: 'Customer23 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer23}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer23> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers23/{id}', {
    responses: {
      '204': {
        description: 'Customer23 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer23, {partial: true}),
        },
      },
    })
    customer: Customer23,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers23/{id}', {
    responses: {
      '204': {
        description: 'Customer23 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer23,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers23/{id}', {
    responses: {
      '204': {
        description: 'Customer23 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}