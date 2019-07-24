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
import {Customer30} from '../models';
import {Customer30Repository} from '../repositories';

export class Customer30Controller {
  constructor(
    @repository(Customer30Repository)
    public customerRepository: Customer30Repository,
  ) {}

  @post('/customers30', {
    responses: {
      '200': {
        description: 'Customer30 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer30}}},
      },
    },
  })
  async create(@requestBody() customer: Customer30): Promise<Customer30> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers30/count', {
    responses: {
      '200': {
        description: 'Customer30 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer30)) where?: Where<Customer30>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers30', {
    responses: {
      '200': {
        description: 'Array of Customer30 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer30}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer30)) filter?: Filter<Customer30>,
  ): Promise<Customer30[]> {
    let customers: Customer30[] = await this.customerRepository.find(filter);
    //console.log(Customer30.prototype.id);
    //console.log(` typeof Customer30.prototype.id===${(typeof Customer30.prototype.id)}`);

    // console.log(Customer30.id); //compiler doesn't like
    //let c: Customer30 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers30', {
    responses: {
      '200': {
        description: 'Customer30 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer30, {partial: true}),
        },
      },
    })
    customer: Customer30,
    @param.query.object('where', getWhereSchemaFor(Customer30)) where?: Where<Customer30>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers30/{id}', {
    responses: {
      '200': {
        description: 'Customer30 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer30}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer30> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers30/{id}', {
    responses: {
      '204': {
        description: 'Customer30 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer30, {partial: true}),
        },
      },
    })
    customer: Customer30,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers30/{id}', {
    responses: {
      '204': {
        description: 'Customer30 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer30,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers30/{id}', {
    responses: {
      '204': {
        description: 'Customer30 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}