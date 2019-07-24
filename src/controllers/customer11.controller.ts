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
import {Customer11} from '../models';
import {Customer11Repository} from '../repositories';

export class Customer11Controller {
  constructor(
    @repository(Customer11Repository)
    public customerRepository: Customer11Repository,
  ) {}

  @post('/customers11', {
    responses: {
      '200': {
        description: 'Customer11 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer11}}},
      },
    },
  })
  async create(@requestBody() customer: Customer11): Promise<Customer11> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers11/count', {
    responses: {
      '200': {
        description: 'Customer11 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer11)) where?: Where<Customer11>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers11', {
    responses: {
      '200': {
        description: 'Array of Customer11 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer11}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer11)) filter?: Filter<Customer11>,
  ): Promise<Customer11[]> {
    let customers: Customer11[] = await this.customerRepository.find(filter);
    //console.log(Customer11.prototype.id);
    //console.log(` typeof Customer11.prototype.id===${(typeof Customer11.prototype.id)}`);

    // console.log(Customer11.id); //compiler doesn't like
    //let c: Customer11 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers11', {
    responses: {
      '200': {
        description: 'Customer11 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer11, {partial: true}),
        },
      },
    })
    customer: Customer11,
    @param.query.object('where', getWhereSchemaFor(Customer11)) where?: Where<Customer11>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers11/{id}', {
    responses: {
      '200': {
        description: 'Customer11 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer11}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer11> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers11/{id}', {
    responses: {
      '204': {
        description: 'Customer11 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer11, {partial: true}),
        },
      },
    })
    customer: Customer11,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers11/{id}', {
    responses: {
      '204': {
        description: 'Customer11 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer11,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers11/{id}', {
    responses: {
      '204': {
        description: 'Customer11 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}