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
import {Customer15} from '../models';
import {Customer15Repository} from '../repositories';

export class Customer15Controller {
  constructor(
    @repository(Customer15Repository)
    public customerRepository: Customer15Repository,
  ) {}

  @post('/customers15', {
    responses: {
      '200': {
        description: 'Customer15 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer15}}},
      },
    },
  })
  async create(@requestBody() customer: Customer15): Promise<Customer15> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers15/count', {
    responses: {
      '200': {
        description: 'Customer15 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer15)) where?: Where<Customer15>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers15', {
    responses: {
      '200': {
        description: 'Array of Customer15 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer15}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer15)) filter?: Filter<Customer15>,
  ): Promise<Customer15[]> {
    let customers: Customer15[] = await this.customerRepository.find(filter);
    //console.log(Customer15.prototype.id);
    //console.log(` typeof Customer15.prototype.id===${(typeof Customer15.prototype.id)}`);

    // console.log(Customer15.id); //compiler doesn't like
    //let c: Customer15 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers15', {
    responses: {
      '200': {
        description: 'Customer15 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer15, {partial: true}),
        },
      },
    })
    customer: Customer15,
    @param.query.object('where', getWhereSchemaFor(Customer15)) where?: Where<Customer15>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers15/{id}', {
    responses: {
      '200': {
        description: 'Customer15 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer15}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer15> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers15/{id}', {
    responses: {
      '204': {
        description: 'Customer15 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer15, {partial: true}),
        },
      },
    })
    customer: Customer15,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers15/{id}', {
    responses: {
      '204': {
        description: 'Customer15 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer15,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers15/{id}', {
    responses: {
      '204': {
        description: 'Customer15 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}