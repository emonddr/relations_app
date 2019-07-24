import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer6, Customer6Relations, Order6} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order6Repository} from './order6.repository';

export class Customer6Repository extends DefaultCrudRepository<
  Customer6,
  typeof Customer6.prototype.id,
  Customer6Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order6, typeof Customer6.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order6Repository') protected orderRepositoryGetter: Getter<Order6Repository>,
  ) {
    super(Customer6, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
