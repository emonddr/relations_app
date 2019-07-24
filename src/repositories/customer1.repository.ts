import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer1, Customer1Relations, Order1} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order1Repository} from './order1.repository';

export class Customer1Repository extends DefaultCrudRepository<
  Customer1,
  typeof Customer1.prototype.id,
  Customer1Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order1, typeof Customer1.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order1Repository') protected orderRepositoryGetter: Getter<Order1Repository>,
  ) {
    super(Customer1, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
