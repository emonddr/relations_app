import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer10, Customer10Relations, Order10} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order10Repository} from './order10.repository';

export class Customer10Repository extends DefaultCrudRepository<
  Customer10,
  typeof Customer10.prototype.id,
  Customer10Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order10, typeof Customer10.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order10Repository') protected orderRepositoryGetter: Getter<Order10Repository>,
  ) {
    super(Customer10, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
