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
import {Customer2} from '../models';
import {Customer2Repository} from '../repositories';

export class Customer2Controller {
  constructor(
    @repository(Customer2Repository)
    public customerRepository: Customer2Repository,
  ) {}

  @post('/customers2', {
    responses: {
      '200': {
        description: 'Customer2 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer2}}},
      },
    },
  })
  async create(@requestBody() customer: Customer2): Promise<Customer2> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers2/count', {
    responses: {
      '200': {
        description: 'Customer2 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer2)) where?: Where<Customer2>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers2', {
    responses: {
      '200': {
        description: 'Array of Customer2 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer2}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer2)) filter?: Filter<Customer2>,
  ): Promise<Customer2[]> {
    let customers: Customer2[] = await this.customerRepository.find(filter);
    //console.log(Customer2.prototype.id);
    //console.log(` typeof Customer2.prototype.id===${(typeof Customer2.prototype.id)}`);

    // console.log(Customer2.id); //compiler doesn't like
    //let c: Customer2 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers2', {
    responses: {
      '200': {
        description: 'Customer2 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer2, {partial: true}),
        },
      },
    })
    customer: Customer2,
    @param.query.object('where', getWhereSchemaFor(Customer2)) where?: Where<Customer2>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers2/{id}', {
    responses: {
      '200': {
        description: 'Customer2 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer2}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer2> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers2/{id}', {
    responses: {
      '204': {
        description: 'Customer2 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer2, {partial: true}),
        },
      },
    })
    customer: Customer2,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers2/{id}', {
    responses: {
      '204': {
        description: 'Customer2 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer2,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers2/{id}', {
    responses: {
      '204': {
        description: 'Customer2 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}