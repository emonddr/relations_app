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
import {Customer22} from '../models';
import {Customer22Repository} from '../repositories';

export class Customer22Controller {
  constructor(
    @repository(Customer22Repository)
    public customerRepository: Customer22Repository,
  ) {}

  @post('/customers22', {
    responses: {
      '200': {
        description: 'Customer22 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer22}}},
      },
    },
  })
  async create(@requestBody() customer: Customer22): Promise<Customer22> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers22/count', {
    responses: {
      '200': {
        description: 'Customer22 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer22)) where?: Where<Customer22>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers22', {
    responses: {
      '200': {
        description: 'Array of Customer22 model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer22}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer22)) filter?: Filter<Customer22>,
  ): Promise<Customer22[]> {
    let customers: Customer22[] = await this.customerRepository.find(filter);
    //console.log(Customer22.prototype.id);
    //console.log(` typeof Customer22.prototype.id===${(typeof Customer22.prototype.id)}`);

    // console.log(Customer22.id); //compiler doesn't like
    //let c: Customer22 = customers[0];
    //console.log(c.prototype.id);// runtime doesn't like
    //console.log(c.id);
    return customers;
  }

  @patch('/customers22', {
    responses: {
      '200': {
        description: 'Customer22 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer22, {partial: true}),
        },
      },
    })
    customer: Customer22,
    @param.query.object('where', getWhereSchemaFor(Customer22)) where?: Where<Customer22>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers22/{id}', {
    responses: {
      '200': {
        description: 'Customer22 model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer22}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer22> {
    return await this.customerRepository.findById(id);
  }

  @patch('/customers22/{id}', {
    responses: {
      '204': {
        description: 'Customer22 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer22, {partial: true}),
        },
      },
    })
    customer: Customer22,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers22/{id}', {
    responses: {
      '204': {
        description: 'Customer22 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer22,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers22/{id}', {
    responses: {
      '204': {
        description: 'Customer22 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}