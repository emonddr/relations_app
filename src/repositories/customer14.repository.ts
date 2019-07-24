import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer14, Customer14Relations, Order14} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order14Repository} from './order14.repository';

export class Customer14Repository extends DefaultCrudRepository<
  Customer14,
  typeof Customer14.prototype.id,
  Customer14Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order14, typeof Customer14.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order14Repository') protected orderRepositoryGetter: Getter<Order14Repository>,
  ) {
    super(Customer14, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
