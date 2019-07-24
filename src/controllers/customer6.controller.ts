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
import {Customer6} from '../models';
import {Customer6Repository} from '../repositories';

export class Customer6Controller {
  constructor(
    @repository(Customer6Repository)
    public customerRepository: Customer6Repository,
  ) {}

  @post('/customers6', {
    responses: {
      '200': {
        description: 'Customer6 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer6}}},
      },
    },
  })
  async create(@requestBody() customer: Customer6): Promise<Customer6> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers6/count', {
    responses: {
      '200': {
        description: 'Customer6 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer6)) where?: Where<Customer6>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers6', {
    responses: {
      '200': {
        description: 'Array of Customer6 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer6}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer6)) filter?: Filter<Customer6>,
  ): Promise<Customer6[]> {
    let customers: Customer6[] = await this.customerRepository.find(filter);
    //console.log(Customer6.prototype.id);
    //console.log(` typeof Customer6.prototype.id===${(typeof Customer6.prototype.id)}`);

    // console.log(Customer6.id); //compiler doesn't like
    //let c: Customer6 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers6', {
    responses: {
      '200': {
        description: 'Customer6 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer6, {partial: true}),
        },
      },
    })
    customer: Customer6,
    @param.query.object('where', getWhereSchemaFor(Customer6)) where?: Where<Customer6>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers6/{id}', {
    responses: {
      '200': {
        description: 'Customer6 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer6}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer6> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers6/{id}', {
    responses: {
      '204': {
        description: 'Customer6 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer6, {partial: true}),
        },
      },
    })
    customer: Customer6,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers6/{id}', {
    responses: {
      '204': {
        description: 'Customer6 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer6,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers6/{id}', {
    responses: {
      '204': {
        description: 'Customer6 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}