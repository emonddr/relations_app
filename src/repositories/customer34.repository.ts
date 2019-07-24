import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer34, Customer34Relations, Order34} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order34Repository} from './order34.repository';

export class Customer34Repository extends DefaultCrudRepository<
  Customer34,
  typeof Customer34.prototype.id,
  Customer34Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order34, typeof Customer34.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order34Repository') protected orderRepositoryGetter: Getter<Order34Repository>,
  ) {
    super(Customer34, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
