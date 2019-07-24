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
import {Customer13} from '../models';
import {Customer13Repository} from '../repositories';

export class Customer13Controller {
  constructor(
    @repository(Customer13Repository)
    public customerRepository: Customer13Repository,
  ) {}

  @post('/customers13', {
    responses: {
      '200': {
        description: 'Customer13 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer13}}},
      },
    },
  })
  async create(@requestBody() customer: Customer13): Promise<Customer13> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers13/count', {
    responses: {
      '200': {
        description: 'Customer13 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer13)) where?: Where<Customer13>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers13', {
    responses: {
      '200': {
        description: 'Array of Customer13 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer13}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer13)) filter?: Filter<Customer13>,
  ): Promise<Customer13[]> {
    let customers: Customer13[] = await this.customerRepository.find(filter);
    //console.log(Customer13.prototype.id);
    //console.log(` typeof Customer13.prototype.id===${(typeof Customer13.prototype.id)}`);

    // console.log(Customer13.id); //compiler doesn't like
    //let c: Customer13 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers13', {
    responses: {
      '200': {
        description: 'Customer13 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer13, {partial: true}),
        },
      },
    })
    customer: Customer13,
    @param.query.object('where', getWhereSchemaFor(Customer13)) where?: Where<Customer13>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers13/{id}', {
    responses: {
      '200': {
        description: 'Customer13 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer13}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer13> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers13/{id}', {
    responses: {
      '204': {
        description: 'Customer13 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer13, {partial: true}),
        },
      },
    })
    customer: Customer13,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers13/{id}', {
    responses: {
      '204': {
        description: 'Customer13 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer13,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers13/{id}', {
    responses: {
      '204': {
        description: 'Customer13 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}