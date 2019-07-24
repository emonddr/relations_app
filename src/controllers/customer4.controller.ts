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
import {Customer4} from '../models';
import {Customer4Repository} from '../repositories';

export class Customer4Controller {
  constructor(
    @repository(Customer4Repository)
    public customerRepository: Customer4Repository,
  ) {}

  @post('/customers4', {
    responses: {
      '200': {
        description: 'Customer4 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer4}}},
      },
    },
  })
  async create(@requestBody() customer: Customer4): Promise<Customer4> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers4/count', {
    responses: {
      '200': {
        description: 'Customer4 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer4)) where?: Where<Customer4>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers4', {
    responses: {
      '200': {
        description: 'Array of Customer4 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer4}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer4)) filter?: Filter<Customer4>,
  ): Promise<Customer4[]> {
    let customers: Customer4[] = await this.customerRepository.find(filter);
    //console.log(Customer4.prototype.id);
    //console.log(` typeof Customer4.prototype.id===${(typeof Customer4.prototype.id)}`);

    // console.log(Customer4.id); //compiler doesn't like
    //let c: Customer4 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers4', {
    responses: {
      '200': {
        description: 'Customer4 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer4, {partial: true}),
        },
      },
    })
    customer: Customer4,
    @param.query.object('where', getWhereSchemaFor(Customer4)) where?: Where<Customer4>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers4/{id}', {
    responses: {
      '200': {
        description: 'Customer4 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer4}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer4> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers4/{id}', {
    responses: {
      '204': {
        description: 'Customer4 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer4, {partial: true}),
        },
      },
    })
    customer: Customer4,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers4/{id}', {
    responses: {
      '204': {
        description: 'Customer4 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer4,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers4/{id}', {
    responses: {
      '204': {
        description: 'Customer4 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}