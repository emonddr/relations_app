import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer31, Customer31Relations, Order31} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order31Repository} from './order31.repository';

export class Customer31Repository extends DefaultCrudRepository<
  Customer31,
  typeof Customer31.prototype.id,
  Customer31Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order31, typeof Customer31.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order31Repository') protected orderRepositoryGetter: Getter<Order31Repository>,
  ) {
    super(Customer31, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
