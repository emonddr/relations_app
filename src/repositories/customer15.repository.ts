import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer15, Customer15Relations, Order15} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order15Repository} from './order15.repository';

export class Customer15Repository extends DefaultCrudRepository<
  Customer15,
  typeof Customer15.prototype.id,
  Customer15Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order15, typeof Customer15.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order15Repository') protected orderRepositoryGetter: Getter<Order15Repository>,
  ) {
    super(Customer15, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
