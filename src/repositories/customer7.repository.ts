import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer7, Customer7Relations, Order7} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order7Repository} from './order7.repository';

export class Customer7Repository extends DefaultCrudRepository<
  Customer7,
  typeof Customer7.prototype.id,
  Customer7Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order7, typeof Customer7.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order7Repository') protected orderRepositoryGetter: Getter<Order7Repository>,
  ) {
    super(Customer7, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
