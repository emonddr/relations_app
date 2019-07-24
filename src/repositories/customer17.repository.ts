import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer17, Customer17Relations, Order17} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order17Repository} from './order17.repository';

export class Customer17Repository extends DefaultCrudRepository<
  Customer17,
  typeof Customer17.prototype.id,
  Customer17Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order17, typeof Customer17.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order17Repository') protected orderRepositoryGetter: Getter<Order17Repository>,
  ) {
    super(Customer17, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
