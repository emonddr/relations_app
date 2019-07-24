import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer16, Customer16Relations, Order16} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order16Repository} from './order16.repository';

export class Customer16Repository extends DefaultCrudRepository<
  Customer16,
  typeof Customer16.prototype.id,
  Customer16Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order16, typeof Customer16.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order16Repository') protected orderRepositoryGetter: Getter<Order16Repository>,
  ) {
    super(Customer16, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
