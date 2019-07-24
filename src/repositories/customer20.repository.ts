import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer20, Customer20Relations, Order20} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order20Repository} from './order20.repository';

export class Customer20Repository extends DefaultCrudRepository<
  Customer20,
  typeof Customer20.prototype.id,
  Customer20Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order20, typeof Customer20.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order20Repository') protected orderRepositoryGetter: Getter<Order20Repository>,
  ) {
    super(Customer20, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
