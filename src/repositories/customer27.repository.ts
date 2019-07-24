import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer27, Customer27Relations, Order27} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order27Repository} from './order27.repository';

export class Customer27Repository extends DefaultCrudRepository<
  Customer27,
  typeof Customer27.prototype.id,
  Customer27Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order27, typeof Customer27.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order27Repository') protected orderRepositoryGetter: Getter<Order27Repository>,
  ) {
    super(Customer27, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
