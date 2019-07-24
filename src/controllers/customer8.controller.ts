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
import {Customer8} from '../models';
import {Customer8Repository} from '../repositories';

export class Customer8Controller {
  constructor(
    @repository(Customer8Repository)
    public customerRepository: Customer8Repository,
  ) {}

  @post('/customers8', {
    responses: {
      '200': {
        description: 'Customer8 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer8}}},
      },
    },
  })
  async create(@requestBody() customer: Customer8): Promise<Customer8> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers8/count', {
    responses: {
      '200': {
        description: 'Customer8 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer8)) where?: Where<Customer8>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers8', {
    responses: {
      '200': {
        description: 'Array of Customer8 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer8}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer8)) filter?: Filter<Customer8>,
  ): Promise<Customer8[]> {
    let customers: Customer8[] = await this.customerRepository.find(filter);
    //console.log(Customer8.prototype.id);
    //console.log(` typeof Customer8.prototype.id===${(typeof Customer8.prototype.id)}`);

    // console.log(Customer8.id); //compiler doesn't like
    //let c: Customer8 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers8', {
    responses: {
      '200': {
        description: 'Customer8 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer8, {partial: true}),
        },
      },
    })
    customer: Customer8,
    @param.query.object('where', getWhereSchemaFor(Customer8)) where?: Where<Customer8>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers8/{id}', {
    responses: {
      '200': {
        description: 'Customer8 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer8}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer8> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers8/{id}', {
    responses: {
      '204': {
        description: 'Customer8 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer8, {partial: true}),
        },
      },
    })
    customer: Customer8,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers8/{id}', {
    responses: {
      '204': {
        description: 'Customer8 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer8,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers8/{id}', {
    responses: {
      '204': {
        description: 'Customer8 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}