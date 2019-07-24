import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer35, Customer35Relations, Order35} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order35Repository} from './order35.repository';

export class Customer35Repository extends DefaultCrudRepository<
  Customer35,
  typeof Customer35.prototype.id,
  Customer35Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order35, typeof Customer35.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order35Repository') protected orderRepositoryGetter: Getter<Order35Repository>,
  ) {
    super(Customer35, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
