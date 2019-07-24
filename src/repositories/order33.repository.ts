import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order33, Order33Relations, Customer33} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer33Repository} from './customer33.repository';

export class Order33Repository extends DefaultCrudRepository<
  Order33,
  typeof Order33.prototype.id,
  Order33Relations
> {
  public readonly customer33: BelongsToAccessor<Customer33, typeof Order33.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer33Repository') protected customer33RepositoryGetter: Getter<Customer33Repository>,
  ) {
    super(Order33, dataSource);
    this.customer33 = this.createBelongsToAccessorFor('customer33', customer33RepositoryGetter,);
  }
}