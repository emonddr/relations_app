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
import {Customer19} from '../models';
import {Customer19Repository} from '../repositories';

export class Customer19Controller {
  constructor(
    @repository(Customer19Repository)
    public customerRepository: Customer19Repository,
  ) {}

  @post('/customers19', {
    responses: {
      '200': {
        description: 'Customer19 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer19}}},
      },
    },
  })
  async create(@requestBody() customer: Customer19): Promise<Customer19> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers19/count', {
    responses: {
      '200': {
        description: 'Customer19 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer19)) where?: Where<Customer19>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers19', {
    responses: {
      '200': {
        description: 'Array of Customer19 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer19}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer19)) filter?: Filter<Customer19>,
  ): Promise<Customer19[]> {
    let customers: Customer19[] = await this.customerRepository.find(filter);
    //console.log(Customer19.prototype.id);
    //console.log(` typeof Customer19.prototype.id===${(typeof Customer19.prototype.id)}`);

    // console.log(Customer19.id); //compiler doesn't like
    //let c: Customer19 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers19', {
    responses: {
      '200': {
        description: 'Customer19 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer19, {partial: true}),
        },
      },
    })
    customer: Customer19,
    @param.query.object('where', getWhereSchemaFor(Customer19)) where?: Where<Customer19>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers19/{id}', {
    responses: {
      '200': {
        description: 'Customer19 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer19}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer19> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers19/{id}', {
    responses: {
      '204': {
        description: 'Customer19 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer19, {partial: true}),
        },
      },
    })
    customer: Customer19,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers19/{id}', {
    responses: {
      '204': {
        description: 'Customer19 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer19,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers19/{id}', {
    responses: {
      '204': {
        description: 'Customer19 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}