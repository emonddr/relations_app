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
import {Customer5} from '../models';
import {Customer5Repository} from '../repositories';

export class Customer5Controller {
  constructor(
    @repository(Customer5Repository)
    public customerRepository: Customer5Repository,
  ) {}

  @post('/customers5', {
    responses: {
      '200': {
        description: 'Customer5 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer5}}},
      },
    },
  })
  async create(@requestBody() customer: Customer5): Promise<Customer5> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers5/count', {
    responses: {
      '200': {
        description: 'Customer5 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer5)) where?: Where<Customer5>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers5', {
    responses: {
      '200': {
        description: 'Array of Customer5 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer5}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer5)) filter?: Filter<Customer5>,
  ): Promise<Customer5[]> {
    let customers: Customer5[] = await this.customerRepository.find(filter);
    //console.log(Customer5.prototype.id);
    //console.log(` typeof Customer5.prototype.id===${(typeof Customer5.prototype.id)}`);

    // console.log(Customer5.id); //compiler doesn't like
    //let c: Customer5 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers5', {
    responses: {
      '200': {
        description: 'Customer5 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer5, {partial: true}),
        },
      },
    })
    customer: Customer5,
    @param.query.object('where', getWhereSchemaFor(Customer5)) where?: Where<Customer5>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers5/{id}', {
    responses: {
      '200': {
        description: 'Customer5 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer5}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer5> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers5/{id}', {
    responses: {
      '204': {
        description: 'Customer5 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer5, {partial: true}),
        },
      },
    })
    customer: Customer5,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers5/{id}', {
    responses: {
      '204': {
        description: 'Customer5 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer5,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers5/{id}', {
    responses: {
      '204': {
        description: 'Customer5 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}