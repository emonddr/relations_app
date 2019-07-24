import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order14, Order14Relations, Customer14} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer14Repository} from './customer14.repository';

export class Order14Repository extends DefaultCrudRepository<
  Order14,
  typeof Order14.prototype.id,
  Order14Relations
> {
  public readonly customer14: BelongsToAccessor<Customer14, typeof Order14.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer14Repository') protected customer14RepositoryGetter: Getter<Customer14Repository>,
  ) {
    super(Order14, dataSource);
    this.customer14 = this.createBelongsToAccessorFor('customer14', customer14RepositoryGetter,);
  }
}