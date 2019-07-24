import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer19, Customer19Relations, Order19} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order19Repository} from './order19.repository';

export class Customer19Repository extends DefaultCrudRepository<
  Customer19,
  typeof Customer19.prototype.id,
  Customer19Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order19, typeof Customer19.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order19Repository') protected orderRepositoryGetter: Getter<Order19Repository>,
  ) {
    super(Customer19, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
