import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer23, Customer23Relations, Order23} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order23Repository} from './order23.repository';

export class Customer23Repository extends DefaultCrudRepository<
  Customer23,
  typeof Customer23.prototype.id,
  Customer23Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order23, typeof Customer23.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order23Repository') protected orderRepositoryGetter: Getter<Order23Repository>,
  ) {
    super(Customer23, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
