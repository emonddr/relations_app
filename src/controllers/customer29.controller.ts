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
import {Customer29} from '../models';
import {Customer29Repository} from '../repositories';

export class Customer29Controller {
  constructor(
    @repository(Customer29Repository)
    public customerRepository: Customer29Repository,
  ) {}

  @post('/customers29', {
    responses: {
      '200': {
        description: 'Customer29 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer29}}},
      },
    },
  })
  async create(@requestBody() customer: Customer29): Promise<Customer29> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers29/count', {
    responses: {
      '200': {
        description: 'Customer29 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer29)) where?: Where<Customer29>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers29', {
    responses: {
      '200': {
        description: 'Array of Customer29 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer29}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer29)) filter?: Filter<Customer29>,
  ): Promise<Customer29[]> {
    let customers: Customer29[] = await this.customerRepository.find(filter);
    //console.log(Customer29.prototype.id);
    //console.log(` typeof Customer29.prototype.id===${(typeof Customer29.prototype.id)}`);

    // console.log(Customer29.id); //compiler doesn't like
    //let c: Customer29 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers29', {
    responses: {
      '200': {
        description: 'Customer29 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer29, {partial: true}),
        },
      },
    })
    customer: Customer29,
    @param.query.object('where', getWhereSchemaFor(Customer29)) where?: Where<Customer29>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers29/{id}', {
    responses: {
      '200': {
        description: 'Customer29 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer29}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer29> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers29/{id}', {
    responses: {
      '204': {
        description: 'Customer29 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer29, {partial: true}),
        },
      },
    })
    customer: Customer29,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers29/{id}', {
    responses: {
      '204': {
        description: 'Customer29 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer29,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers29/{id}', {
    responses: {
      '204': {
        description: 'Customer29 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}