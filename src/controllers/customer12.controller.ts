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
import {Customer12} from '../models';
import {Customer12Repository} from '../repositories';

export class Customer12Controller {
  constructor(
    @repository(Customer12Repository)
    public customerRepository: Customer12Repository,
  ) {}

  @post('/customers12', {
    responses: {
      '200': {
        description: 'Customer12 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer12}}},
      },
    },
  })
  async create(@requestBody() customer: Customer12): Promise<Customer12> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers12/count', {
    responses: {
      '200': {
        description: 'Customer12 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer12)) where?: Where<Customer12>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers12', {
    responses: {
      '200': {
        description: 'Array of Customer12 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer12}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer12)) filter?: Filter<Customer12>,
  ): Promise<Customer12[]> {
    let customers: Customer12[] = await this.customerRepository.find(filter);
    //console.log(Customer12.prototype.id);
    //console.log(` typeof Customer12.prototype.id===${(typeof Customer12.prototype.id)}`);

    // console.log(Customer12.id); //compiler doesn't like
    //let c: Customer12 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers12', {
    responses: {
      '200': {
        description: 'Customer12 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer12, {partial: true}),
        },
      },
    })
    customer: Customer12,
    @param.query.object('where', getWhereSchemaFor(Customer12)) where?: Where<Customer12>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers12/{id}', {
    responses: {
      '200': {
        description: 'Customer12 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer12}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer12> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers12/{id}', {
    responses: {
      '204': {
        description: 'Customer12 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer12, {partial: true}),
        },
      },
    })
    customer: Customer12,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers12/{id}', {
    responses: {
      '204': {
        description: 'Customer12 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer12,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers12/{id}', {
    responses: {
      '204': {
        description: 'Customer12 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}