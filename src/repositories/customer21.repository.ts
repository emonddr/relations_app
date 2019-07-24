import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer21, Customer21Relations, Order21} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order21Repository} from './order21.repository';

export class Customer21Repository extends DefaultCrudRepository<
  Customer21,
  typeof Customer21.prototype.id,
  Customer21Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order21, typeof Customer21.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order21Repository') protected orderRepositoryGetter: Getter<Order21Repository>,
  ) {
    super(Customer21, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
