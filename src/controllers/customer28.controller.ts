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
import {Customer28} from '../models';
import {Customer28Repository} from '../repositories';

export class Customer28Controller {
  constructor(
    @repository(Customer28Repository)
    public customerRepository: Customer28Repository,
  ) {}

  @post('/customers28', {
    responses: {
      '200': {
        description: 'Customer28 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer28}}},
      },
    },
  })
  async create(@requestBody() customer: Customer28): Promise<Customer28> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers28/count', {
    responses: {
      '200': {
        description: 'Customer28 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer28)) where?: Where<Customer28>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers28', {
    responses: {
      '200': {
        description: 'Array of Customer28 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer28}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer28)) filter?: Filter<Customer28>,
  ): Promise<Customer28[]> {
    let customers: Customer28[] = await this.customerRepository.find(filter);
    //console.log(Customer28.prototype.id);
    //console.log(` typeof Customer28.prototype.id===${(typeof Customer28.prototype.id)}`);

    // console.log(Customer28.id); //compiler doesn't like
    //let c: Customer28 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers28', {
    responses: {
      '200': {
        description: 'Customer28 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer28, {partial: true}),
        },
      },
    })
    customer: Customer28,
    @param.query.object('where', getWhereSchemaFor(Customer28)) where?: Where<Customer28>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers28/{id}', {
    responses: {
      '200': {
        description: 'Customer28 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer28}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer28> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers28/{id}', {
    responses: {
      '204': {
        description: 'Customer28 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer28, {partial: true}),
        },
      },
    })
    customer: Customer28,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers28/{id}', {
    responses: {
      '204': {
        description: 'Customer28 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer28,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers28/{id}', {
    responses: {
      '204': {
        description: 'Customer28 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}