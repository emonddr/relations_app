import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer12, Customer12Relations, Order12} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order12Repository} from './order12.repository';

export class Customer12Repository extends DefaultCrudRepository<
  Customer12,
  typeof Customer12.prototype.id,
  Customer12Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order12, typeof Customer12.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order12Repository') protected orderRepositoryGetter: Getter<Order12Repository>,
  ) {
    super(Customer12, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
