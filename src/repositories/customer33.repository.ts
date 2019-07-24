import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer33, Customer33Relations, Order33} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order33Repository} from './order33.repository';

export class Customer33Repository extends DefaultCrudRepository<
  Customer33,
  typeof Customer33.prototype.id,
  Customer33Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order33, typeof Customer33.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order33Repository') protected orderRepositoryGetter: Getter<Order33Repository>,
  ) {
    super(Customer33, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
