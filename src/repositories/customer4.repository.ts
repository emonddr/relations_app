import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer4, Customer4Relations, Order4} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order4Repository} from './order4.repository';

export class Customer4Repository extends DefaultCrudRepository<
  Customer4,
  typeof Customer4.prototype.id,
  Customer4Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order4, typeof Customer4.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order4Repository') protected orderRepositoryGetter: Getter<Order4Repository>,
  ) {
    super(Customer4, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
