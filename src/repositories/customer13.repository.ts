import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer13, Customer13Relations, Order13} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order13Repository} from './order13.repository';

export class Customer13Repository extends DefaultCrudRepository<
  Customer13,
  typeof Customer13.prototype.id,
  Customer13Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order13, typeof Customer13.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order13Repository') protected orderRepositoryGetter: Getter<Order13Repository>,
  ) {
    super(Customer13, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
