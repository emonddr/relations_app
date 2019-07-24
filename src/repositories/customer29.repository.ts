import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer29, Customer29Relations, Order29} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order29Repository} from './order29.repository';

export class Customer29Repository extends DefaultCrudRepository<
  Customer29,
  typeof Customer29.prototype.id,
  Customer29Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order29, typeof Customer29.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order29Repository') protected orderRepositoryGetter: Getter<Order29Repository>,
  ) {
    super(Customer29, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
