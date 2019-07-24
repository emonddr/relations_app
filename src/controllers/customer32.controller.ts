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
import {Customer32} from '../models';
import {Customer32Repository} from '../repositories';

export class Customer32Controller {
  constructor(
    @repository(Customer32Repository)
    public customerRepository: Customer32Repository,
  ) {}

  @post('/customers32', {
    responses: {
      '200': {
        description: 'Customer32 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer32}}},
      },
    },
  })
  async create(@requestBody() customer: Customer32): Promise<Customer32> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers32/count', {
    responses: {
      '200': {
        description: 'Customer32 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer32)) where?: Where<Customer32>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers32', {
    responses: {
      '200': {
        description: 'Array of Customer32 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer32}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer32)) filter?: Filter<Customer32>,
  ): Promise<Customer32[]> {
    let customers: Customer32[] = await this.customerRepository.find(filter);
    //console.log(Customer32.prototype.id);
    //console.log(` typeof Customer32.prototype.id===${(typeof Customer32.prototype.id)}`);

    // console.log(Customer32.id); //compiler doesn't like
    //let c: Customer32 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers32', {
    responses: {
      '200': {
        description: 'Customer32 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer32, {partial: true}),
        },
      },
    })
    customer: Customer32,
    @param.query.object('where', getWhereSchemaFor(Customer32)) where?: Where<Customer32>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers32/{id}', {
    responses: {
      '200': {
        description: 'Customer32 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer32}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer32> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers32/{id}', {
    responses: {
      '204': {
        description: 'Customer32 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer32, {partial: true}),
        },
      },
    })
    customer: Customer32,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers32/{id}', {
    responses: {
      '204': {
        description: 'Customer32 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer32,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers32/{id}', {
    responses: {
      '204': {
        description: 'Customer32 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}