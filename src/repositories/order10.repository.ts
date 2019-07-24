import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order10, Order10Relations, Customer10} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer10Repository} from './customer10.repository';

export class Order10Repository extends DefaultCrudRepository<
  Order10,
  typeof Order10.prototype.id,
  Order10Relations
> {
  public readonly customer10: BelongsToAccessor<Customer10, typeof Order10.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer10Repository') protected customer10RepositoryGetter: Getter<Customer10Repository>,
  ) {
    super(Order10, dataSource);
    this.customer10 = this.createBelongsToAccessorFor('customer10', customer10RepositoryGetter,);
  }
}