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
import {Customer31} from '../models';
import {Customer31Repository} from '../repositories';

export class Customer31Controller {
  constructor(
    @repository(Customer31Repository)
    public customerRepository: Customer31Repository,
  ) {}

  @post('/customers31', {
    responses: {
      '200': {
        description: 'Customer31 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer31}}},
      },
    },
  })
  async create(@requestBody() customer: Customer31): Promise<Customer31> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers31/count', {
    responses: {
      '200': {
        description: 'Customer31 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer31)) where?: Where<Customer31>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers31', {
    responses: {
      '200': {
        description: 'Array of Customer31 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer31}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer31)) filter?: Filter<Customer31>,
  ): Promise<Customer31[]> {
    let customers: Customer31[] = await this.customerRepository.find(filter);
    //console.log(Customer31.prototype.id);
    //console.log(` typeof Customer31.prototype.id===${(typeof Customer31.prototype.id)}`);

    // console.log(Customer31.id); //compiler doesn't like
    //let c: Customer31 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers31', {
    responses: {
      '200': {
        description: 'Customer31 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer31, {partial: true}),
        },
      },
    })
    customer: Customer31,
    @param.query.object('where', getWhereSchemaFor(Customer31)) where?: Where<Customer31>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers31/{id}', {
    responses: {
      '200': {
        description: 'Customer31 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer31}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer31> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers31/{id}', {
    responses: {
      '204': {
        description: 'Customer31 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer31, {partial: true}),
        },
      },
    })
    customer: Customer31,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers31/{id}', {
    responses: {
      '204': {
        description: 'Customer31 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer31,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers31/{id}', {
    responses: {
      '204': {
        description: 'Customer31 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}