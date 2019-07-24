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
import {Customer25} from '../models';
import {Customer25Repository} from '../repositories';

export class Customer25Controller {
  constructor(
    @repository(Customer25Repository)
    public customerRepository: Customer25Repository,
  ) {}

  @post('/customers25', {
    responses: {
      '200': {
        description: 'Customer25 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer25}}},
      },
    },
  })
  async create(@requestBody() customer: Customer25): Promise<Customer25> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers25/count', {
    responses: {
      '200': {
        description: 'Customer25 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer25)) where?: Where<Customer25>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers25', {
    responses: {
      '200': {
        description: 'Array of Customer25 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer25}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer25)) filter?: Filter<Customer25>,
  ): Promise<Customer25[]> {
    let customers: Customer25[] = await this.customerRepository.find(filter);
    //console.log(Customer25.prototype.id);
    //console.log(` typeof Customer25.prototype.id===${(typeof Customer25.prototype.id)}`);

    // console.log(Customer25.id); //compiler doesn't like
    //let c: Customer25 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers25', {
    responses: {
      '200': {
        description: 'Customer25 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer25, {partial: true}),
        },
      },
    })
    customer: Customer25,
    @param.query.object('where', getWhereSchemaFor(Customer25)) where?: Where<Customer25>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers25/{id}', {
    responses: {
      '200': {
        description: 'Customer25 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer25}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer25> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers25/{id}', {
    responses: {
      '204': {
        description: 'Customer25 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer25, {partial: true}),
        },
      },
    })
    customer: Customer25,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers25/{id}', {
    responses: {
      '204': {
        description: 'Customer25 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer25,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers25/{id}', {
    responses: {
      '204': {
        description: 'Customer25 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}