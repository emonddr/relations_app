import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer25, Customer25Relations, Order25} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order25Repository} from './order25.repository';

export class Customer25Repository extends DefaultCrudRepository<
  Customer25,
  typeof Customer25.prototype.id,
  Customer25Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order25, typeof Customer25.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order25Repository') protected orderRepositoryGetter: Getter<Order25Repository>,
  ) {
    super(Customer25, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
