import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order28, Order28Relations, Customer28} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer28Repository} from './customer28.repository';

export class Order28Repository extends DefaultCrudRepository<
  Order28,
  typeof Order28.prototype.id,
  Order28Relations
> {
  public readonly customer28: BelongsToAccessor<Customer28, typeof Order28.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer28Repository') protected customer28RepositoryGetter: Getter<Customer28Repository>,
  ) {
    super(Order28, dataSource);
    this.customer28 = this.createBelongsToAccessorFor('customer28', customer28RepositoryGetter,);
  }
}