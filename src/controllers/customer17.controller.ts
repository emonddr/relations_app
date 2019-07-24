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
import {Customer17} from '../models';
import {Customer17Repository} from '../repositories';

export class Customer17Controller {
  constructor(
    @repository(Customer17Repository)
    public customerRepository: Customer17Repository,
  ) {}

  @post('/customers17', {
    responses: {
      '200': {
        description: 'Customer17 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer17}}},
      },
    },
  })
  async create(@requestBody() customer: Customer17): Promise<Customer17> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers17/count', {
    responses: {
      '200': {
        description: 'Customer17 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer17)) where?: Where<Customer17>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers17', {
    responses: {
      '200': {
        description: 'Array of Customer17 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer17}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer17)) filter?: Filter<Customer17>,
  ): Promise<Customer17[]> {
    let customers: Customer17[] = await this.customerRepository.find(filter);
    //console.log(Customer17.prototype.id);
    //console.log(` typeof Customer17.prototype.id===${(typeof Customer17.prototype.id)}`);

    // console.log(Customer17.id); //compiler doesn't like
    //let c: Customer17 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers17', {
    responses: {
      '200': {
        description: 'Customer17 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer17, {partial: true}),
        },
      },
    })
    customer: Customer17,
    @param.query.object('where', getWhereSchemaFor(Customer17)) where?: Where<Customer17>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers17/{id}', {
    responses: {
      '200': {
        description: 'Customer17 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer17}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer17> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers17/{id}', {
    responses: {
      '204': {
        description: 'Customer17 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer17, {partial: true}),
        },
      },
    })
    customer: Customer17,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers17/{id}', {
    responses: {
      '204': {
        description: 'Customer17 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer17,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers17/{id}', {
    responses: {
      '204': {
        description: 'Customer17 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}