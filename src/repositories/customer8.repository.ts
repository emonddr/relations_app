import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer8, Customer8Relations, Order8} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order8Repository} from './order8.repository';

export class Customer8Repository extends DefaultCrudRepository<
  Customer8,
  typeof Customer8.prototype.id,
  Customer8Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order8, typeof Customer8.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order8Repository') protected orderRepositoryGetter: Getter<Order8Repository>,
  ) {
    super(Customer8, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
