import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer9, Customer9Relations, Order9} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order9Repository} from './order9.repository';

export class Customer9Repository extends DefaultCrudRepository<
  Customer9,
  typeof Customer9.prototype.id,
  Customer9Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order9, typeof Customer9.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order9Repository') protected orderRepositoryGetter: Getter<Order9Repository>,
  ) {
    super(Customer9, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
