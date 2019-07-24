import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer2, Customer2Relations, Order2} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order2Repository} from './order2.repository';

export class Customer2Repository extends DefaultCrudRepository<
  Customer2,
  typeof Customer2.prototype.id,
  Customer2Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order2, typeof Customer2.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order2Repository') protected orderRepositoryGetter: Getter<Order2Repository>,
  ) {
    super(Customer2, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
