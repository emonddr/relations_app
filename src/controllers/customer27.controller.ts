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
import {Customer27} from '../models';
import {Customer27Repository} from '../repositories';

export class Customer27Controller {
  constructor(
    @repository(Customer27Repository)
    public customerRepository: Customer27Repository,
  ) {}

  @post('/customers27', {
    responses: {
      '200': {
        description: 'Customer27 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer27}}},
      },
    },
  })
  async create(@requestBody() customer: Customer27): Promise<Customer27> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers27/count', {
    responses: {
      '200': {
        description: 'Customer27 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer27)) where?: Where<Customer27>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers27', {
    responses: {
      '200': {
        description: 'Array of Customer27 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer27}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer27)) filter?: Filter<Customer27>,
  ): Promise<Customer27[]> {
    let customers: Customer27[] = await this.customerRepository.find(filter);
    //console.log(Customer27.prototype.id);
    //console.log(` typeof Customer27.prototype.id===${(typeof Customer27.prototype.id)}`);

    // console.log(Customer27.id); //compiler doesn't like
    //let c: Customer27 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers27', {
    responses: {
      '200': {
        description: 'Customer27 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer27, {partial: true}),
        },
      },
    })
    customer: Customer27,
    @param.query.object('where', getWhereSchemaFor(Customer27)) where?: Where<Customer27>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers27/{id}', {
    responses: {
      '200': {
        description: 'Customer27 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer27}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer27> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers27/{id}', {
    responses: {
      '204': {
        description: 'Customer27 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer27, {partial: true}),
        },
      },
    })
    customer: Customer27,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers27/{id}', {
    responses: {
      '204': {
        description: 'Customer27 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer27,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers27/{id}', {
    responses: {
      '204': {
        description: 'Customer27 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}