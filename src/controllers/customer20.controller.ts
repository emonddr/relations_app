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
import {Customer20} from '../models';
import {Customer20Repository} from '../repositories';

export class Customer20Controller {
  constructor(
    @repository(Customer20Repository)
    public customerRepository: Customer20Repository,
  ) {}

  @post('/customers20', {
    responses: {
      '200': {
        description: 'Customer20 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer20}}},
      },
    },
  })
  async create(@requestBody() customer: Customer20): Promise<Customer20> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers20/count', {
    responses: {
      '200': {
        description: 'Customer20 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer20)) where?: Where<Customer20>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers20', {
    responses: {
      '200': {
        description: 'Array of Customer20 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer20}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer20)) filter?: Filter<Customer20>,
  ): Promise<Customer20[]> {
    let customers: Customer20[] = await this.customerRepository.find(filter);
    //console.log(Customer20.prototype.id);
    //console.log(` typeof Customer20.prototype.id===${(typeof Customer20.prototype.id)}`);

    // console.log(Customer20.id); //compiler doesn't like
    //let c: Customer20 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers20', {
    responses: {
      '200': {
        description: 'Customer20 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer20, {partial: true}),
        },
      },
    })
    customer: Customer20,
    @param.query.object('where', getWhereSchemaFor(Customer20)) where?: Where<Customer20>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers20/{id}', {
    responses: {
      '200': {
        description: 'Customer20 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer20}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer20> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers20/{id}', {
    responses: {
      '204': {
        description: 'Customer20 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer20, {partial: true}),
        },
      },
    })
    customer: Customer20,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers20/{id}', {
    responses: {
      '204': {
        description: 'Customer20 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer20,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers20/{id}', {
    responses: {
      '204': {
        description: 'Customer20 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}