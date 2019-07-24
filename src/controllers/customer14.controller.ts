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
import {Customer14} from '../models';
import {Customer14Repository} from '../repositories';

export class Customer14Controller {
  constructor(
    @repository(Customer14Repository)
    public customerRepository: Customer14Repository,
  ) {}

  @post('/customers14', {
    responses: {
      '200': {
        description: 'Customer14 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer14}}},
      },
    },
  })
  async create(@requestBody() customer: Customer14): Promise<Customer14> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers14/count', {
    responses: {
      '200': {
        description: 'Customer14 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer14)) where?: Where<Customer14>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers14', {
    responses: {
      '200': {
        description: 'Array of Customer14 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer14}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer14)) filter?: Filter<Customer14>,
  ): Promise<Customer14[]> {
    let customers: Customer14[] = await this.customerRepository.find(filter);
    //console.log(Customer14.prototype.id);
    //console.log(` typeof Customer14.prototype.id===${(typeof Customer14.prototype.id)}`);

    // console.log(Customer14.id); //compiler doesn't like
    //let c: Customer14 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers14', {
    responses: {
      '200': {
        description: 'Customer14 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer14, {partial: true}),
        },
      },
    })
    customer: Customer14,
    @param.query.object('where', getWhereSchemaFor(Customer14)) where?: Where<Customer14>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers14/{id}', {
    responses: {
      '200': {
        description: 'Customer14 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer14}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer14> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers14/{id}', {
    responses: {
      '204': {
        description: 'Customer14 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer14, {partial: true}),
        },
      },
    })
    customer: Customer14,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers14/{id}', {
    responses: {
      '204': {
        description: 'Customer14 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer14,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers14/{id}', {
    responses: {
      '204': {
        description: 'Customer14 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}