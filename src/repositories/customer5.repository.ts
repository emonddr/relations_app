import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer5, Customer5Relations, Order5} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order5Repository} from './order5.repository';

export class Customer5Repository extends DefaultCrudRepository<
  Customer5,
  typeof Customer5.prototype.id,
  Customer5Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order5, typeof Customer5.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order5Repository') protected orderRepositoryGetter: Getter<Order5Repository>,
  ) {
    super(Customer5, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
