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
import {Customer24} from '../models';
import {Customer24Repository} from '../repositories';

export class Customer24Controller {
  constructor(
    @repository(Customer24Repository)
    public customerRepository: Customer24Repository,
  ) {}

  @post('/customers24', {
    responses: {
      '200': {
        description: 'Customer24 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer24}}},
      },
    },
  })
  async create(@requestBody() customer: Customer24): Promise<Customer24> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers24/count', {
    responses: {
      '200': {
        description: 'Customer24 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer24)) where?: Where<Customer24>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers24', {
    responses: {
      '200': {
        description: 'Array of Customer24 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer24}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer24)) filter?: Filter<Customer24>,
  ): Promise<Customer24[]> {
    let customers: Customer24[] = await this.customerRepository.find(filter);
    //console.log(Customer24.prototype.id);
    //console.log(` typeof Customer24.prototype.id===${(typeof Customer24.prototype.id)}`);

    // console.log(Customer24.id); //compiler doesn't like
    //let c: Customer24 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers24', {
    responses: {
      '200': {
        description: 'Customer24 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer24, {partial: true}),
        },
      },
    })
    customer: Customer24,
    @param.query.object('where', getWhereSchemaFor(Customer24)) where?: Where<Customer24>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers24/{id}', {
    responses: {
      '200': {
        description: 'Customer24 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer24}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer24> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers24/{id}', {
    responses: {
      '204': {
        description: 'Customer24 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer24, {partial: true}),
        },
      },
    })
    customer: Customer24,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers24/{id}', {
    responses: {
      '204': {
        description: 'Customer24 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer24,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers24/{id}', {
    responses: {
      '204': {
        description: 'Customer24 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}