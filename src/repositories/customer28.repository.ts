import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer28, Customer28Relations, Order28} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order28Repository} from './order28.repository';

export class Customer28Repository extends DefaultCrudRepository<
  Customer28,
  typeof Customer28.prototype.id,
  Customer28Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order28, typeof Customer28.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order28Repository') protected orderRepositoryGetter: Getter<Order28Repository>,
  ) {
    super(Customer28, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
