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
import {Customer21} from '../models';
import {Customer21Repository} from '../repositories';

export class Customer21Controller {
  constructor(
    @repository(Customer21Repository)
    public customerRepository: Customer21Repository,
  ) {}

  @post('/customers21', {
    responses: {
      '200': {
        description: 'Customer21 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer21}}},
      },
    },
  })
  async create(@requestBody() customer: Customer21): Promise<Customer21> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers21/count', {
    responses: {
      '200': {
        description: 'Customer21 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer21)) where?: Where<Customer21>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers21', {
    responses: {
      '200': {
        description: 'Array of Customer21 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer21}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer21)) filter?: Filter<Customer21>,
  ): Promise<Customer21[]> {
    let customers: Customer21[] = await this.customerRepository.find(filter);
    //console.log(Customer21.prototype.id);
    //console.log(` typeof Customer21.prototype.id===${(typeof Customer21.prototype.id)}`);

    // console.log(Customer21.id); //compiler doesn't like
    //let c: Customer21 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers21', {
    responses: {
      '200': {
        description: 'Customer21 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer21, {partial: true}),
        },
      },
    })
    customer: Customer21,
    @param.query.object('where', getWhereSchemaFor(Customer21)) where?: Where<Customer21>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers21/{id}', {
    responses: {
      '200': {
        description: 'Customer21 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer21}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer21> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers21/{id}', {
    responses: {
      '204': {
        description: 'Customer21 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer21, {partial: true}),
        },
      },
    })
    customer: Customer21,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers21/{id}', {
    responses: {
      '204': {
        description: 'Customer21 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer21,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers21/{id}', {
    responses: {
      '204': {
        description: 'Customer21 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}