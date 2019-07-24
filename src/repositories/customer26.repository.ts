import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Customer26, Customer26Relations, Order26} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Order26Repository} from './order26.repository';

export class Customer26Repository extends DefaultCrudRepository<
  Customer26,
  typeof Customer26.prototype.id,
  Customer26Relations
> {

  public readonly orders: HasManyRepositoryFactory<Order26, typeof Customer26.prototype.id>;

  constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Order26Repository') protected orderRepositoryGetter: Getter<Order26Repository>,
  ) {
    super(Customer26, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
  }
}
