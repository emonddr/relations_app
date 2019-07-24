import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer22, Customer22Relations, Order22} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order22Repository} from './order22.repository';

export class Customer22Repository extends DefaultCrudRepository<
  Customer22,
  typeof Customer22.prototype.id,
  Customer22Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order22, typeof Customer22.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order22Repository') protected orderRepositoryGetter: Getter<Order22Repository>,
  ) {
    super(Customer22, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
