import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer11, Customer11Relations, Order11} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order11Repository} from './order11.repository';

export class Customer11Repository extends DefaultCrudRepository<
  Customer11,
  typeof Customer11.prototype.id,
  Customer11Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order11, typeof Customer11.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order11Repository') protected orderRepositoryGetter: Getter<Order11Repository>,
  ) {
    super(Customer11, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
