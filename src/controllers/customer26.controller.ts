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
import {Customer26} from '../models';
import {Customer26Repository} from '../repositories';

export class Customer26Controller {
  constructor(
    @repository(Customer26Repository)
    public customerRepository: Customer26Repository,
  ) {}

  @post('/customers26', {
    responses: {
      '200': {
        description: 'Customer26 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer26}}},
      },
    },
  })
  async create(@requestBody() customer: Customer26): Promise<Customer26> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers26/count', {
    responses: {
      '200': {
        description: 'Customer26 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer26)) where?: Where<Customer26>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers26', {
    responses: {
      '200': {
        description: 'Array of Customer26 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer26}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer26)) filter?: Filter<Customer26>,
  ): Promise<Customer26[]> {
    let customers: Customer26[] = await this.customerRepository.find(filter);
    //console.log(Customer26.prototype.id);
    //console.log(` typeof Customer26.prototype.id===${(typeof Customer26.prototype.id)}`);

    // console.log(Customer26.id); //compiler doesn't like
    //let c: Customer26 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers26', {
    responses: {
      '200': {
        description: 'Customer26 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer26, {partial: true}),
        },
      },
    })
    customer: Customer26,
    @param.query.object('where', getWhereSchemaFor(Customer26)) where?: Where<Customer26>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers26/{id}', {
    responses: {
      '200': {
        description: 'Customer26 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer26}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer26> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers26/{id}', {
    responses: {
      '204': {
        description: 'Customer26 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer26, {partial: true}),
        },
      },
    })
    customer: Customer26,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers26/{id}', {
    responses: {
      '204': {
        description: 'Customer26 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer26,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers26/{id}', {
    responses: {
      '204': {
        description: 'Customer26 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}