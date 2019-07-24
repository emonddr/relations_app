import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer24, Customer24Relations, Order24} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order24Repository} from './order24.repository';

export class Customer24Repository extends DefaultCrudRepository<
  Customer24,
  typeof Customer24.prototype.id,
  Customer24Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order24, typeof Customer24.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order24Repository') protected orderRepositoryGetter: Getter<Order24Repository>,
  ) {
    super(Customer24, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
