import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order23, Order23Relations, Customer23} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer23Repository} from './customer23.repository';

export class Order23Repository extends DefaultCrudRepository<
  Order23,
  typeof Order23.prototype.id,
  Order23Relations
> {
  public readonly customer23: BelongsToAccessor<Customer23, typeof Order23.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer23Repository') protected customer23RepositoryGetter: Getter<Customer23Repository>,
  ) {
    super(Order23, dataSource);
    this.customer23 = this.createBelongsToAccessorFor('customer23', customer23RepositoryGetter,);
  }
}