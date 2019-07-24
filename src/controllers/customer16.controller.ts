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
import {Customer16} from '../models';
import {Customer16Repository} from '../repositories';

export class Customer16Controller {
  constructor(
    @repository(Customer16Repository)
    public customerRepository: Customer16Repository,
  ) {}

  @post('/customers16', {
    responses: {
      '200': {
        description: 'Customer16 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer16}}},
      },
    },
  })
  async create(@requestBody() customer: Customer16): Promise<Customer16> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers16/count', {
    responses: {
      '200': {
        description: 'Customer16 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer16)) where?: Where<Customer16>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers16', {
    responses: {
      '200': {
        description: 'Array of Customer16 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer16}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer16)) filter?: Filter<Customer16>,
  ): Promise<Customer16[]> {
    let customers: Customer16[] = await this.customerRepository.find(filter);
    //console.log(Customer16.prototype.id);
    //console.log(` typeof Customer16.prototype.id===${(typeof Customer16.prototype.id)}`);

    // console.log(Customer16.id); //compiler doesn't like
    //let c: Customer16 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers16', {
    responses: {
      '200': {
        description: 'Customer16 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer16, {partial: true}),
        },
      },
    })
    customer: Customer16,
    @param.query.object('where', getWhereSchemaFor(Customer16)) where?: Where<Customer16>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers16/{id}', {
    responses: {
      '200': {
        description: 'Customer16 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer16}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer16> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers16/{id}', {
    responses: {
      '204': {
        description: 'Customer16 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer16, {partial: true}),
        },
      },
    })
    customer: Customer16,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers16/{id}', {
    responses: {
      '204': {
        description: 'Customer16 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer16,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers16/{id}', {
    responses: {
      '204': {
        description: 'Customer16 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}