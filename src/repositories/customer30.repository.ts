import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer30, Customer30Relations, Order30} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order30Repository} from './order30.repository';

export class Customer30Repository extends DefaultCrudRepository<
  Customer30,
  typeof Customer30.prototype.id,
  Customer30Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order30, typeof Customer30.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order30Repository') protected orderRepositoryGetter: Getter<Order30Repository>,
  ) {
    super(Customer30, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
