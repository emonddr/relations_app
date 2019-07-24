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
import {Customer9} from '../models';
import {Customer9Repository} from '../repositories';

export class Customer9Controller {
  constructor(
    @repository(Customer9Repository)
    public customerRepository: Customer9Repository,
  ) {}

  @post('/customers9', {
    responses: {
      '200': {
        description: 'Customer9 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer9}}},
      },
    },
  })
  async create(@requestBody() customer: Customer9): Promise<Customer9> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers9/count', {
    responses: {
      '200': {
        description: 'Customer9 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer9)) where?: Where<Customer9>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers9', {
    responses: {
      '200': {
        description: 'Array of Customer9 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer9}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer9)) filter?: Filter<Customer9>,
  ): Promise<Customer9[]> {
    let customers: Customer9[] = await this.customerRepository.find(filter);
    //console.log(Customer9.prototype.id);
    //console.log(` typeof Customer9.prototype.id===${(typeof Customer9.prototype.id)}`);

    // console.log(Customer9.id); //compiler doesn't like
    //let c: Customer9 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers9', {
    responses: {
      '200': {
        description: 'Customer9 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer9, {partial: true}),
        },
      },
    })
    customer: Customer9,
    @param.query.object('where', getWhereSchemaFor(Customer9)) where?: Where<Customer9>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers9/{id}', {
    responses: {
      '200': {
        description: 'Customer9 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer9}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer9> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers9/{id}', {
    responses: {
      '204': {
        description: 'Customer9 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer9, {partial: true}),
        },
      },
    })
    customer: Customer9,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers9/{id}', {
    responses: {
      '204': {
        description: 'Customer9 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer9,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers9/{id}', {
    responses: {
      '204': {
        description: 'Customer9 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}