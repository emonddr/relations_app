import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order24, Order24Relations, Customer24} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer24Repository} from './customer24.repository';

export class Order24Repository extends DefaultCrudRepository<
  Order24,
  typeof Order24.prototype.id,
  Order24Relations
> {
  public readonly customer24: BelongsToAccessor<Customer24, typeof Order24.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer24Repository') protected customer24RepositoryGetter: Getter<Customer24Repository>,
  ) {
    super(Order24, dataSource);
    this.customer24 = this.createBelongsToAccessorFor('customer24', customer24RepositoryGetter,);
  }
}