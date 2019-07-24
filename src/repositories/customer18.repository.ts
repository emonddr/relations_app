import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer18, Customer18Relations, Order18} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order18Repository} from './order18.repository';

export class Customer18Repository extends DefaultCrudRepository<
  Customer18,
  typeof Customer18.prototype.id,
  Customer18Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order18, typeof Customer18.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order18Repository') protected orderRepositoryGetter: Getter<Order18Repository>,
  ) {
    super(Customer18, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
