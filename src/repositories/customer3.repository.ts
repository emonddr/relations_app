import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer3, Customer3Relations, Order3} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order3Repository} from './order3.repository';

export class Customer3Repository extends DefaultCrudRepository<
  Customer3,
  typeof Customer3.prototype.id,
  Customer3Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order3, typeof Customer3.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order3Repository') protected orderRepositoryGetter: Getter<Order3Repository>,
  ) {
    super(Customer3, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
