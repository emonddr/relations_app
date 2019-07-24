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
import {Customer33} from '../models';
import {Customer33Repository} from '../repositories';

export class Customer33Controller {
  constructor(
    @repository(Customer33Repository)
    public customerRepository: Customer33Repository,
  ) {}

  @post('/customers33', {
    responses: {
      '200': {
        description: 'Customer33 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer33}}},
      },
    },
  })
  async create(@requestBody() customer: Customer33): Promise<Customer33> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers33/count', {
    responses: {
      '200': {
        description: 'Customer33 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer33)) where?: Where<Customer33>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers33', {
    responses: {
      '200': {
        description: 'Array of Customer33 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer33}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer33)) filter?: Filter<Customer33>,
  ): Promise<Customer33[]> {
    let customers: Customer33[] = await this.customerRepository.find(filter);
    //console.log(Customer33.prototype.id);
    //console.log(` typeof Customer33.prototype.id===${(typeof Customer33.prototype.id)}`);

    // console.log(Customer33.id); //compiler doesn't like
    //let c: Customer33 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers33', {
    responses: {
      '200': {
        description: 'Customer33 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer33, {partial: true}),
        },
      },
    })
    customer: Customer33,
    @param.query.object('where', getWhereSchemaFor(Customer33)) where?: Where<Customer33>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers33/{id}', {
    responses: {
      '200': {
        description: 'Customer33 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer33}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer33> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers33/{id}', {
    responses: {
      '204': {
        description: 'Customer33 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer33, {partial: true}),
        },
      },
    })
    customer: Customer33,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers33/{id}', {
    responses: {
      '204': {
        description: 'Customer33 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer33,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers33/{id}', {
    responses: {
      '204': {
        description: 'Customer33 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}