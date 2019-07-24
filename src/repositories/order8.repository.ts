import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order8, Order8Relations, Customer8} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer8Repository} from './customer8.repository';

export class Order8Repository extends DefaultCrudRepository<
  Order8,
  typeof Order8.prototype.id,
  Order8Relations
> {
  public readonly customer8: BelongsToAccessor<Customer8, typeof Order8.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer8Repository') protected customer8RepositoryGetter: Getter<Customer8Repository>,
  ) {
    super(Order8, dataSource);
    this.customer8 = this.createBelongsToAccessorFor('customer8', customer8RepositoryGetter,);
  }
}