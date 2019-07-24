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
import {Customer34} from '../models';
import {Customer34Repository} from '../repositories';

export class Customer34Controller {
  constructor(
    @repository(Customer34Repository)
    public customerRepository: Customer34Repository,
  ) {}

  @post('/customers34', {
    responses: {
      '200': {
        description: 'Customer34 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer34}}},
      },
    },
  })
  async create(@requestBody() customer: Customer34): Promise<Customer34> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers34/count', {
    responses: {
      '200': {
        description: 'Customer34 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer34)) where?: Where<Customer34>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers34', {
    responses: {
      '200': {
        description: 'Array of Customer34 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer34}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer34)) filter?: Filter<Customer34>,
  ): Promise<Customer34[]> {
    let customers: Customer34[] = await this.customerRepository.find(filter);
    //console.log(Customer34.prototype.id);
    //console.log(` typeof Customer34.prototype.id===${(typeof Customer34.prototype.id)}`);

    // console.log(Customer34.id); //compiler doesn't like
    //let c: Customer34 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers34', {
    responses: {
      '200': {
        description: 'Customer34 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer34, {partial: true}),
        },
      },
    })
    customer: Customer34,
    @param.query.object('where', getWhereSchemaFor(Customer34)) where?: Where<Customer34>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers34/{id}', {
    responses: {
      '200': {
        description: 'Customer34 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer34}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer34> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers34/{id}', {
    responses: {
      '204': {
        description: 'Customer34 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer34, {partial: true}),
        },
      },
    })
    customer: Customer34,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers34/{id}', {
    responses: {
      '204': {
        description: 'Customer34 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer34,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers34/{id}', {
    responses: {
      '204': {
        description: 'Customer34 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}