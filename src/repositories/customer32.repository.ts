import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer32, Customer32Relations, Order32} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order32Repository} from './order32.repository';

export class Customer32Repository extends DefaultCrudRepository<
  Customer32,
  typeof Customer32.prototype.id,
  Customer32Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order32, typeof Customer32.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order32Repository') protected orderRepositoryGetter: Getter<Order32Repository>,
  ) {
    super(Customer32, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
