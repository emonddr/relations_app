import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order31, Order31Relations, Customer31} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer31Repository} from './customer31.repository';

export class Order31Repository extends DefaultCrudRepository<
  Order31,
  typeof Order31.prototype.id,
  Order31Relations
> {
  public readonly customer31: BelongsToAccessor<Customer31, typeof Order31.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer31Repository') protected customer31RepositoryGetter: Getter<Customer31Repository>,
  ) {
    super(Order31, dataSource);
    this.customer31 = this.createBelongsToAccessorFor('customer31', customer31RepositoryGetter,);
  }
}